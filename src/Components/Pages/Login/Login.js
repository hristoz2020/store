import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Loader from "../../Loader/Loader";

const Login = ({ token, setToken }) => {
	const navigate = useNavigate();
	const [usernameInput, setUsernameInput] = useState("mor_2314");
	const [passwordInput, setPasswordInput] = useState("83r5^_");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const loginHandler = (e) => {
		e.preventDefault();

		setError("");
		setUsernameInput("");
		setPasswordInput("");

		fetch("https://fakestoreapi.com/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: usernameInput,
				password: passwordInput,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				setLoading(true);
				setToken(res.token);
				localStorage.setItem("userToken", res.token);
				navigate("/");
			})
			.catch((err) => {
				setError("username or password is incorrect");
				console.log(err);
			});
	};

	return (
		<form className="login-form" method="POST">
			<h3>Sign In</h3>
			<div>
				Username
				<input
					value={usernameInput}
					onChange={(e) => {
						setUsernameInput(e.target.value);
					}}
					type="text"
					placeholder="Username"
				/>
			</div>
			<div>
				Password
				<input
					value={passwordInput}
					onChange={(e) => {
						setPasswordInput(e.target.value);
					}}
					type="password"
					placeholder="Password"
				/>
			</div>
			{loading 
			? <Loader />
			: <small>{error}</small> 
			}
			<button
				onClick={(e) => {
					loginHandler(e);
				}}
			>
				Login
			</button>
		</form>
	);
};

export default Login;
