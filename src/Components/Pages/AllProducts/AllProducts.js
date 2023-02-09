import { useState, useEffect } from "react";
import * as ProductServices from "../../../Services/ProductServices";
import CardContainer from "../../CardContainer/CardContainer";

const AllProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		ProductServices.getAllProducts()
			.then((result) => setProducts(result))
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="all-products-page">
			<h1>All Products</h1>
			<ul className="card-list">
				{products.map((x) => (
					<CardContainer key={x.id} product={x} button={x} />
				))}
			</ul>
		</div>
	);
};

export default AllProducts;
