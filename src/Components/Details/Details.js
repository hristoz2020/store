import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as ProductService from "../../Services/ProductServices";

const Details = () => {
	const [product, setProduct] = useState({});

	const location = useLocation();
	const data = location.state;
	const productId = data.id;

	useEffect(() => {
		ProductService.getOneProduct(productId)
			.then((result) => {
				setProduct(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [productId]);
    
	return (
		<div className="details-card">
			<img className="details-card-img left" src={product.image} alt="product" />
            <div className="details-card-info right">
                <h3 className="details-card-title">{product.title}</h3>
                <p className="details-card-category">{product.category}</p>
                <p className="details-card-description">{product.description}</p>
                <p className="details-card-price">{product.price}BGN</p>
                {/* <p className="">{product.rating.rate}</p> */}
            </div>
		</div>
	);
};

export default Details;
