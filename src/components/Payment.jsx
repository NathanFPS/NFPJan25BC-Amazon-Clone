import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles/Payment.css';
import ShoppingContext from '../context/shopping/shoppingContext';
import CheckoutProduct from './CheckoutProduct';
import AuthContext from '../context/authContext';

const Payment = () => {
    const shoppingContext = useContext(ShoppingContext);
    const { userEmail } = useContext(AuthContext);
    const { basket, user } = shoppingContext; // Get the basket from context

    return (
        <div className='payment'>
            <div className='payment-container'>
                <h2>Checkout <Link to='/checkout'>{basket?.length} items</Link></h2>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment-address'>
                        <p>{userEmail}</p>
                        <p>123 Placeholder Street</p>
                        <p>Cape Town, SA</p>
                    </div>
                </div>
                <div className='payment-section'>
                    <div className='payment-title'><h3>Review Items and Delivery</h3></div>
                </div>
                <div className="payment-items">
                    {basket.map(item =>
                    (<CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />)
                    )}
                </div>
            </div>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Payment Method</h3>
                </div>
                <div className="payment-details">
                    {}
                </div>
            </div>
            
            
        </div>
    );
};

export default Payment;