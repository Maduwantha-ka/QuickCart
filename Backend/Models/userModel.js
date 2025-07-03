const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String, //datatype
    required: true, //validate
  },

  email: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true
  },

  age: {
    type: Number,
   required: true,
  }

});

module.exports = mongoose.model(
    "userModel", //file name
    userSchema //schema name
);
