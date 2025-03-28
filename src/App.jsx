import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext'; // Import AuthContextProvider
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/layout/Header';
import ProductsDetails from './components/ProductsDetails';
import Login from './components/Login';
import NotFound from './components/NotFound';

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
                        <Route path="/login" component={Login} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </AuthContextProvider>
    );
};

export default App;