import { useState, useEffect } from "react";
import * as ProductServices from "../../../Services/ProductServices";
import CardContainer from '../../CardContainer/CardContainer';

const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		ProductServices.getLimitProducts()
			.then((result) => setProducts(result))
			.catch((err) => {
				console.log(err);
			});
	}, []);
    
	return (
		<>
			{products.map((x) => (
                <CardContainer key={x.id} product={x} />
            ))}
		</>
	);
};

export default Home;
