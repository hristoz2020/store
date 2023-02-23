import { useState } from "react";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [city, setCity] = useState("");
	const [street, setStreet] = useState("");
	const [number, setNumber] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [lat, setLat] = useState("");
	const [long, setLong] = useState("");
	const [phone, setPhone] = useState("");

	const registerHandler = (e) => {
		e.preventDefault();
		console.log("test");
		// setError('');
		// setUsername('');
		// setPassword('');

		fetch("https://fakestoreapi.com/users", {
			method: "POST",
			body: JSON.stringify({
				email: email,
				username: username,
				password: password,
				name: {
					firstname: firstname,
					lastname: lastname,
				},
				address: {
					city: city,
					street: street,
					number: number,
					zipcode: zipcode,
					geolocation: {
						lat: lat,
						long: long,
					},
				},
				phone: phone,
			}),
		})
			.then((res) => res.json())
			.then((json) => console.log(json));
	};

	return (
		<form className="login-form" method="POST">
			<h3>Register</h3>
			<p>Email</p>
			<input
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				className="form-input"
				type="text"
				placeholder="Text"
			/>
			<p>Username</p>
			<input
				value={username}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
				className="form-input"
				type="text"
				placeholder="Username"
			/>
			<p>Password</p>
			<input
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				className="form-input"
				type="password"
				placeholder="Password"
			/>
			<div className="form-names">
				<p>First Name</p>
				<input
					value={firstname}
					onChange={(e) => {
						setFirstname(e.target.value);
					}}
				className="form-input"
					type="text"
					placeholder="Firest Name"
				/>
				<p>Last Name</p>
				<input
					value={lastname}
					onChange={(e) => {
						setLastname(e.target.value);
					}}
				className="form-input"
					type="text"
					placeholder="Last Name"
				/>
			</div>
			<p>City</p>
			<input
				value={city}
				onChange={(e) => {
					setCity(e.target.value);
				}}
				className="form-input"
				type="text"
				placeholder="City"
			/>
			<p>Street</p>
			<input
				value={street}
				onChange={(e) => {
					setStreet(e.target.value);
				}}
				className="form-input"
				type="text"
				placeholder="Street"
			/>
			<p>Number</p>
			<input
				value={number}
				onChange={(e) => {
					setNumber(e.target.value);
				}}
				className="form-input"
				type="number"
				placeholder="Number"
			/>
			<p>Zip Code</p>
			<input
				value={zipcode}
				onChange={(e) => {
					setZipcode(e.target.value);
				}}
				className="form-input"
				type="number"
				placeholder="Zip Code"
			/>
			<p>Geolocation-lat</p>
			<input
				value={lat}
				onChange={(e) => {
					setLat(e.target.value);
				}}
				className="form-input"
				type="number"
				placeholder="Geolocation-lat"
			/>
			<p>Geolocation-long</p>
			<input
				value={long}
				onChange={(e) => {
					setLong(e.target.value);
				}}
				className="form-input"
				type="number"
				placeholder="Geolocation-long"
			/>
			<p>Phone Number</p>
			<input
				value={phone}
				onChange={(e) => {
					setPhone(e.target.value);
				}}
				className="form-input"
				type="number"
				placeholder="Phone Number"
			/>
			<div>
				{/* {error && <small>{error}</small>} */}
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
