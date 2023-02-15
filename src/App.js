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


function App() {
	const [token, setToken] = useState(localStorage.getItem("token") ?? null);//return string or object

	return (
		<div className="store">
			<Navigation token={token} setToken={setToken} />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/all-products" element={<AllProducts />} />
				<Route path="/all-products/details/:id" element={<Details />} />
				<Route path="/categories" element={<Categories />} />
				{token
					? <Route path="/cart" element={<Cart />} />
					: <>
					<Route path="/login" element={<Login token={token} setToken={setToken} />} />
					<Route path="/register" element={<Register />} />
					</>
				} 
				
			</Routes>
		</div>
	);
}

export default App;
