const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const counterSchema = new mongoose.Schema({
  counter: {
    type: Number,
    default: 2
  }
});

const Counter = mongoose.model("Counter", counterSchema);

const orderSchema = new mongoose.Schema({
  orderNumber: Number,
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer"
  },
  shippingAddress: {
    fullName: { type: String, default: "" },
    address: { type: String, default: "" },
    city: { type: String, default: "" },
    phone: { type: String, default: "" },
    email: { type: String, default: "" },
  },
  paymentMethod: { type: String, default: "" },
  shippingMethod: { type: String, default: "" },
  ipAddress: { type: String, default: "" },
  status: { type: String, default: "" },
  date: { type: Date, default: new Date() },
  items: [],
  subtotal: { type: Number, default: 0 },
  shipping: { type: Number, default: 0 },
  total: { type: Number, default: 0 }
});

orderSchema.pre("save", function(next) {
  Counter.findOneAndUpdate(
    {},
    { $inc: { counter: 1 } },
    { upsert: true, new: true }
  )
    .then(counter => {
      this.orderNumber = counter.counter;
      next();
    })
    .catch(console.log);
});

orderSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("order", orderSchema);
