const express = require('express');
const router = express.Router();

const cartController = require('../../controllers/storefront/cart');

/* View cart */
router.get("/", cartController.get);

/* Add cart item */
router.post("/add", cartController.add);

/* Delete cart item */
router.delete("/delete", cartController.delete);

/* Checkout cart */
router.get("/checkout", cartController.getCheckout)
      .post("/checkout", cartController.postCheckout);

module.exports = router;