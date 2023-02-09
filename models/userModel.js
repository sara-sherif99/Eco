const mongoose = require('mongoose');
//we need to add userImage as relative path
const userSchema = new mongoose.Schema({
  userName: 'string',
  email:'string',
  password: 'string',
  phone:'string',
  address:'string',
  gender:'string'
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;