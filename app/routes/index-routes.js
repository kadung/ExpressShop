const express = require('express');
const router = express.Router();

const storefrontRoutes = require('./storefront');
const adminRoutes = require('./admin');

/* Storefront */
router.use("/", storefrontRoutes);

/* Admin */
router.use("/admin/", adminRoutes);

module.exports = router;