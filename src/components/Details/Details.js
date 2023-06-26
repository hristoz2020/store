import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getOneProduct } from "../../services/productServices";
import Loader from "../Loader/Loader";

const Details = () => {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const location = useLocation();
	const data = location.state;
	const productId = data.id;

	let isProductAvailable = Object.keys(product).length > 0

	useEffect(() => {
		getOneProduct(productId)
			.then((result) => {
				setProduct(result);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(true);
			});
	}, [productId]);

	return (
		<div className="details-page">
			{isLoading && <Loader />}
			{isError && <p>Error!!</p>}
			{isProductAvailable && (
				<div className="details-card">
					<img
						className="details-card-img"
						src={product.image}
						alt="product"
					/>
					<div className="details-card-info">
						<h4 className="details-card-category">
							{product.category}
						</h4>
						<h2 className="details-card-title">{product.title}</h2>
						<p className="details-card-rating">
							Rating: {product?.rating?.rate}
							<i className="fa-solid fa-star"></i>(
							{product?.rating?.count})
						</p>
						<h3 className="details-card-price">
							{product.price}BGN
						</h3>
						<p className="details-card-description">
							{product.description}
						</p>
						<Link
							to={"/all-products"}
							className="add-to-cart-btn details-cart-back-btn"
						>
							Back to products
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Details;
