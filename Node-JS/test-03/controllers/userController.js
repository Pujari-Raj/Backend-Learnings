const User = require("../models/userModel");
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../services/auth');

//Signup function

async function handleUserSignup(req, resp) {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });

  return resp.redirect("/");
}

async function handleUserLogin(req, resp) {
    const { email, password } = req.body;
   
    const user = await User.findOne({
      email,
      password,
    });

    // console.log("user-",user);
    if (!user) {
        return resp.render("login", {
            error : "Invalid Username | password"
        })
    }

    const cookieId = uuidv4();
    setUser(cookieId, user)
    resp.cookie("useruuid", cookieId)
    return resp.redirect("/");
  }

module.exports = {
  handleUserSignup,
  handleUserLogin
};
