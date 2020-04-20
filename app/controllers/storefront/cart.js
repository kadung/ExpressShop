const Category = require('../../models/category');

exports.get = async (req, res, next) => {
    let cartNum = 0;
    let cartData = [];
    let total = 0;
    const categories = await Category.find();

    if (req.session.cart){
        cartData = req.session.cart
        cartNum = cartData.length;
        cartData.forEach(element => {
            total += element.price * element.quantity;
        });
        
    } 

    res.render(
        'storefront/pages/cart',
        {
            categories: categories,
            cartNum: cartNum,
            cartData: cartData,
            cartTotal: total
        }
    )
}

exports.add = async (req, res, next) => {
    let existItem = false;
    let newItem = {
        productId: req.body.productId,
        productName: req.body.productName,
        productImageUrl: "",
        size: req.body.size || "",
        color: req.body.color || "",
        quantity: req.body.quantity,
        price: req.body.productPrice,
    };

    if (!req.session.cart){
        req.session.cart = [];
    }

    req.session.cart.forEach(item => {
        if(newItem.productId == item.productId && newItem.size == item.size && newItem.color == item.color) {
            item.quantity = +item.quantity + +req.body.quantity;
            existItem = true;
        }
    });

    if (!existItem){
        req.session.cart.push(newItem);
    }

    console.log(req.session.cart)

    res.send({
        message: "Cart successfully updated",
        totalCartItems: req.session.cart.length
    });
    
}