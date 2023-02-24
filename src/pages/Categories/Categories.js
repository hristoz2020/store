import { useState, useEffect } from "react";
import { getAllCategories, getProductByCategories } from "../../services/productServices";
import CategoriesContainer from "../../components/CategoriesContainer/CategoriesContainer";
import CardContainer from "../../components/CardContainer/CardContainer";
import Loader from "../../components/Loader/Loader";

const Categories = ({token, handleClick, cart}) => {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("electronics");
	const [isLoading, setIsLoading] = useState(true);


	useEffect(() => {
		if (categories.length <= 0) {
			getAllCategories()
			.then((res) => {
				setIsLoading(false);
				setCategories(res);
			})
			.catch((err) => {
				console.log(err);
			});
		}

		getProductByCategories(selectedCategory)
			.then((result) => {
				setIsLoading(false);
				setProducts(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [selectedCategory, categories.length]);
	
	products.map(x => x.amount = 1);
	
	return (
		<div className="categories-page">
			{isLoading ? (
				<Loader />
			) : (
				<>
					<h1>Selected Products</h1>
					<div className="categories-select">
						<h3>Category:</h3>
						<label>
							<select onChange={(e) => {setSelectedCategory(e.target.value)}}>
								{categories.map((x) => (
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
