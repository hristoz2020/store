import { createContext, useEffect, useState, useMemo } from "react";
import { getLimitProducts } from "../services/productServices";

export const ProductContext = createContext();

export const AllProductsContext = ({ children }) => {
	const [limitProducts, setLimitProducts] = useState(
		localStorage.getItem("limitProducts")
			? JSON.parse(localStorage.getItem("limitProducts"))
			: []
	);

	useEffect(() => {
		getLimitProducts().then((res) => {
			setLimitProducts(res);
			localStorage.setItem("limitProducts", JSON.stringify(res));
		});
	}, []);

	const value = useMemo(
		() => ({ limitProducts }),
		[limitProducts]
	);

	return (
		<ProductContext.Provider value={value}>
			{children}
		</ProductContext.Provider>
	);
};
