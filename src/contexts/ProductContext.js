import { createContext, useEffect, useState, useMemo } from "react";

export const ProductContext = createContext();

export const AllProductsContext = ({ children }) => {

	return (
		<ProductContext.Provider>
			{children}
		</ProductContext.Provider>
	);
};
