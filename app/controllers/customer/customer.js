const Category = require('../../models/category');

exports.getProfile = async (req, res, next) => {
    Promise.all([
        Category.find(),
    ])
    .then(([categories]) => {
        console.log(req.session.passport);
        res.render(
            'storefront/pages/customer',
            { 
                categories: categories,
                cartNum: req.session.cart && req.session.cart.length || 0,
                isLogin: req.session.passport && req.session.passport.user
            }
        );
    })
    .catch(next);
}