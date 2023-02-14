import { useState, useEffect } from "react";
import * as ProductServices from "../../../services/ProductServices";
import CardContainer from "../../CardContainer/CardContainer";
import Loader from "../../Loader/Loader";

const Home = ({user}) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		ProductServices.getLimitProducts()
			.then((result) => {
				setLoading(false);
				setProducts(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	return (
		<>
			<div className="home-page">
				{loading ? (
					<Loader />
				) : (
					<>
						<h1>Wellcome {user} to store!</h1>
						<ul className="card-list">
							{products.map((x) => (
								<CardContainer key={x.id} product={x} />
							))}
						</ul>
					</>
				)}
			</div>
		</>
	);
};

export default Home;
