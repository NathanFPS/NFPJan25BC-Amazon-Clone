import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Route path='/home/username'> 
        <h3>Welcome, username!</h3>
      </Route>
    </div>
  );
}

export default Home;
