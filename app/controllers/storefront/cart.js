exports.add = async (req, res, next) => {

    if (req.session.cart){
        req.session.cart.push({
            productId: req.body.productId,
            productName: req.body.productName,
            productImageUrl: "",
            size: req.body.size || "",
            color: req.body.color || "",
            quantity: req.body.quantity,
            price: req.body.productPrice,
        });
    } else{
        req.session.cart = [
            {
                productId: req.body.productId,
                productName: req.body.productName,
                productImageUrl: "",
                size: req.body.size || "",
                color: req.body.color || "",
                quantity: req.body.quantity,
                price: req.body.productPrice,
            }
        ]
    }
    console.log(req.session.cart)

    res.send({
        message: "Cart successfully updated",
        totalCartItems: req.session.cart.length
    });
    
}

exports.update = (req, res, next) => {

}