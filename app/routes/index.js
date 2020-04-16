const express = require('express');
const router = express.Router();

const productRoutes = require('./storefront/product');
const cartRoutes = require('./storefront/cart');
const checkoutRoutes = require('./storefront/checkout');
const adminRoutes = require('./admin/index');

/* Storefront */
router.use("/", productRoutes);

/* Cart */
router.use("/cart/", cartRoutes);

/* Checkout */
router.use("/checkout", checkoutRoutes);

/* Admin */
router.use("/admin/", adminRoutes);

module.exports = router;