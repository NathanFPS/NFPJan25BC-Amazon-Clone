import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/layout/Header';
import ProductsDetails from './components/ProductsDetails';

const App = () => {
  return (
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
