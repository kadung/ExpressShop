import React from 'react';
import ProductCard from './product-cards';

const ProductList = () => {
    return (
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default ProductList;