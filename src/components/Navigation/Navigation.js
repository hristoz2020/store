// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navigation = ({ token, setToken, size }) => {
	const navigate = useNavigate();

	const logOutHandler = () => {
		setToken("");
		localStorage.clear();
		navigate("/login");
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
			<div className="cart">
				<Link to="/cart" className="nav-btn">
					<i className="fa-solid fa-cart-shopping"></i>
				</Link>
				<span>{size}</span>
			</div>
			<button onClick={logOutHandler} className="nav-btn">
				Logout
			</button>
		</>
	);

	return (
		<div className="navigation">
			<div className="navigation-left">
				<Link to="/" className="nav-btn">
					Home
				</Link>
				<Link to="/all-products" className="nav-btn">
					All Products
				</Link>
				<Link to="/categories" className="nav-btn">
					Categories
				</Link>
			</div>
			<div className="navigation-right">{token ? userNav : guestNav}</div>
		</div>
	);
};

export default Navigation;
