import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
	
	const [price, setPrice] = useState(0);
    
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
   
	const filtredCart = cart.filter(
        (obj, index) => cart.findIndex(item => item.id === obj.id) === index
    );

    useEffect(() => {
        setCart(filtredCart)
    }, [setCart])

    return filtredCart.length > 0 ? (
		<div className="cart-article">
			{cart.map((item) => (
				<div className="cart_box" key={item.id}>
					<div className="cart_img">
						<img src={item.image} alt="product" />
						<p>{item.title}</p>
					</div>
					<div>
						<button onClick={() => handleChange(item, 1)}>+</button>
						<button>{item.amount}</button>
						<button onClick={() => handleChange(item, -1)}>-</button>
					</div>
					<div>
						<span>{item.price}</span>
						<button onClick={() => handleRemove(item.id)}>
							Remove
						</button>
					</div>
				</div>
			))}
			<div className="total">
				<span>Total Price of your Cart</span>
				<span>BGN - {price.toFixed(2)}</span>
			</div>
		</div>
	) : (
		<div className="cart-no-products">
			<h2>There are no products in your cart.</h2>
			<p>Add the products you like to the cart and buy.</p>
			<Link to={`/all-products`} className="countinue-shoping">
				Countinue Shoping
			</Link>
		</div>
	);
};

export default Cart;
