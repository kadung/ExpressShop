const express = require('express');
const router = express.Router();

const customerController = require('../../controllers/customer/customer');

/* Customer profile */
router.get("/", customerController.getProfile);

module.exports = router;