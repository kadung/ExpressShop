var express = require('express');
var router = express.Router();

const productController = require('../../controllers/storefront/product')


/* Homepage */
router.get("/", productController.productList);

/* Product Detail */
router.get('/product/:name', productController.productDetail);

/* Product Search */
router.get('/search', productController.productList);

/* Product Category */
router.get('/category/:categoryText', productController.productCategory);

module.exports = router;