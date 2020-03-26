import React from 'react';
import StorefrontLayout from '../layout'
import ProductList from '../components/products/product-list';

const storeforntPage = (props) => {
  return (
      <StorefrontLayout categories={props.categories}>
          <ProductList />
      </StorefrontLayout>
  )
}

export default storeforntPage;