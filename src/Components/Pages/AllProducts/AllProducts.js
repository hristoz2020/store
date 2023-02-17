import { useState, useEffect } from "react";
import * as ProductServices from "../../../services/productServices";
import CardContainer from "../../CardContainer/CardContainer";
import Loader from "../../Loader/Loader";

const AllProducts = ({token, handleClick }) => {
	const [products, setProducts] = useState([]);
	const [sortBy, setSortBy] = useState("desc");
	const [loading, setLoading] = useState(true);
	const [searchInput, setSearchInput] = useState("");
	const checkSortBy = sortBy === "desc" ? "asc" : "desc";

	useEffect(() => {
		ProductServices.getAscOrDescProducts(sortBy)
			.then((result) => {
				setLoading(false);
				setProducts(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [sortBy]);

	products.map((x) => (x.amount = 1));
	
	function onSearch(e) {
		e.preventDefault();
		setSearchInput(e.target.value);
	}

	let filtredProducts = products.filter((product) => product.title.toLowerCase().includes(searchInput.toLowerCase()));
	return (
		<div className="all-products-page">
			{loading ? (
				<Loader />
			) : (
				<>
					<h1>All Products</h1>
					<div className="all-products-sort-item">
						<h3>Sort by:</h3>
						<button onClick={() => setSortBy(checkSortBy)}>
							{checkSortBy}
						</button>
					</div>
					<label className="search-item">
						<input
							type="text"
							value={searchInput}
							placeholder="Search..."
							onChange={(e) => onSearch(e)}
						/>
					</label>
					<ul className="card-list">
						{filtredProducts.length > 0 ? (
							filtredProducts.map((x) => (
								<CardContainer
									key={x.id}
									product={x}
									detailsBtn={x}
									addToCartBtn={token}
									handleClick={handleClick}
								/>
							))
						) : (
							<h3 className="not-found-product">
								Not found product with this name!
							</h3>
						)}
					</ul>
				</>
			)}
		</div>
	);
};

export default AllProducts;
