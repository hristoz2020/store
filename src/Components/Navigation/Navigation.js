import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	const [isLogged, setisLogged] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("email")) {
			setisLogged(true);
		}
	}, []);

	console.log(isLogged);
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

			{isLogged ? (
				<>
					<Link to="/cart" className="nav-btn">
						<i className="far fa-meh-rolling-eyes"></i>
						Cart
					</Link>
					<Link to="/logout" className="nav-btn">
						Logout
					</Link>
				</>
			) : (
				<Link to="/login" className="nav-btn">
					Login
				</Link>
			)}
		</div>
	);
};

export default Navigation;
