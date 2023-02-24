import { useState, useEffect } from "react";
import { getLimitProducts } from "../../services/productServices";
import CardContainer from "../../components/CardContainer/CardContainer";
import Loader from "../../components/Loader/Loader";

const Home = ({user, cart}) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getLimitProducts()
			.then((result) => {
				setIsLoading(false);
				setProducts(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	return (
		<>
			<div className="home-page">
				{isLoading ? (
					<Loader />
				) : (
					<>
						<h1>Wellcome {user} to store!</h1>
						<ul className="card-list">
							{products.map((x) => (
								<CardContainer key={x.id} product={x} cart={cart} />
							))}
						</ul>
					</>
				)}
			</div>
		</>
	);
};

export default Home;
