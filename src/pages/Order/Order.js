import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

const Order = () => {
	const location = useLocation();
	const data = location.state;
	const totalPrice = data;

	const { setCart } = useContext(ProductContext);
	const navigate = useNavigate();

	const payment = (e) => {
		e.preventDefault();
		localStorage.removeItem("cart");
		window.confirm("Thank you! Your order has been received.");
		setCart([]);
		navigate('/');
	};

	return (
		<div className="wrapper">
			<h2>Payment Form</h2>
			<form>
				<h4>Account</h4>
				<div className="input-group">
					<div className="input-box">
						<input
							type="text"
							placeholder="Full Name"
							required
							className="name"
						/>
						<i className="fa fa-user icon"></i>
					</div>
					<div className="input-box">
						<input
							type="text"
							placeholder="Nick Name"
							required
							className="name"
						/>
						<i className="fa fa-user icon"></i>
					</div>
				</div>
				<div className="input-group">
					<div className="input-box">
						<input
							type="email"
							placeholder="Email Adress"
							required
							className="name"
						/>
						<i className="fa fa-envelope icon"></i>
					</div>
				</div>
				<div className="input-group">
					<div className="input-box">
						<h4> Date of Birth</h4>
						<input type="number" placeholder="DD" className="dob" />
						<input type="number" placeholder="MM" className="dob" />
						<input
							type="number"
							placeholder="YYYY"
							className="dob"
						/>
					</div>
					<div className="input-box">
						<h4> Gender</h4>
						<input
							type="radio"
							id="b1"
							name="gendar"
							defaultChecked
							className="radio"
						/>
						<label htmlFor="b1">Male</label>
						<input
							type="radio"
							id="b2"
							name="gendar"
							className="radio"
						/>
						<label htmlFor="b2">Female</label>
					</div>
				</div>
				<div className="input-group">
					<div className="input-box">
						<h4>Payment Details</h4>
						<input
							type="radio"
							name="pay"
							id="bc1"
							defaultChecked
							className="radio"
						/>
						<label htmlFor="bc1">
							<span className="card-type">
								<i className="fa-brands fa-cc-visa"></i> Credit
								Card
							</span>
						</label>
						<input
							type="radio"
							name="pay"
							id="bc2"
							className="radio"
						/>
						<label htmlFor="bc2">
							<span className="card-type">
								<i className="fa-brands fa-cc-paypal"></i>{" "}
								Paypal
							</span>
						</label>
					</div>
				</div>
				<div className="input-group">
					<div className="input-box">
						<input
							type="tel"
							placeholder="Card Number"
							required
							className="name"
						/>
						<i className="fa fa-credit-card icon"></i>
					</div>
				</div>
				<div className="input-group">
					<div className="input-box">
						<input
							type="tel"
							placeholder="Card CVC"
							required
							className="name"
						/>
						<i className="fa fa-user icon"></i>
					</div>
					<div className="input-box">
						<select>
							<option>01 jun</option>
							<option>02 jun</option>
							<option>03 jun</option>
						</select>
						<select>
							<option>2020</option>
							<option>2021</option>
							<option>2022</option>
						</select>
					</div>
				</div>
				<div className="input-group">
					<div className="input-box">
						<button className="pay-btn" onClick={(e) => payment(e)}>
							PAY NOW {totalPrice.toFixed(2)} BGN
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Order;
