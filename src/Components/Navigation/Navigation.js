// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navigation = ({ token, setToken }) => {
	const navigate = useNavigate();

	const logOutHandler = () => {
		setToken("");
		localStorage.clear();
		navigate('/login');
	};

	const guestNav = (
		<>
			<Link to="/login" className="nav-btn">
				Login
			</Link>
			<Link to="/register" className="nav-btn">
				Register
			</Link>
		</>
	);

	const userNav = (
		<>
			<Link to="/cart" className="nav-btn">
				Cart
			</Link>
			<button onClick={logOutHandler} className="nav-btn">
				Logout
			</button>
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
			{token ? userNav : guestNav}
		</div>
	);
};

export default Navigation;
