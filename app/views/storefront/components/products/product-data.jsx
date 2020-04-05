import React from 'react';

const ProductData = (props) => {
    return(
        <div class="row">
            <div class="col-sm-12 col-md-6 mr-auto">
                <div id="demo" class="carousel slide" data-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    {/* <!-- The slideshow --> */}
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img width="600" height="400" src="https://wass.edu.vn/wp-content/uploads/2020/02/banner-facebook-wsc-2020.png" alt="Los Angeles" />
                        </div>
                        <div class="carousel-item">
                            <img width="600" height="400" src="https://sudospaces.com/vietchem-com-vn/2018/08/3.jpg" alt="Chicago" />
                        </div>
                        <div class="carousel-item">
                            <img width="600" height="400" src="https://sudospaces.com/vietchem-com-vn/2018/08/3.jpg" alt="New York" />
                        </div>
                    </div>

                    {/* <!-- Left and right controls --> */}
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 ml-auto">
                <div class="row">
                    <h1 class="col-md-10 product-title text-truncate">Scout Backpack</h1>
                    <h4 class="col-md-10 product-price mp-0">£128.00</h4>
                    <h4 class="col-md-10 product-option">Options</h4>
                    <div class="col-md-10">
                            <strong>Select colour</strong>
                            <select name="colour" data-label="Select colour" class="form-control product-opt">
                                    <option value="Navy">Navy</option>
                                    <option value="Moss">Moss</option>
                                    <option value="Nutmeg">Nutmeg</option>
                                    <option value="Khaki">Khaki</option>
                            </select>
                    </div>
                    <div class="col-md-10 productOptions">
                        <p class="product-option-text">Quantity</p>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <button class="btn btn-primary qty-btn-minus" type="button">-</button>
                            </div>
                            <input type="number" class="form-control add-color text-center" id="product_quantity" maxlength="3" value="1" />
                            <div class="input-group-append">
                                <button class="btn btn-primary qty-btn-plus" type="button">+</button>
                            </div>
                        </div>
                </div>
                <div class="col-md-10 btnAddToCart">
                    <button class="btn btn-primary btn-block product-add-to-cart" type="button">Add to cart</button>
                </div>
                <div class="col-md-10 body_text">
                    Product detail
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProductData;