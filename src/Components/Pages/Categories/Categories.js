import { useState, useEffect } from "react";
import * as ProductServices from "../../../services/productServices";
import CategoriesContainer from "../../CategoriesContainer/CategoriesContainer";
import CardContainer from "../../CardContainer/CardContainer";
import Loader from "../../Loader/Loader";

const Categories = ({token, handleClick, cart}) => {
	const [category, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("electronics");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		ProductServices.getAllCategories()
			.then((res) => {
				setLoading(false);
				setCategories(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		ProductServices.getProductByCategories(selectedCategory)
			.then((result) => {
				setLoading(false);
				setProducts(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [selectedCategory]);
	products.map(x => x.amount = 1);
	
	return (
		<div className="categories-page">
			{loading ? (
				<Loader />
			) : (
				<>
					<h1>Selected Products</h1>
					<div className="categories-select">
						<h3>Category:</h3>
						<label>
							<select onChange={(e) => {setSelectedCategory(e.target.value)}}>
								{category.map((x) => (
									<CategoriesContainer key={x} category={x} />
								))}
							</select>
						</label>
					</div>
					<div>
						<ul className="card-list">
							{products.map((x) => (
								<CardContainer
									key={x.id}
									product={x}
									detailsBtn={x}
									addToCartBtn={token}
									handleClick={handleClick}
									cart={cart}
								/>
							))}
						</ul>
					</div>
				</>
			)}
		</div>
	);
};

export default Categories;
