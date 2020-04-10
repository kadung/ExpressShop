const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    default: ""
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: false
  },
  categories: [
    { 
      type: Schema.Types.ObjectId, 
      ref: 'category' 
    }
  ],
  images: [
    {
      src: {
        type: String,
        default: ''
      },
      alt: {
        type: String,
        default: ''
      }
    }
  ],
  options: {
    type: {
      sizes: [String],
      colors: [String]
    },
    default: {}
  },
  stock: {
    type: Number,
    default: 0
  },
  allowPublish: {
    type: Boolean,
    default: false
  }
});

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("product", productSchema);