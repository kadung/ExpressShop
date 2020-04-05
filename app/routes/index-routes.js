const express = require('express');
const router = express.Router();

const productRoutes = require('./storefront/product');
const adminRoutes = require('./admin/index');

/* Storefront */
router.use("/", productRoutes);

/* Admin */
router.use("/admin/", adminRoutes);

module.exports = router;