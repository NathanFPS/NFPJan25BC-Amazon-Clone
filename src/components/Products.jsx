import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Products.css';
import Product from './Product';

const Products = () => {
  return (
    <>
      <div className="product-rows">
        <Product 
          id='1' 
          title='Nintendo Switch - Neon Red/Neon Blue' 
          image="https://m.media-amazon.com/images/I/71n+F6bHXGL._AC_SY355_.jpg" alt=""
          rating={5.0}
          price={5999.99}
        />

        <Product 
          id='2' 
          title='HONOR 200 LITE 256GB DS STARRY BLUE' 
          image="	https://m.media-amazon.com/images/I/71HwDGfWYdL._AC_SY355_.jpg" alt=""
          rating={3.0}
          price={5878.81}
        />
      </div>

      <div className="product-rows">
        <Product 
          id='3' 
          title='Canyon MW-16 Vertical Wireless Optical Mouse, Black' 
          image="https://m.media-amazon.com/images/I/51zPGAd02ZL._AC_SL1500_.jpg" alt=""
          rating={4.0}
          price={229.99}
        />

        <Product 
          id='4'  
          title='FOSCAM 1080P HD USB Streaming Webcam – Noise-Reducing Microphone, 85° Wide-Angle, Privacy Cover, and Plug-and-Play for Conference, Gaming, and Business' 
          image="	https://m.media-amazon.com/images/I/51O2TTNC9dL._AC_SL1000_.jpg" alt=""
          rating={3.0}
          price={425.99}
        />

        <Product 
          id='5' 
          title='ASUS TUF Gaming A15 AMD Ryzen™ 5 7535HS 8GB 512GB SSD RTX2050 4GB FHD WIN 11 Home 15.6 inch Gaming Laptop' 
          image="https://m.media-amazon.com/images/I/71m+cjlJDiL._AC_SL1200_.jpg" alt=""
          rating={5}
          price={10499.99}
        />
      </div>
    </>
  );
}

export default Products;
