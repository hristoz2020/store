import { Link } from "react-router-dom";

const CardContainer = ({ product, detailsBtn, addToCartBtn, handleClick }) => {

	return (
		<li className="card-container">
			<img className="product-img" src={product.image} alt="product" />
			<h3 className="product-title">{product.title}</h3>
			<p className="product-category">{product.category}</p>
			<p className="product-price">{product.price} BGN</p>
			{
				<div className="card-container-buttons">
					{detailsBtn ? (
						<Link
							to={`/all-products/details/${product.id}`}
							state={product}
							className="details-btn"
						>
							Details
						</Link>
					) : (
						""
					)}
					{addToCartBtn ? (
						<button
							onClick={() => {
								handleClick(product);
							}}
							className="add-to-cart-btn"
						>
							Add to cart
						</button>
					) : (
						""
					)}
				</div>
			}
		</li>
	);
};

export default CardContainer;
