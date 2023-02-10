import { useState, useEffect } from "react";
import * as ProductServices from "../../../Services/ProductServices";
import CardContainer from "../../CardContainer/CardContainer";

const AllProducts = () => {
	const [products, setProducts] = useState([]);
	const [btnText, setBtnText] = useState('desc');

	useEffect(() => {
		ProductServices.getAscOeDescProducts(btnText)
			.then(result => setProducts(result))
			.catch(err => {
				console.log(err);
			})
	}, [btnText]);

	function onClickedBtn(e) {
		setBtnText('asc');
	}

	return (
		<div className="all-products-page">
			<h1>All Products</h1>
			Sort by:
			<button onClick={onClickedBtn}>{btnText}</button>
			<ul className="card-list">
				{products.map((x) => (
					<CardContainer key={x.id} product={x} button={x} />
				))}
			</ul>
		</div>
	);
};

export default AllProducts;
