import React from 'react';

const CartInfo = (props) => {
    let listItems;
    let total = 0;

    if (props.cartItems.length) {
      listItems = props.cartItems.map(item => {
        total += item.price * item.quantity;
        return (
          <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{item.productName}</h6>
            <small className="text-muted">Quantity: {item.quantity}</small>
          </div>
          <span className="text-muted">{item.price + " VND"}</span>
        </li>
        )
      })
    }

    return (
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
          </h4>
          <ul className="list-group mb-3">
            {listItems}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>{total + " VND"}</strong>
            </li>
          </ul>
        </div>
    )
}

export default CartInfo;