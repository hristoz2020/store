import { createContext, useEffect, useState, useMemo } from "react";
import {
	getAllProducts,
	getLimitProducts,
	getAllCategories,
} from "../services/productServices";

export const ProductContext = createContext();

export const AllProductsContext = ({ children }) => {
	const [products, setProducts] = useState(
		localStorage.getItem("products")
			? JSON.parse(localStorage.getItem("products"))
			: []
	);

	const [limitProducts, setLimitProducts] = useState(
		localStorage.getItem("limitProducts")
			? JSON.parse(localStorage.getItem("limitProducts"))
			: []
	);

	const [categories, setCategories] = useState(
		localStorage.getItem("categories")
			? JSON.parse(localStorage.getItem("categories"))
			: []
	);

	useEffect(() => {
		getAllProducts().then((res) => {
			setProducts(res);
			localStorage.setItem("products", JSON.stringify(res));
		});
	}, []);

	useEffect(() => {
		getLimitProducts().then((res) => {
			setLimitProducts(res);
			localStorage.setItem("limitProducts", JSON.stringify(res));
		});
	}, []);

	useEffect(() => {
		getAllCategories().then((res) => {
			setCategories(res);
			localStorage.setItem("categories", JSON.stringify(res));
		});
	}, []);

	const value = useMemo(
		() => ({ limitProducts, categories, products }),
		[limitProducts, categories, products]
	);

	return (
		<ProductContext.Provider value={value}>
			{children}
		</ProductContext.Provider>
	);
};
