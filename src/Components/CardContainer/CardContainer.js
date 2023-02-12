import { Link } from 'react-router-dom';

const CardContainer = ({ product, button }) => {

	return (
		<li className="card-container">
			<img className="product-img" src={product.image} alt="product" />
			<h3 className="product-title">{product.title}</h3>
			<p className="product-category">{product.category}</p>
			<p className="product-price">{product.price} BGN</p>

			{button
				? <Link to={`/all-products/details/${product.id}`} state={product} className="details-btn">
					Details
				</Link>
				: ''
			}
		</li>
	);
};

export default CardContainer;