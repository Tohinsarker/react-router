import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {

    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h1>{products.name}</h1>
            <h2>{products.email}</h2>
        </div>
    );
};

export default ProductDetails;