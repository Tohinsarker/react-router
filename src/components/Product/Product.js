import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({data}) => {

    const {id, name, email, username} = data;
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <h3>username: <Link to={`/product/${id}`}>{username}</Link></h3>
        </div>
    );
};

export default Product;