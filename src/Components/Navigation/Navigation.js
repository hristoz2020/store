import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<Link to="/">Home</Link>
			<Link to="/all-products">All Products</Link>
			<Link to="/categories">Categories</Link>
		</div>
	);
};

export default Navigation;
