import React from 'react';
import StorefrontLayout from '../layout'
import ProductList from '../components/products/product-list';
import Pagination from '../components/pagination/pagination'

const storeforntPage = (props) => {
  return (
      <StorefrontLayout categories={props.categories}>
          <ProductList 
            products={props.products.docs}
            search={props.search} 
          />
          <Pagination 
            totalPages={props.products.totalPages}
            currentPage={props.products.page}
            prevPage={props.products.prevPage}
            nextPage={props.products.nextPage}
            baseUrl={props.baseUrl}
          />
      </StorefrontLayout>
  )
}

export default storeforntPage;