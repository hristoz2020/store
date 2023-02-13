const baseUrl = "https://fakestoreapi.com";

export const getAllUsers = async () => {
    let res = await fetch(`${baseUrl}/users`);

    let result = await res.json();

    return result;
}

export const login = async (email, password) => {
	let res = await fetch(`${baseUrl}/auth/login`, {
		method: "POST",
		body: JSON.stringify({
			email,
			password,
		}),
	});

    let jsonResult = await res.json();
    
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
}; 
