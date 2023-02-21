import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as ProductService from "../../services/productServices";
import Loader from "../Loader/Loader";

const Details = () => {
	const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
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
		<>
			{loading 
				? <Loader />
				: 	<div className="details-card">
					<img className="details-card-img" src={product.image} alt="product" />
					<div className="details-card-info">
						<h4 className="details-card-category">{product.category}</h4>
						<h2 className="details-card-title">{product.title}</h2>
						<p className="details-card-rating">
							Rating: {product?.rating?.rate}
							<i className="fa-solid fa-star"></i>
							({product?.rating?.count})
						</p>
						<h3 className="details-card-price">{(product.price)}BGN</h3>
						<p className="details-card-description">{product.description}</p>
						<Link to={'/all-products'} className='add-to-cart-btn details-cart-back-btn'>
							Back to products
						</Link>
					</div>
				</div>
			} 
			{error && <p>Error!!</p>}
		</>
	);
};

export default Details;