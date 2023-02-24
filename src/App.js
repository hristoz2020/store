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

function App() {
	const [cart, setCart] = useState([]);
	const [token, setToken] = useState(
		localStorage.getItem("userToken") ?? null
		);


	const handleClick = (e, item) => {
		let id = item.id;

		if(e.target.innerHTML === 'Add to cart') {
			if (cart.indexOf(item) !== -1){
				return;
			} 
			setCart([...cart, item]);

			e.target.innerHTML = 'Remove';
		} else if (e.target.innerHTML === 'Remove') {
				const arr = cart.filter((item) => item.id !== id);
				setCart(arr);

				e.target.innerHTML = 'Add to cart';
		}
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
				<Route path="/" element={<Home cart={cart} />} />
				<Route
					path="/all-products"
					element={
						<AllProducts
							token={token}
							cart={cart}
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
							cart={cart}
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
								<Login setToken={setToken} />
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
