exports.dashboard = (req, res, next) => {
    res.render('admin/pages/dashboard');
}

exports.categoryList = (req, res, next) => {
    res.render('admin/pages/categories');
}

exports.productList = (req, res, next) => {
    res.render('admin/pages/products');
}

exports.orderList = (req, res, next) => {
    res.render('admin/pages/orders');
}