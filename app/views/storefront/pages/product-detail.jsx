import React from 'react';
import StorefrontLayout from '../layout'
import ProductData from '../components/products/product-data';
import ProductRelate from '../components/products/product-relate';

const storeforntPage = (props) => {
  return (
      <StorefrontLayout categories={props.categories}>
          <div className="container">
            <ProductData product={props.product}/>
            <ProductRelate relative={props.props}/>
          </div>
      </StorefrontLayout>
  )
}

export default storeforntPage;