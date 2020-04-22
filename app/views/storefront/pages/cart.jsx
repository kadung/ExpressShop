import React from 'react';
import StorefrontLayout from '../layout'

const Cart = (props) => {
    let cartItems;
    if(props.cartData.length){
        cartItems = props.cartData.map((item, index) => {
            return (
                <div id={item.cartId}>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 text-center">
                                <img className="img-responsive" src="http://placehold.it/120x80" alt="prewiew" width="120" height="80" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 text-sm-center text-lg-left">
                            <h4 className="product-name"><strong>{item.productName}</strong></h4>
                            <small>{item.color ? `Color: ${item.color}` : ""}</small>
                            &nbsp;&nbsp;&nbsp;
                            <small>{item.size ? `Size: ${item.size}` : ""}</small>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 text-sm-center text-md-right row">
                            <div className="col-3 col-sm-3 col-md-6 text-md-right pt-2">
                                <h6><strong>{item.price} <span className="text-muted">x</span></strong></h6>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4">
                                <div className="quantity">
                                    <input type="number" step="1" max="99" min="1" 
                                        value={item.quantity} title="Qty" className="qty"
                                        size="4"/>
                                </div>
                            </div>
                            <div className="col-2 col-sm-2 col-md-2 text-right">
                                <button id="deleteCartItem" className="btn btn-outline-danger btn-xs"
                                  cartid={item.cartId}>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
            )
        }) 
    }
    
    return (
        <StorefrontLayout categories={props.categories} cartNum={props.cartNum}>
            <div className="container pt-5">
                <div className="card shopping-cart">
                    <div className="card-header bg-dark text-light">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        &nbsp;Your cart
                    </div>
                    <div className="card-body">
                        {
                            props.cartData.length ? cartItems : <p>There is no product in your cart.</p>
                        }

                        <div className="d-flex justify-content-between">
                            <div>
                                Coupon
                            </div>
                            <div>
                                Total price: <b id="cartTotal">{" " + props.cartTotal + " VND"}</b>
                            </div>
                        </div>  
                    </div>
                    <div className="card-footer">
                        <div className="text-right">
                            <a href="" className="btn btn-success pull-right">Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </StorefrontLayout>
    )
}

export default Cart;