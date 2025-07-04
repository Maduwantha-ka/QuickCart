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

    //Data insert part

    const addUser = async (req, res, next) => {

      const { username, email, phoneNumber, age } = req.body;
      let insertUser;

      try{
        insertUser = new model({
          username,
          email,
          phoneNumber,
          age
        });

        await insertUser.save();
      }catch (err) {
        console.log(err);
      }

      //can not insert user
      if (!insertUser) {
        return res.status(500).json({ message: "Unable to add user" });
      }

      //return the inserted user
      return res.status(200).json({ insertUser });
    }

    //export the function
    exports.getAllUsers = getAllUsers;
    exports.addUser = addUser;
