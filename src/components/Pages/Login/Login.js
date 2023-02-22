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
			<h2>Login</h2>
			<p>Username</p>
			<input
				value={usernameInput}
				onChange={(e) => {
					setUsernameInput(e.target.value);
				}}
				className="form-input"
				type="text"
				placeholder="Username"
			/>
			<p>Password</p>
			<input
				value={passwordInput}
				onChange={(e) => {
					setPasswordInput(e.target.value);
				}}
				className="form-input"
				type="password"
				placeholder="Password"
			/>
			<div>
				{loading ? <Loader /> : <small>{error}</small>}
				<button
					onClick={(e) => {
						loginHandler(e);
					}}
					className="form-button"
				>
					Login
				</button>
			</div>
		</form>
	);
};

export default Login;
