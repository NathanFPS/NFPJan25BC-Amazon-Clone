import React from 'react';
import { withRouter } from 'react-router-dom';

const ProductsDetails = ({ match }) => {
    const { id } = match.params;
    console.log(id);

    return (
        <div>
            <h1>Products Details Page</h1>
            <p>Product ID: {id}</p>
        </div>
    );
}

export default withRouter(ProductsDetails);