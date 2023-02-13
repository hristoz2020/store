import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as AuthService from "../../../services/AuthService";

const Login = () => {
    const [isSign, setIsSign] = useState(false);
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();

		let formData = new FormData(e.currentTarget);

		let email = formData.get("email");
		let password = formData.get("password");
        
		AuthService.getAllUsers().then((authData) => {
			authData.forEach((el) => {
                console.log(el);
				if (el.email === email && el.password === password) {
                    setIsSign(true);
                } 
			});

			navigate('/');
		});
	};
    console.log(isSign);
	return (
		<form className="login-form" onSubmit={onSubmit} method="POST">
			<h3>Sign In</h3>
			<label>
				Email addres
				<input
					type="text"
					name="email"
					id="email"
					placeholder="Enter email"
				/>
			</label>
			<label>
				Password
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Enter password"
				/>
			</label>
			<button>Login</button>
		</form>
	);
};

export default Login;
