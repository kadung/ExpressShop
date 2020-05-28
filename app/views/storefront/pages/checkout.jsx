import React from 'react';
import StorefrontLayout from '../layout';
import CheckoutItems from '../components/checkout/checkoutItems';
import CartItems from '../components/checkout/cartItems';

const Checkout = (props) => {
    return (
        <StorefrontLayout categories={props.categories} cartNum={props.cartNum} isLogin={props.isLogin}>
            <div className="row container pt-5">
                <CheckoutItems userData={props.userData} />
                <CartItems cartItems={props.cartItems} />
            </div>
        </StorefrontLayout>
    )
}

export default Checkout;