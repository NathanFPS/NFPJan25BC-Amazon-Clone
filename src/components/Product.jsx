import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './styles/Product.css';
import ShoppingContext from '../context/shopping/shoppingContext';

const Product = ({id, image, title, rating, price}) => {
    const shoppingContext = useContext(ShoppingContext);
    const {addToBasket} = shoppingContext;
    const addToBasketHandler = () => {
        addToBasket({ id, image, title, rating, price });
    };
    
    return (
        <div className='product' key={id}>
            <a href={`/products-details/${id}`}>
                <img src={image} alt="" />
            </a>
            <div className="pinfo">
                <Link to={`/products-details/${id}`} className="plink">
                    <p>{title}</p>
                </Link>
                <div className="prating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
                <div className="ppricing">
                    <small>R</small>
                    <strong>{price}</strong>
                </div>
            </div>
            <button className="pbutton" onClick={addToBasketHandler}>
                Add to Basket?
            </button>
        </div>
    );
}

export default Product;