const baseUrl = "https://fakestoreapi.com";
const header = {
	headers: {
        'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'no-cors',
	},
};

export const getAllProducts = async () => {
	let response = await fetch(`${baseUrl}/products`, header);

	let allProducts = response.json();

	return allProducts;
};

export const getLimitProducts = async () => {
	let response = await fetch(`${baseUrl}/products?limit=5`, header);

	let limitetProducts = response.json();

	return limitetProducts;
};

export const getOneProduct = async (productId) => {
	let response = await fetch(`${baseUrl}/products/${productId}`, header);

	let product = response.json();

	return product;
};

export const getAllCategories = async () => {
	let response = await fetch(`${baseUrl}/products/categories`, header);

	let categories = response.json();

	return categories;
};

export const getProductByCategories = async (category) => {
	let response = await fetch(`${baseUrl}/products/category/${category}`, header);

	let products = response.json();

	return products;
};

export const getAscOrDescProducts = async (type) => {
	let response = await fetch(`${baseUrl}/products?sort=${type}`, header);

	let products = response.json();

	return products;
};
