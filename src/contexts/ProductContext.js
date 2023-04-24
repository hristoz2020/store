import { createContext, useEffect, useState } from "react";
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
	const [cart, setCart] = useState([]);

	const handleClick = (e, item) => {
		let id = item.id;

		if (e.target.innerHTML === "Add to cart") {
			if (cart.indexOf(item) !== -1) {
				return;
			}
			setCart([...cart, item]);

			e.target.innerHTML = "Remove";
		} else if (e.target.innerHTML === "Remove") {
			const arr = cart.filter((item) => item.id !== id);
			setCart(arr);

			e.target.innerHTML = "Add to cart";
		}
	};

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

	return (
		<ProductContext.Provider
			value={{
				limitProducts,
				categories,
				products,
				reversedProducts,
				token,
				setToken,
				cart,
				setCart,
				handleClick,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
