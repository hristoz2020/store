import { useState, useEffect } from "react";
import * as ProductService from '../../../Services/ProductServices';
import CategoriesContainer from "../../CategoriesContainer/CategoriesContainer";

const Categories = () => {
    const [category, setCategories] = useState([]);

    useEffect(() => {
        ProductService.getAllCategories()
            .then(res => setCategories(res))
            .catch(err => {
                console.log(err);
            })
    }, []);


    return (
        <div className="categories-page">
            <h1>Categories Page</h1>
            <ul>
                {category.map(x => <CategoriesContainer key={x} category={x} /> )}
            </ul>
        </div>
    );
};

export default Categories;