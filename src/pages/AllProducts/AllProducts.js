import { useState, useContext } from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import Loader from "../../components/Loader/Loader";

import { ProductContext } from "../../contexts/ProductContext";

const AllProducts = ({ token, handleClick, cart }) => {
	const [sortBy, setSortBy] = useState("desc");
	const [searchInput, setSearchInput] = useState("");
	const checkSortBy = sortBy === "desc" ? "asc" : "desc";

	const { products, reversedProducts } = useContext(ProductContext);

	products.map((x) => (x.amount = 1));

	function onSearch(e) {
		e.preventDefault();
		setSearchInput(e.target.value);
	}
	let chekedProducts = null;
	if (sortBy === "asc") {
		chekedProducts = reversedProducts;
	} else if (sortBy === "desc") {
		chekedProducts = products;
	}

	let filtredProducts = chekedProducts.filter((product) =>
		product.title.toLowerCase().includes(searchInput.toLowerCase())
	);

	return (
		<div className="all-products-page">
			{products.length < 1 && <Loader />}
			{products.length > 0 && (
				<>
					<h1>All Products</h1>
					<div className="all-products-sort-item">
						<h3>Sort by:</h3>
						<button onClick={() => setSortBy(checkSortBy)}>
							{checkSortBy}
						</button>
					</div>
					<label className="search-item">
						<input
							type="text"
							value={searchInput}
							placeholder="Search..."
							onChange={(e) => onSearch(e)}
						/>
					</label>
					<ul className="card-list">
						{filtredProducts.length > 0 ? (
							filtredProducts.map((x) => (
								<CardContainer
									key={x.id}
									product={x}
									detailsBtn={x}
									addToCartBtn={token}
									handleClick={handleClick}
									cart={cart}
								/>
							))
						) : (
							<h3 className="not-found-product">
								Not found product with this name!
							</h3>
						)}
					</ul>
				</>
			)}
		</div>
	);
};

export default AllProducts;
