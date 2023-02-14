import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	const [isLogged, setisLogged] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("email")) {
			setisLogged(true);
		}
	}, [setisLogged]);

	console.log(isLogged);
    
	const guestNav = (
		<Link to="/login" className="nav-btn">
			Login
		</Link>
	);

	const userNav = (
		<>
			<Link to="/cart" className="nav-btn">
				Cart
			</Link>
			<Link to="/logout" className="nav-btn">
				Logout
			</Link>
		</>
	);

	
	return (
		<div className="navigation">
			<Link to="/" className="nav-btn">
				Home
			</Link>
			<Link to="/all-products" className="nav-btn">
				All Products
			</Link>
			<Link to="/categories" className="nav-btn">
				Categories
			</Link>
			{isLogged 
				? 	userNav
				:	guestNav
			}
		</div>
	);
};

export default Navigation;
