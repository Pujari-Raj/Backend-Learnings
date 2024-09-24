const { getUser } = require("../services/auth");

async function restrictToLoggedinUser(req, resp, next) {
  console.log(req);

  const userUuid = req?.cookies?.useruuid;

  if (!userUuid) return resp.redirect("/login");

  const user = getUser(userUuid);

  if (!user) return resp.redirect("/login");

  req.user = user;

  next();
}

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
