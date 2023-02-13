import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Home from './Components/Pages/Home/Home';
import AllProducts from './Components/Pages/AllProducts/AllProducts';
import Categories from './Components/Pages/Categories/Categories';
import Details from './Components/Details/Details';
import Cart from "./Components/Pages/Cart/Cart";
import Login from "./Components/Pages/Login/Login";

function App() {
	return (
        <div className="store">
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/all-products/details/:id" element={<Details />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
