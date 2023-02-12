import { useState, useEffect } from "react";
import * as ProductServices from "../../../Services/ProductServices";
import CardContainer from "../../CardContainer/CardContainer";
import Loader from "../../Loader/Loader";

const AllProducts = () => {
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

	function onSearch(e) {
		e.preventDefault();
		setSearchInput(e.target.value);
	}

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
						{products
							.filter((product) => {
								if (searchInput === "") {
									return product;
								} else if (
									product.title
										.toLowerCase()
										.includes(searchInput.toLowerCase())
								) {
									return product;
								}
							})
							.map((x) => (
								<CardContainer
									key={x.id}
									product={x}
									button={x}
								/>
								// TODO: add message if no products found with this name!
							))}
					</ul>
				</>
			)}
		</div>
	);
};

export default AllProducts;
