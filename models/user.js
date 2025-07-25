const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Export the model
module.exports = mongoose.model('User', userSchema);