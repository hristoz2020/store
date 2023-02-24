import { useState } from "react";

const Register = () => {
	const [isError, setIsError] = useState(false);
	const [registerData, setRegisterData] = useState({
		email: '',
		username: '',
		password: '',
		name: {
			firstname: '',
			lastname: '',
		},
		address: {
			city: '',
			street: '',
			number: '',
			zipcode: '',
			geolocation: {
				lat: '',
				long: '',
			},
		},
		phone: '',
	})

	const registerHandler = (e) => {
		e.preventDefault();

		fetch("https://fakestoreapi.com/users", {
			method: "POST",
			body: JSON.stringify({
				registerData
			}),
		})
			.then((res) => res.json())
			.then((json) => console.log(json))
			.catch(err => setIsError(true))
	};

	return (
		<form className="login-form" method="POST">
			<h3>Register</h3>
			<p>Email</p>
			<input
				value={registerData.email}
				onChange={(e) => {
					setRegisterData.email(e.target.value);
				}}
				className="form-input"
				type="text"
				placeholder="Text"
			/>
			<p>Username</p>
			<input
				value={registerData.username}
				onChange={(e) => {
					setRegisterData.username(e.target.value);
				}}
				className="form-input"
				type="text"
				placeholder="Username"
			/>
			<p>Password</p>
			<input
				value={registerData.password}
				onChange={(e) => {
					setRegisterData.password(e.target.value);
				}}
				className="form-input"
				type="password"
				placeholder="Password"
			/>
			<div className="form-names">
				<p>First Name</p>
				<input
					value={registerData.name.firstname}
					onChange={(e) => {
						setRegisterData.name.firstname(e.target.value);
					}}
				className="form-input"
					type="text"
					placeholder="Firest Name"
				/>
				<p>Last Name</p>
				<input
					value={registerData.name.lastname}
					onChange={(e) => {
						setRegisterData.name.lastname(e.target.value);
					}}
				className="form-input"
					type="text"
					placeholder="Last Name"
				/>
			</div>
			<p>City</p>
			<input
				value={registerData.address.city}
				onChange={(e) => {
					setRegisterData.address.city(e.target.value);
				}}
				className="form-input"
				type="text"
				placeholder="City"
			/>
			<p>Street</p>
			<input
				value={registerData.address.street}
				onChange={(e) => {
					setRegisterData.address.street(e.target.value);
				}}
				className="form-input"
				type="text"
				placeholder="Street"
			/>
			<p>Number</p>
			<input
				value={registerData.address.number}
				onChange={(e) => {
					setRegisterData.address.number(e.target.value);
				}}
				className="form-input"
				type="number"
				placeholder="Number"
			/>
			<p>Zip Code</p>
			<input
				value={registerData.address.zipcode}
				onChange={(e) => {
					setRegisterData.address.zipcode(e.target.value);
				}}
				className="form-input"
				type="number"
				placeholder="Zip Code"
			/>
			<p>Geolocation-lat</p>
			<input
				value={registerData.address.geolocation.lat}
				onChange={(e) => {
					setRegisterData.address.geolocation.lat(e.target.value);
				}}
				className="form-input"
				type="number"
				placeholder="Geolocation-lat"
			/>
			<p>Geolocation-long</p>
			<input
				value={registerData.address.geolocation.long}
				onChange={(e) => {
					setRegisterData.address.geolocation.long(e.target.value);
				}}
				className="form-input"
				type="number"
				placeholder="Geolocation-long"
			/>
			<p>Phone Number</p>
			<input
				value={registerData.phone}
				onChange={(e) => {
					setRegisterData.phone(e.target.value);
				}}
				className="form-input"
				type="number"
				placeholder="Phone Number"
			/>
			<div>
				{isError && <small>Invalid Registration!</small>}
				<button
					onClick={(e) => {
						registerHandler(e);
					}}
				>
					Register
				</button>
			</div>
		</form>
	);
};

export default Register;
