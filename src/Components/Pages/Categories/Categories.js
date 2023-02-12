import { useState, useEffect } from "react";
import * as ProductServices from "../../../Services/ProductServices";
import CategoriesContainer from "../../CategoriesContainer/CategoriesContainer";
import CardContainer from "../../CardContainer/CardContainer";
import Loader from "../../Loader/Loader";

const Categories = () => {
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

	return (
		<div className="categories-page">
			{loading ? (
				<Loader />
			) : (
				<>
					<h1>Selected Products</h1>
					<label>
						Category:
						<select onChange={(e) => {setSelectedCategory(e.target.value)}}>
							{category.map((x) => (
								<CategoriesContainer key={x} category={x} />
							))}
						</select>
					</label>
					<div>
						<ul className="card-list">
							{products.map((x) => (
								<CardContainer
									key={x.id}
									product={x}
									button={x}
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
