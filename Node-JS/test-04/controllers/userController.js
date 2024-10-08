const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../services/auth");

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

// handleUserLogin function
async function handleUserLogin(req, resp) {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
    password,
  });

  // console.log("user-",user);
  if (!user) {
    return resp.render("login", {
      error: "Invalid Username | password",
    });
  }

  // generating cookie & setting cookie
  const token = setUser(user);
  resp.cookie("useruuid", token, {HttpOnly : true, secure: true});
  return resp.redirect("/");
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
