import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Product.css';

const Product = ({id, image, title, rating, price}) => {
  return (
    <div className='product'>
        <img src={image} alt="" />
        <div className="pinfo">
            <p>{title}</p>
            <div className="prating">
                <p>{rating}</p>
            </div>
            <div className="ppricing">
                <p>{price}</p>
            </div>
        </div>
        <button className="pbutton">
            Add to Basket?
        </button>
    </div>


  );
}

export default Product;