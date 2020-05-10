const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
const mongoosePaginate = require("mongoose-paginate-v2");

const customerSchema = new mongoose.Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  token: { type: String, default: "" },
  dateAdded: { type: Date, default: new Date() },
  addresses: [
    {
      firstName: { type: String, default: "" },
      lastName: { type: String, default: "" },
      address1: { type: String, default: "" },
      address2: { type: String, default: "" },
      city: { type: String, default: "" },
      state: { type: String, default: "" },
      zip: { type: String, default: "" },
      phone: { type: String, default: "" },
      default: { type: Boolean, default: false }
    }
  ]
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
