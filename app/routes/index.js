const express = require('express');
const connectEnsureLogin = require('connect-ensure-login');

const productRoutes = require('./storefront/product');
const cartRoutes = require('./storefront/cart');
const adminRoutes = require('./admin/admin');

const adminLogin = require('../controllers/admin/login');

const router = express.Router();

/* Storefront */
router.use("/", productRoutes);

/* Cart */
router.use("/cart/", cartRoutes);

/* Admin */
router.get("/admin/login", adminLogin.loginPage);
router.post("/admin/login", adminLogin.login);
router.use("/admin/",connectEnsureLogin.ensureLoggedIn(), adminRoutes);

module.exports = router;