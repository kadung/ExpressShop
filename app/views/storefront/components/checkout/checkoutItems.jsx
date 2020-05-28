import React from 'react';

const Shipping = (props) => {
  let createAccount;
  if (!props.userData) {
    createAccount = (
      <>
        <hr className="mb-4" />
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="new-account" />
          <label className="custom-control-label" for="new-account">Tạo tài khoản mới</label>
        </div>
      </>
    );
  }

  return (
      <div className="col-md-8 order-md-1">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" method="post" action="/cart/checkout">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label> Họ và tên*:</label>
              <input type="text" className="form-control" name="fullName" required
                value={props.userData ? props.userData.fullName : ""}  />
              <div className="invalid-feedback">
                <b>Tên không hợp lệ!</b>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="email">Email*</label>
            <input type="email" className="form-control" name="email" required
              value={props.userData ? props.userData.email : ""}  />
            <div className="invalid-feedback">
              <b>Email không hợp lệ!</b>
            </div>
          </div>

          <div className="mb-3">
            <label for="address">Địa chỉ*:</label>
            <input type="text" className="form-control" name="address" required 
              value={props.userData ? props.userData.address: ""}  />
            <div className="invalid-feedback">
              <b>Địa chỉ không hợp lệ!</b>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 mb-3">
              <label for="country">Tỉnh/Thành phố*:</label>
              <select className="custom-select d-block w-100" name="city" required>
                <option value={props.userData ? props.userData.city : ""} selected hidden disabled>
                  {props.userData ? props.userData.city : "Chọn thành phố"}
                </option>   
                <option>Hồ Chí Minh</option>
              </select>
              <div className="invalid-feedback">
                <b>Tỉnh/Thành phố không phù hợp.</b>
              </div>
            </div>
          </div>
          
          {createAccount}
 
          <div className="row hide" id="pass">
            <div className="col-md-6 mb-3">
              <label>Mật khẩu*:</label>
              <input type="text" className="form-control" name="password" id="password" />
            </div>
            <div className="col-md-6 mb-3">
              <label>Xác nhận mật khẩu*:</label>
              <input type="text" className="form-control" name="confirmPassword" id="confirmPassword" />
            </div>
            <div className="invalid-feedback">
              <b>Mật khẩu và xác nhận mật khẩu không trùng nhau!</b>
            </div>
          </div>
          
          <hr className="mb-4" />

          <h4 className="mb-3">Thanh toán</h4>
          <div className="d-block my-3">
            <div className="custom-control custom-radio">
              <input value="cod" name="paymentMethod" type="radio" className="custom-control-input" checked required />
              <label className="custom-control-label">COD</label>
            </div>
            <div className="custom-control custom-radio">
              <input value="atm" name="paymentMethod" type="radio" className="custom-control-input" required />
              <label className="custom-control-label">Thẻ ngân hàng</label>
            </div>
            <div className="custom-control custom-radio">
              <input value="credit" name="paymentMethod" type="radio" className="custom-control-input" required />
              <label className="custom-control-label">Thẻ tín dụng</label>
            </div>
          </div>
          {/* <div className="row" id="creditInfo">
            <div className="col-md-6 mb-3">
              <label for="cc-name">Tên trên thẻ</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required />
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="cc-number">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label for="cc-expiration">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label for="cc-expiration">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div> */}
          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
        </form>
      </div>
  )
}

export default Shipping;