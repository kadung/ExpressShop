
exports.index = (req, res, next) => {
    res.render('pages/storefront', { name: 'Express' });
}