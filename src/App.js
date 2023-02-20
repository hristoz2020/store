import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Pages/Home/Home";
import AllProducts from "./components/Pages/AllProducts/AllProducts";
import Categories from "./components/Pages/Categories/Categories";
import Details from "./components/Details/Details";
import Cart from "./components/Pages/Cart/Cart";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import Footer from "./components/Footer/Footer";

function App() {
	const [cart, setCart] = useState([]);
	const [token, setToken] = useState(
		localStorage.getItem("userToken") ?? null
		);
	
		
	const handleClick = (item) => {
		if (cart.indexOf(item) !== -1) return;
		setCart([...cart, item]);
	};
	
	const handleChange = (item, d) => {
		const ind = cart.indexOf(item);
		const arr = cart;
		arr[ind].amount += d;
		
		if (arr[ind].amount === 0) arr[ind].amount = 1;
		setCart([...arr]);
	};
	
	return (
		<div className="store">
			<Navigation token={token} setToken={setToken} size={cart.length} />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/all-products"
					element={
						<AllProducts
							token={token}
							setCart={setCart}
							handleClick={handleClick}
						/>
					}
				/>
				<Route path="/all-products/details/:id" element={<Details />} />
				<Route
					path="/categories"
					element={
						<Categories
							token={token}
							setCart={setCart}
							handleClick={handleClick}
						/>
					}
				/>
				{token ? (
					<Route
						path="/cart"
						element={
							<Cart
								cart={cart}
								setCart={setCart}
								handleChange={handleChange}
							/>
						}
					/>
				) : (
					<>
						<Route
							path="/login"
							element={
								<Login token={token} setToken={setToken} />
							}
						/>
						<Route path="/register" element={<Register />} />
					</>
				)}
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
