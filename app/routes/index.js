const express = require('express');
const router = express.Router();

const productRoutes = require('./storefront/product');
const cartRoutes = require('./storefront/cart');
const adminRoutes = require('./admin/admin');

/* Storefront */
router.use("/", productRoutes);

/* Cart */
router.use("/cart/", cartRoutes);

/* Admin */
router.use("/admin/", adminRoutes);

module.exports = router;