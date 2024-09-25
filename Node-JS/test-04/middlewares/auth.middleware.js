const { getUser } = require("../services/auth");

// restrictToLoggedinUser function (checking if user's cookie is present in request object)
async function restrictToLoggedinUser(req, resp, next) {
  console.log(req);

  // (checking if user's cookie is present in request object)
  const userUuid = req?.cookies?.useruuid;

  if (!userUuid) return resp.redirect("/login");

  const user = getUser(userUuid);

  if (!user) return resp.redirect("/login");

  req.user = user;

  next();
}

// checkAuth(it checks if user is logged in and attaches the user object to request object)
async function checkAuth(req, resp, next) {
  const userUuid = req?.cookies?.useruuid;

  const user = getUser(userUuid);
  req.user = user;

  next();
}

module.exports = {
  restrictToLoggedinUser,
  checkAuth,
};
