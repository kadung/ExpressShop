import React from 'react';

const ProductCard = (props) => {
    const productLink = "/product/" + props.product.name;
    const imageSrc = props.product.images.length && props.product.images[0].src;
    const imageAlt = props.product.images.length && props.product.images[0].alt;
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <a href={productLink}>
                    <img src={imageSrc} alt={imageAlt} className="card-img-top" />
                </a>
                <div className="card-body">
                    <a href={productLink}>
                        <div className="text-center text-dark">
                            <div className="card-text">{props.product.name}</div>
                            <div className="card-text">{props.product.price + " VND"}</div>
                        </div>
                    </a>
                    <div className="row justify-content-center pt-1">
                        <form action={productLink} method="get">
                            <button type="submit" 
                              className="btn btn-sm btn-primary" 
                              disabled={!props.product.stock}>
                                {props.product.stock ? "Add to Cart" : "Out of Stock"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;