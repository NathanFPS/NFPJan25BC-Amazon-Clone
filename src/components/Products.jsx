import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        <li><Link to='/products-details/1'>Product 1</Link></li>
        <li><Link to='/products-details/2'>Product 2</Link></li>
        <li><Link to='/products-details/3'>Product 3</Link></li>
        <li><Link to='/products-details/4'>Product 4</Link></li>
      </ul>
    </div>
  );
}

export default Products;
