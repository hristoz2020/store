import { useLocation } from "react-router-dom";

const Order = () => {
	const location = useLocation();
	const data = location.state;
	const totalPrice = data.toFixed(2);

	return (
		<h1>{totalPrice}</h1>
	);
};

export default Order;
