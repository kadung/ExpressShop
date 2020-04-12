import React from 'react';
import Carousel from '../carousel/carousel';

const ProductData = (props) => {
    let selectColour;
    let selectSize;

    if (props.product.options.colors){
        selectColour = (
            <div className="form-group">
                Select colour
                <select name="color" className="form-control">
                    {
                        props.product.options.colors.map(color => {
                            return <option value={color}>{color}</option>
                        })
                    }
                </select>
            </div>
        )
    }
    if (props.product.options.sizes){
        selectSize = (
            <div className="form-group">
                Select size
                <select name="size" className="form-control">
                    {
                        props.product.options.sizes.map(size => {
                            return <option value={size}>{size}</option>
                        })
                    }
                </select>
            </div>
        )
    }

    return(
        <div className="row">
            <div className="col-sm-12 col-md-6 mr-auto">
                <Carousel images={props.product.images} />
            </div>

            <div className="col-sm-12 col-md-6 ml-auto">
                <div className="row offset-sm-1">
                    <h3 className="col-md-10">{props.product.name}</h3>
                    <h5 className="col-md-10">{props.product.price + " VND"}</h5>
                    <div className="col-md-8 pt-3 ">
                        <form action="/product/addToCart" method="post">
                            {selectColour}
                            {selectSize}
                            <div className="form-group">
                                Quantity
                                <input name="quantity"
                                  type="number"
                                  className="form-control"
                                  maxLength="3"
                                  value="1" />
                            </div>
                            <div className="form-group">
                                <button 
                                  className="btn btn-primary" 
                                  type="submit"
                                  disabled={!props.product.stock}>
                                    {props.product.stock ? "Add to Cart" : "Out of Stock"}
                                </button>
                            </div>
                        </form>

                        <div>
                            <p>If you click on the "Hide" button, I will disappear.</p>

                            <button id="hide" onClick={myFunction()}>Hide</button>
                            <button id="show">Show</button>
                           
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-sm-10 pt-3">
                <h5>Product description:</h5>
                <div dangerouslySetInnerHTML={{ __html: props.product.description }}></div>
            </div>
        </div>
    );
}

export default ProductData;