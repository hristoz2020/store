const CardContainer = ({ product }) => {
	return (
		<li className="card-container">
			<img className="product-img" src={product.image} alt="product" />
			<h2 className="product-title">{product.title}</h2>
			<p className="product-descriptio">{product.description}</p>
			<p className="product-price">{product.price}$</p>
		</li>
	);
};

export default CardContainer;
