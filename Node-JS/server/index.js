const express = require("express");

/**
 * In this file we will be writing code to create our server. First we’re using 
 * "require" to bring in the "express" module. And then we define instance of our
 * Express application by using express().
 */

const app = express();

app.get("/", (req, res) => {
  return res.send("HomePage");
})

app.get("/about", (req, res) => {
  return res.send("AboutPage");
})

/**
 * Now we’ve to tell our Express.js application to start listening for incoming 
 * connections on a specified port(8080).
 */

app.listen(8080, () => {
  console.log("Server started without any errors");
});
