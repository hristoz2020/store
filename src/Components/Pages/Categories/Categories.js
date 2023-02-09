import { useState, useEffect } from "react";
import * as ProductServices from "../../../Services/ProductServices";
import CategoriesContainer from "../../CategoriesContainer/CategoriesContainer";
import CardContainer from "../../CardContainer/CardContainer";

const Categories = () => {
	const [category, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('electronics');

	useEffect(() => {
		ProductServices.getAllCategories()
			.then((res) => setCategories(res))
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		ProductServices.getProductByCategories(selectedCategory)
			.then((result) => setProducts(result))
			.catch((err) => {
				console.log(err);
			});
	}, [selectedCategory]);

	const onSelectCategory = (e) => {
		setSelectedCategory(e.target.value);
	};

	return (
		<div className="categories-page">
			<h1>Selected Products</h1>
			<label>
				Category:
				<select onChange={onSelectCategory}>
					{category.map((x) => (
						<CategoriesContainer key={x} category={x} />
					))}
				</select>
			</label>
			<div>
				<ul className="card-list">
					{products.map((x) => (
						<CardContainer key={x.id} product={x} button={x} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Categories;