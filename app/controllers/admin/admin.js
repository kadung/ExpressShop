const CategoryModel = require('../../models/category');

exports.dashboard = (req, res, next) => {
    res.render('admin/pages/dashboard');
}

exports.categoryList = async (req, res, next) => {
    try {
        const categories = await CategoryModel.find();
        res.render('admin/pages/categories', {categories: categories});
    } catch (err) {
        next(err);
    }
}

exports.productList = (req, res, next) => {
    res.render('admin/pages/products');
}

exports.orderList = (req, res, next) => {
    res.render('admin/pages/orders');
}

exports.userList = (req, res, next) => {
    res.render('admin/pages/users');
}