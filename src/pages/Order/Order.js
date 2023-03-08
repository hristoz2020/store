import { useLocation } from "react-router-dom";

const Order = () => {
	const location = useLocation();
	const data = location.state;
	const totalPrice = data.toFixed(2);

	return (
		<div>
			<h1>{totalPrice}</h1>
			<div className="checkout-panel">
				<div className="panel-body">
					<h2 className="title">Checkout here!</h2>

					<div className="progress-bar">
						<div className="step active"></div>
						<div className="step active"></div>
						<div className="step"></div>
						<div className="step"></div>
					</div>

					<div className="payment-method">
						<label htmlFor="card" className="method card">
							<div className="card-logos">
								<img src="https://designmodo.com/demo/checkout-panel/img/visa_logo.png" alt="logo" />
								<img src="https://designmodo.com/demo/checkout-panel/img/mastercard_logo.png" alt="logo" />
							</div>

							<div className="radio-input">
								<input id="card" type="radio" name="payment" />
								Pay AU$20.99 with credit card
							</div>
						</label>

						<label htmlFor="paypal" className="method paypal">
							<img src="https://designmodo.com/demo/checkout-panel/img/paypal_logo.png" alt="logo" />
							<div className="radio-input">
								<input
									id="paypal"
									type="radio"
									name="payment"
								/>
								Pay AU$20.99 with PayPal
							</div>
						</label>
					</div>

					<div className="input-fields">
						<div className="column-1">
							<label htmlFor="cardholder">Name</label>
							<input type="text" id="cardholder" />

							<div className="small-inputs">
								<div>
									<label htmlFor="date">Valid date</label>
									<input type="text" id="date" />
								</div>

								<div>
									<label htmlFor="verification">
										CVV / CVC *
									</label>
									<input type="password" id="verification" />
								</div>
							</div>
						</div>
						<div className="column-2">
							<label htmlFor="cardnumber">Card Number</label>
							<input type="password" id="cardnumber" />

							<span className="info">
								* CVV or CVC is the card security code, unique
								three digits number on the back of your card
								separate from its number.
							</span>
						</div>
					</div>
				</div>

				<div className="panel-footer">
					<button className="btn back-btn">Back</button>
					<button className="btn next-btn">Next Step</button>
				</div>
			</div>
		</div>
	);
};

export default Order;
