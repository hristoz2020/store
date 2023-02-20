import { Link } from "react-router-dom";

const CardContainer = ({ product, detailsBtn, addToCartBtn, handleClick }) => {
	let productTitle = '';

	if(product.title.length > 35) {
		productTitle = product.title.slice(0, 35).concat('...');
	} else {
		productTitle = product.title;
	}

	return (
		<li className="card-container">
			<img className="product-img" src={product.image} alt="product" />
			<h3 className="product-title">{productTitle}</h3>
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
