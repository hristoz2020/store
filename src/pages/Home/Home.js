import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import CardContainer from "../../components/CardContainer/CardContainer";
import Loader from "../../components/Loader/Loader";

const Home = ({ user, cart }) => {
	const { limitProducts } = useContext(ProductContext);

	return (
		<>
			<div className="home-page">
				{limitProducts.length < 1 && <Loader />}
				<h1>Wellcome {user} to store!</h1>
				<ul className="card-list">
					{limitProducts.length > 0 &&
						limitProducts.map((x) => (
							<CardContainer key={x.id} product={x} cart={cart} />
						))}
				</ul>
			</div>
		</>
	);
};

export default Home;
