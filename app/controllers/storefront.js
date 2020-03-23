
exports.index = (req, res, next) => {
    res.render('storefront/pages/index', { name: 'Express' });
}