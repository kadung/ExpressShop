var express = require('express');
var router = express.Router();

const productController = require('../controllers/storefront/product')


/* Homepage */
router.get("/", productController.productList);

/* Product list */
router.get('/page/:pageNum', productController.productList);

/* Product Detail */
router.get('/product/:id');

/* Product Search */
router.get('/search/:searchText');

/* Product Category */
router.get('/category/:categoryText', productController.productCategory);
router.get('/category/:categoryText/:pageNumber', productController.productCategory)

module.exports = router;