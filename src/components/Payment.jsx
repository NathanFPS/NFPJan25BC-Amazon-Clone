import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from '../Axios';
import './styles/Payment.css';
import ShoppingContext from '../context/shopping/shoppingContext';
import CheckoutProduct from './CheckoutProduct';
import AuthContext from '../context/authContext';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Payment = () => {
    const shoppingContext = useContext(ShoppingContext);
    const { userEmail } = useContext(AuthContext);
    const { basket, getBasketTotal } = shoppingContext;
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        const getClientSecret = async () => {
            const total = getBasketTotal(basket) * 100;
            console.log('Getting client secret for total:', total);

            if (total <= 0) {
                console.warn('Basket total is zero or invalid. Skipping payment intent creation.');
                return;
            }

            try {
                const response = await axios({
                    method: 'POST',
                    url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
                });

                console.log('Received clientSecret:', response.data.clientSecret);

                if (response.data?.clientSecret) {
                    setClientSecret(response.data.clientSecret);
                } else {
                    console.error('No clientSecret received from backend.');
                }
            } catch (err) {
                console.error('Failed to get client secret:', err);
            }
        };

        if (basket.length > 0) {
            getClientSecret();
        }
    }, [basket]);


    console.log('The secret is =>', clientSecret);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        });

        if (payload.error) {
            setError(`Payment failed: ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };

    return (
        <div className='payment'>
            <div className='payment-container'>
                <h2>Checkout <Link to='/checkout'>{basket?.length} items</Link></h2>

                {/* Delivery Address */}
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

                {/* Review Items */}
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment-items">
                        {basket && basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Method */}
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        <form onSubmit={handleSubmit}>
                            <CardElement />
                            <button disabled={processing || succeeded}>
                                {processing ? "Processing…" : "Pay now"}
                            </button>
                            {error && <div className="payment-error">{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Payment;
