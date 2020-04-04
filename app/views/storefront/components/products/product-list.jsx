import React from 'react';
import ProductCard from './product-cards';

const ProductList = (props) => {
    const products = props.products.map(product => 
        <ProductCard
            product={product}
            key={product._id}
        /> 
    );

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                {props.search && <h3>Search result: Dung</h3>}
                <div className="row">
                    {products}                                
                </div>
            </div>
        </div>
    )
}

export default ProductList;