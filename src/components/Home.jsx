import React from 'react';
import { Route } from 'react-router-dom';
import './styles/Home.css';
import Products from './Products';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <video className="prom-vid" src="https://m.media-amazon.com/images/I/D1S4vepgtlL.mp4" loop autoPlay muted></video>
      </div>

      <Products />

      <Route path='/home/username'> 
        <h3>Welcome, username!</h3>
      </Route>
    </div>
  );
}

export default Home;
