const CardContainer = ({ product }) => {
	return (
		<div className="card-container">
			<img className="product-img" src={product.image} alt="product" />
			<h2>{product.title}</h2>
			<p>{product.description}</p>
			<p>{product.price}$</p>
		</div>
	);
};

export default CardContainer;
