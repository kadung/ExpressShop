const express = require('express');
const router = express.Router();

const adminController = require('../../controllers/admin/admin');

/* Admin login */
router.get("/home/", adminController.home);

module.exports = router;