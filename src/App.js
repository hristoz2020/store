import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Home from './Components/Pages/Home/Home';
import AllProducts from './Components/Pages/AllProducts/AllProducts';
import Categories from './Components/Pages/Categories/Categories';
import Details from './Components/Details/Details';


function App() {
	return (
        <div className="store">
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-products" element={<AllProducts />} />
                <Route path="/all-products/details/:id" element={<Details />} />
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </div>
    );
}

export default App;
