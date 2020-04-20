import React from 'react';
import StorefrontLayout from '../layout'

const Cart = (props) => {
    let cartItems;
    if(props.cartData.length){
        cartItems = props.cartData.map((item, index) => {
            return (
                <div>
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-2 text-center">
                                <img class="img-responsive" src="http://placehold.it/120x80" alt="prewiew" width="120" height="80" />
                        </div>
                        <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                            <h4 class="product-name"><strong>{item.productName}</strong></h4>
                            <small>{item.color ? `Color: ${item.color}` : ""}</small>
                            &nbsp;&nbsp;&nbsp;
                            <small>{item.size ? `Size: ${item.size}` : ""}</small>
                        </div>
                        <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                            <div class="col-3 col-sm-3 col-md-6 text-md-right pt-2">
                                <h6><strong>{item.price} <span class="text-muted">x</span></strong></h6>
                            </div>
                            <div class="col-4 col-sm-4 col-md-4">
                                <div class="quantity">
                                    <input type="number" step="1" max="99" min="1" 
                                        value={item.quantity} title="Qty" class="qty"
                                        size="4"/>
                                </div>
                            </div>
                            <div class="col-2 col-sm-2 col-md-2 text-right">
                                <button id="deleteCartItem" type="button" class="btn btn-outline-danger btn-xs">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
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
                <div class="card shopping-cart">
                    <div class="card-header bg-dark text-light">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        &nbsp;Your cart
                    </div>
                    <div class="card-body">
                        {
                            props.cartData.length ? cartItems : <p>There is no product in your cart.</p>
                        }
                            
                        <div class="pull-right">
                            <a href="" class="btn btn-outline-secondary pull-right">
                                Update shopping cart
                            </a>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="coupon col-md-5 col-sm-5 no-padding-left pull-left pt-2">
                            <div class="row">
                            Total price 
                            : <b>{props.cartTotal + " VND"}</b>
                            </div>
                        </div>
                        <div class="pull-right">
                            <a href="" class="btn btn-success pull-right">Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </StorefrontLayout>
    )
}

export default Cart;