import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [phone, setPhone] = useState('');

    const registerHandler = (e) => {
		e.preventDefault();
        console.log('test');
		// setError('');
		// setUsername('');
		// setPassword('');

		// fetch('https://fakestoreapi.com/auth/login',{
		// 	method:'POST',
		// 	headers:{
		// 		'Content-Type':'application/json'
		// 	},
		// 	body:JSON.stringify({
		// 		username:username,
		// 		password:password
		// 	})
		// })
		// .then(res=> res.json())
		// .then(res => {
		// 	setToken(res.token);
		// 	localStorage.setItem('userToken', res.token);
		// })
		// .catch(err => {
		// 	setError(err)
		// 	console.error(err.message)})
		// .finally(()=>{
		// 	navigate('/')
		// })
	}


    return (
		<form className="login-form" method="POST">
			<h3>Register</h3>
            <div>
				Email
				<input
					value={email}
					onChange={(e) => {setEmail(e.target.value)}}
					type="text"
					placeholder="Text"
				/>
			</div>
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
            <div>
				First Name
				<input
					value={firstname}
					onChange={(e) => {setFirstname(e.target.value)}}
					type="text"
					placeholder="Firest Name"
				/>
			</div>
            <div>
				Last Name
				<input
					value={lastname}
					onChange={(e) => {setLastname(e.target.value)}}
					type="text"
					placeholder="Last Name"
				/>
			</div>
            <div>
				City
				<input
					value={city}
					onChange={(e) => {setCity(e.target.value)}}
					type="text"
					placeholder="City"
				/>
			</div>
            <div>
				Street
				<input
					value={street}
					onChange={(e) => {setStreet(e.target.value)}}
					type="text"
					placeholder="Street"
				/>
			</div>
            <div>
				Number
				<input
					value={number}
					onChange={(e) => {setNumber(e.target.value)}}
					type="number"
					placeholder="Number"
				/>
			</div>
            <div>
				Zip Code
				<input
					value={zipcode}
					onChange={(e) => {setZipcode(e.target.value)}}
					type="number"
					placeholder="Zip Code"
				/>
			</div>
            <div>
				Geolocation-lat
				<input
					value={lat}
					onChange={(e) => {setLat(e.target.value)}}
					type="number"
					placeholder="Geolocation-lat"
				/>
			</div>
            <div>
                Geolocation-long
				<input
					value={long}
					onChange={(e) => {setLong(e.target.value)}}
					type="number"
					placeholder="Geolocation-long"
				/>
			</div>
            <div>
				Phone Number
				<input
					value={phone}
					onChange={(e) => {setPhone(e.target.value)}}
					type="number"
					placeholder="Phone Number"
				/>
			</div>

			{/* {error && <small>{error}</small>} */}
			<button onClick={(e) => {registerHandler(e)}}>Register</button>
		</form>
    );
};

export default Register;