import { Link } from 'react-router-dom';

const CardContainer = ({ product, button }) => {

	return (
		<li className="card-container">
			<img className="product-img" src={product.image} alt="product" />
			<h3 className="product-title">{product.title}</h3>
			<div className="product-footer">
				<p className="product-category left">{product.category}</p>
				<p className="product-price right">{product.price}$</p>
			</div>
			{button
				? <Link to={`/all-products/details/${product.id}`} state={product} className="details">
					Details
				</Link>
				: ''
			}
		</li>
	);
};

export default CardContainer;