const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
const mongoosePaginate = require('mongoose-paginate-v2');

const adminSchema = new mongoose.Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  dateAdded: { type: Date, default: new Date() },
  active: { type: Boolean, default: false },
  allowEdit: { type: Boolean, default: false }
});

// Create hash password before save
adminSchema.pre(
  'save',
  function (next) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
    next();
  }
)

// Valitdate password
adminSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

adminSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("admin", adminSchema);
