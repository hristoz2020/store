const baseUrl = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
	let response = await fetch(`${baseUrl}/products`)

    let allProducts = response.json();

    return allProducts;
};

export const getLimitProducts = async () => {
	let response = await fetch(`${baseUrl}/products?limit=5`)

    let limitetProducts = response.json();

    return limitetProducts;
};

export const getOneProduct = async (productId) => {
	let response = await fetch(`${baseUrl}/products/${productId}`)

    let product = response.json();

    return product;
};