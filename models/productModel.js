const mongoose = require('mongoose');
//we need to add productImage as relative path
const productSchema = new mongoose.Schema({
  name: 'string',
  price:'number',
  description: 'string',
  category:'string',
  inStock:'boolean'
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;