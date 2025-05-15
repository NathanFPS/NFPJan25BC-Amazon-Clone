import React from 'react';
import { withRouter } from 'react-router-dom';
import Product from './Product';
import products from './ProductsData'; 

const ProductsDetails = ({ match }) => {
  const { id } = match.params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <Product
        id={product.id}
        title={product.title}
        image={product.image}
        rating={product.rating}
        price={product.price}
      />
    </div>
  );
}

export default withRouter(ProductsDetails);