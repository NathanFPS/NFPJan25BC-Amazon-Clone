import React from 'react';
import {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AuthContext from '../../context/authContext';
import ShoppingContext from '../../context/shopping/shoppingContext';

const Header = () => {
  const ctx = useContext(AuthContext);
  const shoppingCtx = useContext(ShoppingContext); 
  
  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
        </Link>
        <div className="search-section">
          <input className="search-input" type="text" />
          <SearchIcon className="search-icon" />
        </div>
        <div className="header-nav">
          {ctx.isLoggedIn ? (
            <div className="header-options" onClick={ctx.onLogout}>
              <span className="option-1">Hello, {ctx.userEmail}</span>
              <span className="option-2">Sign Out</span>
            </div>
          ) : (
            <Link to="/login">
              <div className="header-options">
                <span className="option-1">Hello Guest</span>
                <span className="option-2">Sign In</span>
              </div>
            </Link>
          )}
          <div className="header-options">
            <span className="option-1">Returns</span>
            <span className="option-2">And Orders</span>
          </div>
          <div className="header-options">
            <span className="option-1">Your</span>
            <span className="option-2">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header-basket">
              <ShoppingCartOutlinedIcon />
              <span className="basket-count">{shoppingCtx.basket.length}</span>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};


export default Header;