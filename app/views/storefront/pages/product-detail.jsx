import React from 'react';
import StorefrontLayout from '../layout'
import ProductData from '../components/products/product-data';
import ProductRelate from '../components/products/product-relate';

const storeforntPage = (props) => {
  return (
      <StorefrontLayout categories={props.categories} cartNum={props.cartNum} isLogin={props.isLogin}>
          <div className="container pt-5">
            <ProductData product={props.product}/>
            <ProductRelate relatedProduct={props.relatedProduct}/>
          </div>
      </StorefrontLayout>
  )
}

export default storeforntPage;