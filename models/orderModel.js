const mongoose = require('mongoose');
//we need to add productImage as relative path
const orderSchema = new mongoose.Schema({
  productName: 'string',
  productPrice:'number',
  productDescription: 'string',
  productCategory:'string',
  orderStatus:'string',
  orderDate:'date',
  orderRequester:'string'
});

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;