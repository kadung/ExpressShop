import React from 'react';
import StorefrontLayout from '../layout'

const storeforntPage = (props) => {
  return (
      <StorefrontLayout>
        <div>
          Hello {props.name}, this is frontstore
        </div>
        
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
      </StorefrontLayout>
  )
}

export default storeforntPage;