import React from 'react';

const ProductCard = (props) => {
    const productLink = "/product/" + props.product.name;
    const imageSrc = props.product.images.length && props.product.images[0].src;
    const imageAlt = props.product.images.length && props.product.images[0].alt;
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <a href={productLink}>
                    <img src={imageSrc} 
                      alt={imageAlt} 
                      className="img-thumbnail" />
                </a>
                
                <div className="card-body">
                    <a href={productLink}>
                        <p className="card-text text-center">{props.product.name}</p>
                        <p className="card-text text-center">{props.product.price + " VND"}</p>
                    </a>
                    <div className="row justify-content-center">
                        <button type="button" 
                          className="btn btn-primary" 
                          disabled={!props.product.stock}>
                            {props.product.stock ? "Add to Cart" : "Out of Stock"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;