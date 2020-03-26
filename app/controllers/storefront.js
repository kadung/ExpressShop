const Categories = require('../models/category');
const Product = require('../models/product');

exports.index = async (req, res, next) => {
    let categories = await Categories.find();
    console.log(categories);
    res.render('storefront/pages/index', { categories: categories });
}