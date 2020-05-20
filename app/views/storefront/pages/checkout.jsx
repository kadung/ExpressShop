import React from 'react';
import StorefrontLayout from '../layout';
import Shipping from '../components/checkout/shipping';
import CartInfo from '../components/checkout/cartInfo';
import Payment from '../components/checkout/payment';

const Checkout = (props) => {
    return (
        <StorefrontLayout>
            <Shipping />
            <CartInfo />
            <Payment />
        </StorefrontLayout>
    )
}

export default Checkout;