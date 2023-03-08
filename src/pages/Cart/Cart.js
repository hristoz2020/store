import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import CartItem from "../../components/CartItem/CartItem";

const Cart = ({ cart, setCart, handleChange }) => {
	const [price, setPrice] = useState(0);
	const [isClecked, setIsClicked] = useState(false);

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

	const finishOrder = (e) => {
		e.preventDefault();

		setIsClicked(false);
		setCart([]);
	}

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

				<button
					className="order-btn"
					onClick={() => {
						setIsClicked(true);
						console.log("click");
					}}
				>
					Place order(btn)
				</button>

				{isClecked && (
					<div className="payment-mehod-container">
						<button
							onClick={() => {
								setIsClicked(false);
							}}
						>
							<i className="fa-solid fa-x close-btn"></i>
						</button>

						<div className="wrapper">
							<form className="payment-form">
								<div>
									<label className="payment-label" htmlFor="name">Name on card</label>
									<input
										className="payment-input"
										required
										type="text"
										id="name"
										name="name"
										autoomplete="cc-name"
									/>
								</div>
								<div className="card-number">
									<label className="payment-label">Card number</label>
									<input
										className="payment-input"
										required
										type="text"
										id="card-number"
										name="card-number"
										inputMode="numeric"
										autcomplete="cc-number"
										pattern="[0-9]+"
									/>
								</div>
								<div className="date-code">
									<div>
										<label className="payment-label" htmlFor="expiry-date">
											Expiry date
										</label>
										<input
											required
											type="text"
											id="expiry-date"
											name="expiry-date"
											className="expiry-date payment-input"
											autoomplete="cc-exp"
											placeholder="MM/YY"
											minLength="4"
											pattern="[0-9/]+"
										/>
									</div>
									<div>
										<label className="payment-label" htmlFor="security-code">
											Security code
										</label>
										<input
											className="payment-input"
											required
											type="text"
											id="security-code"
											name="security-code"
											inputMode="numeric"
											minLength="3"
											maxLength="4"
											pattern="[0-9]+"
										/>
									</div>
								</div>
								<button onClick={(e) => finishOrder(e)} className="payment-button">{`Pay ${totalPrice.toFixed(2)} BGN`}</button>
							</form>
						</div>
					</div>
				)}

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
