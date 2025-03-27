import {useContext} from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AuthContext from '../../context/authContext';
import ShoppingContext from '../../context/shopping/shoppingContext';
import { auth } from '../../Firebase';

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const {basket, user} = shoppingContext;

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

  return ( 
    <header className="header">
      <Link to="/">
        <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
      </Link>
      <div className="search-section">
        <input className="search-input" type="text" />
        <SearchIcon className='search-icon' />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-options" onClick={handleAuthentication}>
              <span className="option-1">Hello, {!user ? "Guest" : user.email}</span>
              <span className="option-2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <div className="header-options">
            <span className="option-1">Returns</span>
            <span className="option-2">And Orders</span>
        </div>

        <div className="header-options">
            <span className="option-1">Your</span>
            <span className="option-2">Prime</span>
        </div>

        <div className="header-basket">
            <ShoppingCartOutlinedIcon />
            <span className="basket-count">{basket?.length}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;