const mongoose = require('mongoose');

const Customer = mongoose.model('customer', {
  name: String,
  email: String,
  phone: String,
  starsAmount: Number
})

module.exports = Customer;