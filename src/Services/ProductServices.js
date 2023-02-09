const baseUrl = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
	let response = await fetch(`${baseUrl}/products`)

    let limitetProducts = response.json();

    return limitetProducts;
};

export const getLimitProducts = async () => {
	let response = await fetch(`${baseUrl}/products?limit=10`)

    let limitetProducts = response.json();

    return limitetProducts;
};
