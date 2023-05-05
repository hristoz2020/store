import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { loginUser } from "../../services/loginAuth";
import LoadingButton from "../../components/LoadingButton/LoadingButton";
import { ProductContext } from "../../contexts/ProductContext";

const Login = () => {
	const navigate = useNavigate();
	const { setToken } = useContext(ProductContext)
	const [usernameInput, setUsernameInput] = useState("mor_2314");
	const [passwordInput, setPasswordInput] = useState("83r5^_");
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const loginHandler = (e) => {
		e.preventDefault();

		setErrorMessage("");
		setUsernameInput("");
		setPasswordInput("");

		loginUser(usernameInput, passwordInput)
			.then((res) => {
				setToken(res.token);
				localStorage.setItem("userToken", res.token);
				navigate("/store-app");
			})
			.catch((err) => {
				setIsLoading(false);
				setErrorMessage("Username or Password is incorrect!");
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
			{errorMessage ? (
				<p className="invalid-input">Invalid Username or password!</p>
			) : (
				""
			)}
			<div>
				{isLoading ? (
					<LoadingButton />
				) : (
					<button
						onClick={(e) => {
							setIsLoading(true);
							loginHandler(e);
						}}
						className="form-button"
					>
						Login
					</button>
				)}
			</div>
		</form>
	);
};

export default Login;
