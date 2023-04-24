import { createContext, useEffect, useState, useMemo } from "react";
import {
	getAllProducts,
	getAscOrDescProducts,
	getLimitProducts,
	getAllCategories,
} from "../services/productServices";

export const ProductContext = createContext();

const checkLocalStorage = (name) =>
	localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : [];

export const AllProductsContext = ({ children }) => {
	const [products, setProducts] = useState(checkLocalStorage("products"));
	const [reversedProducts, setReversedProducts] = useState(
		checkLocalStorage("reversedProducts")
	);
	const [limitProducts, setLimitProducts] = useState(
		checkLocalStorage("limitProducts")
	);
	const [categories, setCategories] = useState(
		checkLocalStorage("categories")
	);

	const [token, setToken] = useState(
		localStorage.getItem("userToken") ?? null
	);

	useEffect(() => {
		getAllProducts().then((res) => {
			setProducts(res);
			localStorage.setItem("products", JSON.stringify(res));
		});
	}, []);

	useEffect(() => {
		getAscOrDescProducts("desc").then((res) => {
			setReversedProducts(res);
			localStorage.setItem("reversedProducts", JSON.stringify(res));
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
		() => ({
			limitProducts,
			categories,
			products,
			reversedProducts,
			token,
			setToken,
		}),
		[limitProducts, categories, products, reversedProducts, token, setToken]
	);

	return (
		<ProductContext.Provider value={value}>
			{children}
		</ProductContext.Provider>
	);
};
