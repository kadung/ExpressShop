const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const adminSchema = new mongoose.Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  username: { type: String, default: "" },
  password: { type: String, default: "" },
  dateAdded: { type: Date, default: new Date() },
  active: { type: Boolean, default: false },
  allowEdit: { type: Boolean, default: false }
});

adminSchema.plugin(passportLocalMongoose);
adminSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("admin", adminSchema);
