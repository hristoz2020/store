import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from './components/Pages/Home/Home';
import AllProducts from './components/Pages/AllProducts/AllProducts';
import Categories from './components/Pages/Categories/Categories';
import Details from './components/Details/Details';
import Cart from "./components/Pages/Cart/Cart";
import Login from "./components/Pages/Login/Login";
import Logout from "./components/Pages/Logout/Logout";

function App() {
	return (
        <div className="store">
            <Navigation />

            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/all-products/details/:id" element={<Details />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </div>
    );
}

export default App;
