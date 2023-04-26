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
	return (
		<AllProductsContext>
			<div className="store">
				<Navigation />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/all-products" element={<AllProducts />} />
					<Route
						path="/all-products/details/:id"
						element={<Details />}
					/>
					<Route path="/categories" element={<Categories />} />
					<Route path="/order" element={<Order />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
				<Footer />
			</div>
		</AllProductsContext>
	);
}

export default App;
