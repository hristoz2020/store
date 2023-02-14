import { Link } from "react-router-dom";

const Navigation = ({ isAuthenticated, user }) => {

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
			{isAuthenticated
				? 	userNav
				:	guestNav
			}
		</div>
	);
};

export default Navigation;
