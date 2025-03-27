import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './styles/Product.css';
import ShoppingContext from '../context/shopping/shoppingContext';

const Product = ({id, image, title, rating, price}) => {
    const shoppingContext = useContext(ShoppingContext);
    const {addToBasket} = shoppingContext;
    const addToBasketHandler = () => {
        addToBasket({item:{id, image, title, rating, price}});
    };
    
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className="pinfo">
                <p>{title}</p>
                <div className="prating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <div className="ppricing">
                    {price}
                </div>
            </div>
            <button className="pbutton" onClick={addToBasketHandler}>
                Add to Basket?
            </button>
        </div>   
      );
}

export default Product;