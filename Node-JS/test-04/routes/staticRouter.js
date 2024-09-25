const express = require("express");
const URL = require("../models/urlModel");
const router = express.Router();

router.get("/", async (req, resp) => {
  if (!req.user) return resp.redirect("/login");
  const allUrls = await URL.find({ createdBy: req.user._id });
  return resp.render("home", {
    urls: allUrls,
  });
});

router.get("/signup", (req, resp) => {
  return resp.render("signup");
});

router.get("/login", (req, resp) => {
  return resp.render("Login");
});

module.exports = router;
