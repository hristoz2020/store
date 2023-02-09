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
		</div>
	);
};

export default Navigation;
