// Password: sample

const express = require('express');
const mongoose = require('mongoose');

const app = express();

//MiddleWare
app.use("/",(req,res,next)=>{
    res.send("Middleware is working");
})

mongoose.connect("mongodb+srv://Maduwantha:sample@quickcart.0gi7oq0.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));