const express = require('express');
const router = express.Router();

const cartController = require('../../controllers/storefront/cart');

/* View cart */
router.get("/", cartController.get);

/* Add cart */
router.post("/add", cartController.add);

/* Delete cart item */
router.delete("/delete", cartController.delete)

module.exports = router;