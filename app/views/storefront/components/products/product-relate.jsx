import React from 'react';
import ProductCard from './product-cards';

const ProductRelate = (props) => {
    const products = props.relatedProduct.map(product => 
        <ProductCard
            product={product}
            key={product._id}
        /> 
    );
    return(
        <div className="pt-1">
            <strong>Related products</strong>
            <div className="row" height="100">
                {products}
            </div>
        </div>
    );
}

export default ProductRelate;