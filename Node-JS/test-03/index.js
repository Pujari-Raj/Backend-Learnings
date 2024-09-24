const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { connectToMongoDB } = require("./connection");

const urlRoute = require("./routes/urlRoutes");
const URL = require("./models/urlModel");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/userRouter");
const {
  restrictToLoggedinUser,
  checkAuth,
} = require("./middlewares/auth.middleware");
const app = express();

const PORT = 8080;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("Error Connecting MongoDB"));

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/test", async (req, resp) => {
  const allUrls = await URL.find({});
  return resp.render("home", {
    urls: allUrls,
  });
});

app.use("/url", restrictToLoggedinUser, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

app.get("/:shortId", async (req, resp) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    },
    { new: true }
  );

  if (!entry) {
    return resp.status(404).send("URL Not Found!!!");
  }

  resp.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
