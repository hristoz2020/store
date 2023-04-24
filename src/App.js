import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import Categories from "./pages/Categories/Categories";
import Details from "./components/Details/Details";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";
import Order from "./pages/Order/Order";

import { AllProductsContext } from "./contexts/ProductContext";

function App() {
	const [cart, setCart] = useState([]);

	const handleClick = (e, item) => {
		let id = item.id;

		if (e.target.innerHTML === "Add to cart") {
			if (cart.indexOf(item) !== -1) {
				return;
			}
			setCart([...cart, item]);

			e.target.innerHTML = "Remove";
		} else if (e.target.innerHTML === "Remove") {
			const arr = cart.filter((item) => item.id !== id);
			setCart(arr);

			e.target.innerHTML = "Add to cart";
		}
	};

	return (
		<AllProductsContext>
			<div className="store">
				<Navigation size={cart.length} />

				<Routes>
					<Route path="/" element={<Home cart={cart} />} />
					<Route
						path="/all-products"
						element={
							<AllProducts
								cart={cart}
								setCart={setCart}
								handleClick={handleClick}
							/>
						}
					/>
					<Route
						path="/all-products/details/:id"
						element={<Details />}
					/>
					<Route
						path="/categories"
						element={
							<Categories
								setCart={setCart}
								handleClick={handleClick}
								cart={cart}
							/>
						}
					/>
					<Route path="/order" element={<Order />} />
					{localStorage.getItem("userToken") ? (
						<Route
							path="/cart"
							element={
								<Cart
									cart={cart}
									setCart={setCart}
								/>
							}
						/>
					) : (
						<>
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
						</>
					)}
				</Routes>
				<Footer />
			</div>
		</AllProductsContext>
	);
}

export default App;
