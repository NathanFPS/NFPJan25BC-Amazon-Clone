import ShoppingContext from './shoppingContext';
import {shoppingReducer} from './shoppingReducer';
import { createContext, useReducer } from 'react';

export const ShoppingState = (props) => {
    const initialState = {basket: [], user: []};
    const [state, dispatch] = useReducer(shoppingReducer, initialState);
    
    const getBasketTotal = (basket) => {
        return basket.reduce((amount, item) => {
            const price = parseFloat(item.price);
            return amount + (isNaN(price) ? 0 : price);
        }, 0);
    };
    
    const addToBasket = async (item) => {
        dispatch({
            type: 'ADD_TO_BASKET', 
            payload: item
        });
    }

    const removeFromBasket = (item) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            payload: item, 
        });
    }

    const setUser = (user) => {
        dispatch({
            type: 'SET_USER',
            payload: user, 
        })
    }

    return (
        <ShoppingContext.Provider
            value={{
                basket: state.basket,
                user: state.user,
                getBasketTotal,
                addToBasket,
                setUser,
                removeFromBasket
            }}>
            {props.children}
        </ShoppingContext.Provider>
    );
}