const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      productId: String,
      productName: String,
      productImageUrl: String,
      price: Number,
      quantity: Number
    }
  ]
});

module.exports = mongoose.model("cart", cartSchema);
