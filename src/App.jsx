import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/layout/Header';
import ProductsDetails from './components/ProductsDetails';
import Login from './components/Login';
import NotFound from './components/NotFound';
import React, { useState, useEffect, useContext } from 'react';
import AuthContext from './context/authContext';
import ShoppingContext from './context/shopping/shoppingContext';
import { auth } from './Firebase';
import { AuthContextProvider } from "./context/authContext";

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [setUser]);

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
}


export default App;
