import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({token, setToken}) => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const loginHandler = (e) => {
		e.preventDefault();

		setError('');
		setUsername('');
		setPassword('');

		fetch('https://fakestoreapi.com/auth/login',{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				username:username,
				password:password
			})
		})
		.then(res=> res.json())
		.then(res => {
			setToken(res.token);
			localStorage.setItem('userToken', res.token);
		})
		.catch(err => {
			setError(err)
			console.error(err.message)})
		.finally(()=>{
			navigate('/')
		})
	}

	return (
		<form className="login-form" method="POST">
			<h3>Sign In</h3>
			<div>
				Username
				<input
					value={username}
					onChange={(e) => {setUsername(e.target.value)}}
					type="text"
					placeholder="Username"
				/>
			</div>
			<div>
				Password
				<input
					value={password}
					onChange={(e) => {setPassword(e.target.value)}}
					type="password"
					placeholder="Password"
				/>
			</div>
			{error && <small>{error}</small>}
			<button onClick={(e) => {loginHandler(e)}}>Login</button>
			{error}
		</form>
	);
};

export default Login;
