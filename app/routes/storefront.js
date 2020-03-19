var express = require('express');
var router = express.Router();

const storefrontController = require('../controllers/storefront')

/* GET home page. */
router.get('/', storefrontController.index);

module.exports = router;