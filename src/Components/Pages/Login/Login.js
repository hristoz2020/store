import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();

		let formData = new FormData(e.currentTarget);

		let email = formData.get("email");
		let password = formData.get("password");

		if (
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
			password.length > 6
		) {
			localStorage.setItem("email", email);
		
			navigate("/");
		}
	};

	return (
		<form className="login-form" onSubmit={onSubmit} method="POST">
			<h3>Sign In</h3>
			<div>
				Email addres
				<input
					type="text"
					name="email"
					id="email"
					placeholder="Enter email"
				/>
			</div>
			<div>
				Password
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Enter password"
				/>
			</div>
			<button>Login</button>
		</form>
	);
};

export default Login;
