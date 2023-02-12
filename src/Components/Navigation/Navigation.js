import { Link } from "react-router-dom";

const Navigation = () => {
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

			<Link to="/cart" className="nav-btn">
			<i className="far fa-meh-rolling-eyes"></i>
				Cart
			</Link>
		</div>
	);
};

export default Navigation;
