import { useState, useEffect } from "react";
import * as ProductServices from "../../../Services/ProductServices";
import CardContainer from "../../CardContainer/CardContainer";
import Loader from "../../Loader/Loader";

const AllProducts = () => {
	const [products, setProducts] = useState([]);
	const [sortBy, setSortBy] = useState("desc");
	const [loading, setLoading] = useState(true);
	// const [searchInput, setSearchInput] = useState('');
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

	// function onSearch(e) {
	// 	e.preventDefault();

	// 	let formData = new FormData(e.currentTarget);
	// 	let searchByText = formData.get('name');
	// 	setSearchInput(searchByText);

	// 	if (searchInput.length > 0) {
	// 		products.filter((product) => {
	// 			return	product.title.searchInput
	// 		})
	// 	}
	// }

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
						{/* <form onSubmit={(e) => onSearch(e)}>
							<label>
								<input type="text" name="name" />
							</label>
							<input type="submit" value="Search" />
						</form> */}
					</div>
					<ul className="card-list">
						{products.map((x) => (
							<CardContainer key={x.id} product={x} button={x} />
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default AllProducts;
