import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import CardContainer from "../../components/CardContainer/CardContainer";
import Loader from "../../components/Loader/Loader";

const Home = () => {
	const { limitProducts } = useContext(ProductContext);

	return (
		<>
			<div className="home-page">
				{limitProducts.length < 1 && <Loader />}
				<h1>Wellcome to store!</h1>
				<ul className="card-list">
					{limitProducts.length > 0 &&
						limitProducts.map((x) => (
							<CardContainer key={x.id} product={x} detailsBtn={true} />
						))}
				</ul>
			</div>
		</>
	);
};

export default Home;
