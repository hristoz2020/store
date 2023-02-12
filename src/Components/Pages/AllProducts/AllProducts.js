import { useState, useEffect } from "react";
import * as ProductServices from "../../../Services/ProductServices";
import CardContainer from "../../CardContainer/CardContainer";
import Loader from "../../Loader/Loader";

const AllProducts = () => {
	const [products, setProducts] = useState([]);
	const [sortBy, setSortBy] = useState("desc");
	const [loading, setLoading] = useState(true);
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

	return (
		<div className="all-products-page">
			{loading ? (
				<Loader />
			) : (
				<>
					<h1>All Products</h1>
					Sort by:
					<button onClick={() => setSortBy(checkSortBy)}>
						{checkSortBy}
					</button>
					<form onSubmit={(e) => {console.log(e.target.value);}}>
						<label>
							<input type="text" name="name" />
						</label>
						<input type="submit" value="Search" />
					</form>
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
