import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as ProductService from "../../Services/ProductServices";
import Loader from "../Loader/Loader";

const Details = () => {
    const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState({});
	const [error, setError] = useState(false);

	const location = useLocation();
	const data = location.state;
	const productId = data.id;

	useEffect(() => {
		ProductService.getOneProduct(productId)
			.then((result) => {
				setLoading(false);
				setProduct(result);
			})
			.catch((err) => {
				setError(true);
			});
	}, [productId]);

	return (
		<div className="details-card">
			{loading 
				? <Loader />
				: <>
					<img className="details-card-img left" src={product.image} alt="product" />
					<div className="details-card-info right">
						<h3 className="details-card-title">Title: {product.title}</h3>
						<p className="details-card-category">Category: {product.category}</p>
						<p className="details-card-description">Description: {product.description}</p>
						<p className="details-card-price">Price: {product.price}BGN</p>
						<p className="">Rating: {product?.rating?.rate}</p>
					</div>
				</>
			} 
			{error && <p>Error!!</p>}
			
		</div>
	);
};

export default Details;
