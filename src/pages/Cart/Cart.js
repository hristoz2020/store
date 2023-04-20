import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import CartItem from "../../components/CartItem/CartItem";

const Cart = ({ cart, setCart, handleChange }) => {
	const [price, setPrice] = useState(0);

	let shopingFee = price * 0.05;
	let totalPrice = price + shopingFee;

	const handleRemove = (id) => {
		const arr = cart.filter((item) => item.id !== id);
		setCart(arr);
		handlePrice();
	};

	const handlePrice = () => {
		let ans = 0;
		cart.map((item) => (ans += item.amount * item.price));
		setPrice(ans);
	};

	useEffect(() => {
		handlePrice();
	});

	return cart.length > 0 ? (
		<div className="cart-article">
			<div className="left-cart-box">
				{cart.map((item) => (
					<CartItem
						key={item.id}
						item={item}
						handleChange={handleChange}
						handleRemove={handleRemove}
					/>
				))}
			</div>
			<div className="right-cart-box">
				<h1>Summary</h1>
				<div className="cart-row">
					<p>Subtotal:</p>
					<p className="cart-price">BGN {price.toFixed(2)}</p>
				</div>
				<div className="cart-row">
					<p>Shipping fee:</p>
					<p className="cart-price">BGN {shopingFee.toFixed(2)}</p>
				</div>
				<div className="cart-row">
					<p>Total Price:</p>
					<h2 className="cart-price">BGN {totalPrice.toFixed(2)}</h2>
				</div>

				<Link to={`/order`} state={totalPrice} className="order-btn">
					Place order(Link)
				</Link>
			</div>
		</div>
	) : (
		<div className="cart-no-products">
			<h2>There are no products in your cart.</h2>
			<p>Add the products you like to the cart and buy.</p>
			<Link to={`/all-products`} className="countinue-shoping">
				Back to shop
			</Link>
		</div>
	);
};

export default Cart;