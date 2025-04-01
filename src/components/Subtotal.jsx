import React, {useContext} from 'react';
import CurrencyFormat from 'react-currency-format';
import './styles/Subtotal.css';
import ShoppingContext from '../context/shopping/shoppingContext';
import { withRouter } from 'react-router-dom'; 

const Subtotal = ({ history }) => {
    const shoppingContext = useContext(ShoppingContext);
    const {basket, getBasketTotal} = shoppingContext;

    console.log(getBasketTotal(basket));
    const handleTest = (e) => {
        e.preventDefault();
        console.log(getBasketTotal(basket));
    }
    
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => 
                    <><p>Subtotal (
                        {basket?.length}
                        items):
                        <strong>{value}</strong>
                    </p>
                    <small className='subtotal-gift'>
                        <input type="checkbox" />
                        This order contains a gift
                    </small>
                    </>
                }
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                prefix={"R"}
            />
            <button onClick={handleTest}>Test Total</button>
            <button onClick={() => history.push('/payment')}>Proceed to Checkout</button> {/* Use history.push for navigation */}
        </div>
    )
}

export default withRouter(Subtotal);