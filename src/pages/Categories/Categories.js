import { useState, useContext } from "react";
import CategoriesContainer from "../../components/CategoriesContainer/CategoriesContainer";
import CardContainer from "../../components/CardContainer/CardContainer";
import Loader from "../../components/Loader/Loader";

import { ProductContext } from "../../contexts/ProductContext";

const Categories = () => {
	const { categories, products } = useContext(ProductContext);
	const [selectedCategory, setSelectedCategory] = useState("electronics");

	const filtredProducts = products.filter(
		(product) => product.category === selectedCategory
	);

	filtredProducts.map((x) => (x.amount = 1));

	return (
		<div className="categories-page">
			{products.length < 1 && <Loader />}
			<h1>Selected Products</h1>
			<div className="categories-select">
				<h3>Category:</h3>
				<label>
					<select
						onChange={(e) => {
							setSelectedCategory(e.target.value);
						}}
					>
						{categories.map((x) => (
							<CategoriesContainer key={x} category={x} />
						))}
					</select>
				</label>
			</div>
			<div>
				<ul className="card-list">
					{filtredProducts.map((x) => (
						<CardContainer key={x.id} product={x} detailsBtn={x} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default Categories;