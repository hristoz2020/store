import { Link } from 'react-router-dom';

const CategoriesContainer = ({category}) => {
   
    
    return (
        <>
            <li>
                <Link to={`${category}`}>
                    {category}
                </Link>
            </li>
        </>
    );
}

export default CategoriesContainer;