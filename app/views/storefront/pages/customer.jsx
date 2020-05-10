import React from 'react';
import StorefrontLayout from '../layout'
import CustomerProfile from '../components/customer/profile';
import HistoryOrders from '../components/customer/order';

const Customer = (props) => {
    return (
        <StorefrontLayout categories={props.categories} cartNum={props.cartNum} isLogin={props.isLogin}>
            <div className="container pt-5">
                <CustomerProfile />
                <HistoryOrders />
            </div>
        </StorefrontLayout>
    )
}

export default Customer;