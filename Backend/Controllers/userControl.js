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

    //user get by id

     const getUserById = async (req, res, next) => {

       const userId = req.params.id;
       let user;

       try {
         user = await model.findById(userId);
       } catch (err) {
         console.log(err);
       }

        //can not find user
       if (!user) {
         return res.status(404).json({ message: "User not found" });
       }
        //return the user
        return res.status(200).json({ user });
     }

     //update user by id

      const UpdateUser = async (req, res, next) => {
        const userId = req.params.id;
        const { username, email, phoneNumber, age } = req.body;
        let users;

        try {
          users = await model.findByIdAndUpdate(userId, {
            username,
            email,
            phoneNumber,
            age
          });
          users = await users.save();
        } catch (err) {
          console.log(err);
        }

        //can not find user
        if (!users) {
          return res.status(404).json({ message: "unable to update user" });
        }

        //return the user
        return res.status(200).json({ users });
      }

      //delete user by id
      const deleteUser = async (req, res, next) => {
        const userId = req.params.id;
        let deleteUser;

        try {
          deleteUser = await model.findByIdAndDelete(userId);
        } catch (err) {
          console.log(err);
        }

        //can not find user
        if (!deleteUser) {
          return res.status(404).json({ message: "Can not delete user" });
        }

        //return the user
        return res.status(200).json({ deleteUser});
      }

    //export the function
    exports.getAllUsers = getAllUsers;
    exports.addUser = addUser;
    exports.getUserById = getUserById;
    exports.UpdateUser = UpdateUser;
    exports.deleteUser = deleteUser;
