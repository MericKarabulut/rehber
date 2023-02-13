
const User = require("../models/User")

const listUsers= (req, res ) => {

}

const registerUser = ((req , res) => {

  res.json({params: req.body});

    // try {
      var newUser = User.build({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        mail: req.body.mail,
        password: req.body.password,
      });
    
      newUser.save() 
    // } catch (err) {
    //   console.error(err);
    // }
})

const updateUser= (req, res ) => {

}


const deleteUser= (req, res ) => {

}

module.exports = {listUsers,registerUser, updateUser, deleteUser}
