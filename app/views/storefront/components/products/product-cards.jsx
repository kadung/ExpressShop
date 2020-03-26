import React from 'react';

const ProductCard = () => {
    return (
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="thumbnail" class="img-thumbnail" />
                <div class="card-body">
                    <p class="card-text text-center">Wider card</p>
                    <div class="row justify-content-center">
                        <button type="button" class="btn btn-outline-secondary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;