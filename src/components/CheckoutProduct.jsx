import React, { useContext } from "react";
import ShoppingContext from '../context/shopping/shoppingContext';
import './styles/CheckoutProduct.css';

const CheckoutProduct = ({ id, image, title, rating, price, hideButton }) => {
    const shoppingContext = useContext(ShoppingContext);
    const { removeFromBasket } = shoppingContext;
    const removeFromBasketHandler = () => {
        removeFromBasket({ id: id })
    }
    return (
        <div className='checkout-product'>
            <img className='checkout-image' src={image} alt="" />
            <div className="checkout-pinfo">
                <p className="checkout-name">{title}</p>
                <div className="checkout-prating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
                <div className="checkout-ppricing">
                    <p>
                        <small>R</small>
                        <strong>{price}</strong>
                    </p>
                    {!hideButton && (
                        <button onClick={removeFromBasketHandler}>Remove From Basket</button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default CheckoutProduct