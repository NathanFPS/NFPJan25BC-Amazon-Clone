import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/layout/Header';
import ProductsDetails from './components/ProductsDetails';
import Login from './components/Login';
import NotFound from './components/NotFound';
import CheckoutProduct from './components/CheckoutProduct';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import './App.css';

const promise = loadStripe(
    'pk_test_51R92zt4KrdOFPoaSLXn9DQV8ExW6Y3ys3gotI9r2OuG5Fhbfgby0D492zLA4nTVEf94DYiMD8JPVXOyWMkEeSIsN00TAG87iVW'
)

const App = () => {
    return (
        <AuthContextProvider>
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home" component={Home} />
                        <Route path="/products" component={Products} />
                        <Route path="/products-details/:id" component={ProductsDetails} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/payment">     
                            <Elements stripe={promise}>component={Payment}</Elements>
                        </Route> 
                        <Route path="/login" component={Login} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </AuthContextProvider>
    );
};

export default App;