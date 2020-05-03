const express = require('express');


const productRoutes = require('./storefront/product');
const cartRoutes = require('./storefront/cart');
const adminRoutes = require('./admin/admin');

const adminAuth = require('../controllers/auth/admin');
const auth = require('../middlewares/auth');

const router = express.Router();

/* Authentication */
router.get("/login/admin", adminAuth.loginPage);
router.post("/login/admin", adminAuth.login);

/* Storefront */
router.use("/", productRoutes);

/* Cart */
router.use("/cart/", cartRoutes);

/* Admin */
router.use("/admin/", auth.isLogged, adminRoutes);

module.exports = router;