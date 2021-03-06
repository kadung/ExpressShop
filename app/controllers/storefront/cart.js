var mongooseTypes = require('mongoose').Types;

const Category = require('../../models/category');
const Order = require('../../models/order');

exports.get = async (req, res, next) => {
    let cartNum = 0;
    let cartData = [];
    let cartTotal = 0;
    const categories = await Category.find();

    if (req.session.cart){
        cartData = req.session.cart;
        cartNum = cartData.length;
        cartData.forEach(element => {
            cartTotal += element.price * element.quantity;
        });
        
    } 

    res.render(
        'storefront/pages/cart',
        {
            categories: categories,
            cartNum: cartNum,
            cartData: cartData,
            cartTotal: cartTotal,
            isLogin: req.session.passport && req.session.passport.user
        }
    )
}

exports.add = async (req, res, next) => {
    let existItem = false;
    let newItem = {
        cartId: mongooseTypes.ObjectId(),
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

    res.send({
        message: "Cart successfully updated",
        totalCartItems: req.session.cart.length
    });   
}

exports.delete = (req, res, next) => {
    let cartTotal = 0;

    if (!req.session.cart){
        return res.sendStatus(404);
    }

    const deleteCartId = req.query.cartId;
    const deleteItemIndex = req.session.cart.findIndex((item) => {
        return item.cartId == deleteCartId;
    })

    req.session.cart.splice(deleteItemIndex, 1);

    if(req.session.cart.length) {
        req.session.cart.forEach(element => {
            cartTotal += element.price * element.quantity;
        });
    }
    

    res.send({
        success: true,
        totalCartItems: req.session.cart.length,
        cartTotal: cartTotal
    });  
}

exports.getCheckout = async (req, res, next) => {
    let isLogin = false;
    let userData = false;

    const categories = await Category.find();

    if (req.session.passport && req.session.passport.user){
        isLogin = true;
        userData = req.user;
    }

    res.render(
        "storefront/pages/checkout",
        {
            categories: categories,
            cartItems: req.session.cart || [],
            cartNum: req.session.cart && req.session.cart.length || 0,
            isLogin: isLogin,
            userData: userData
        }
    )
}

exports.postCheckout = async (req, res, next) => {
    // Validate
    console.log(req.body)

    // Create new order

    // Forward to payment gateway if needed
}