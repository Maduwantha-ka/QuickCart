const express = require('express');
const router = express.Router();

//insert Model
const user = require('../Models/userModel'); 
//insert Controller
const userControl = require('../Controllers/userControl');

//create the route paths
router.get("/", userControl.getAllUsers); //get all users
router.post("/", userControl.addUser); //add a new user

//export
module.exports = router;