const express = require('express');
const router = express.Router();

const storefrontRoutes = require('./storefront/index');
const adminRoutes = require('./admin/index');

/* Storefront */
router.use("/", storefrontRoutes);

/* Admin */
router.use("/admin/", adminRoutes);

module.exports = router;