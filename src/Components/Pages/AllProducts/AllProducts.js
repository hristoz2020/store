import { useState, useEffect } from "react";
import * as ProductServices from "../../../Services/ProductServices";
import CardContainer from "../../CardContainer/CardContainer";

const AllProducts = () => {
	const [products, setProducts] = useState([]);
	const [sortBy, setSortBy] = useState('desc');
	console.log(products);
	const checkSortBy = sortBy === 'desc' ? 'asc' : 'desc';

	useEffect(() => {
		ProductServices.getAscOeDescProducts(sortBy)
			.then(result => setProducts(result))
			.catch(err => {
				console.log(err);
			})
	}, [sortBy]);

	return (
		<div className="all-products-page">
			<h1>All Products</h1>
			Sort by:
			<button onClick={() => setSortBy(checkSortBy)}>{checkSortBy}</button>
			<ul className="card-list">
				{products.map((x) => (
					<CardContainer key={x.id} product={x} button={x} />
				))}
			</ul>
		</div>
	);
};

export default AllProducts;
