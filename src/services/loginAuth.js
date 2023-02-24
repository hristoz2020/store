export const loginUser = async (username, password) => {
	let response = await fetch("https://fakestoreapi.com/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			password,
		}),
	});

    let loginUser = response.json();

    return loginUser;
};
