const express = require("express");
const router = express.Router();

// config routes
router.get("/", (req, res) => {
  res.render("home.ejs");
});

router.get("/home", (req, res) => {
  res.render("home.ejs");
});

router.get("/users", (req, res) => {
  res.send("Users Router by HHK");
});

module.exports = router;
