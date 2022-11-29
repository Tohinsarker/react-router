import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const datas  = useLoaderData();
    return (
        <div>
           
            {
                datas.map(data => <Product 
                key={data.id}
                data = {data}
                    ></Product> )
            }
            
        </div>
    );
};

export default Products;