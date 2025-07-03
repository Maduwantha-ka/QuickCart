// tell the computer what to do in the controlller file

const model = require('../Models/userModel');

//create display function

const getAllUsers = async (req, res, next) => {

    //assingn a variable name
   let User;

   //return all the data in the database
   //check weather data available
    try {
      User = await model.find();
    }catch (err) {
      console.log(err);
    }

    //can not find users
    if (!User) {
        return res.status(404).json({ message: "Users not found" });
    }

    //return the data
    return res.status(200).json({ User });
    };

    //export the function
    exports.getAllUsers = getAllUsers;
