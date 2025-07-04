const express = require('express');
const router = express.Router();

//insert Model
const user = require('../Models/userModel'); 
//insert Controller
const userControl = require('../Controllers/userControl');

//create the route paths
router.get("/", userControl.getAllUsers); //get all users
router.post("/", userControl.addUser); //add a new user
router.get("/:id", userControl.getUserById); //get user by id
router.put("/:id", userControl.UpdateUser); //update user by id
router.delete("/:id", userControl.deleteUser); //delete user by id

//export
module.exports = router;