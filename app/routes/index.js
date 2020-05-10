const express = require('express');

const productRoutes = require('./storefront/product');
const cartRoutes = require('./storefront/cart');
const adminRoutes = require('./admin/admin');
const customerRoutes = require('./customer/customer');

const authController = require('../controllers/auth/local');
const isLoggedIn = require('../middlewares/isLoggedIn');

const router = express.Router();

/* Authentication */
router.get("/login", authController.loginPage);
router.get("/login/admin", authController.loginPage);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

/* Registration */
router.get("/register", authController.registerPage);
router.post("/register", authController.register);

/* Storefront */
router.use("/", productRoutes);

/* Cart */
router.use("/cart/", cartRoutes);

/* Admin */
router.use("/admin/", isLoggedIn.admin, adminRoutes);
// router.use("/admin/", adminRoutes);

/* Customer */
router.use("/profile", isLoggedIn.customer, customerRoutes);

module.exports = router;