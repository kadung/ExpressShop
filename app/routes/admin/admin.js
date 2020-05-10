const express = require('express');
const router = express.Router();

const adminController = require('../../controllers/admin/admin');

/* Admin dashboard */
router.get("/dashboard/", adminController.dashboard);

/* Admin categories */
router.get("/categories/", adminController.categoryList);

/* Admin products */
router.get("/products/", adminController.productList);

/* Admin orders */
router.get("/orders/", adminController.orderList);

module.exports = router;