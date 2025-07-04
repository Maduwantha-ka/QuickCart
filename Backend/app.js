// Password: sample

const express = require('express');
const mongoose = require('mongoose');
const route = require('./Routes/userRoutes'); // Importing the user routes

const app = express();

//MiddleWare
app.use(express.json()); // To parse JSON bodies
app.use("/User", route);


mongoose.connect("mongodb+srv://Maduwantha:sample@quickcart.0gi7oq0.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));