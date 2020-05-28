const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
const mongoosePaginate = require("mongoose-paginate-v2");

const customerSchema = new mongoose.Schema({
  fullName: { type: String, default: "" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  dateAdded: { type: Date, default: new Date() },
  address: { type: String, default: "" },
  city: { type: String, default: "" },
  phone: { type: String, default: "" },
});

// Create hash password before save
customerSchema.pre(
  'save',
  function (next) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
    next();
  }
)

// Valitdate password
customerSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

customerSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("customer", customerSchema);
