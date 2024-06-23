require("dotenv").config();
const express = require("express");
const { hostname } = require("os");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// config template engine
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// config static files
app.use(express.static(path.join(__dirname, "public")));

// config routes
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/users", (req, res) => {
  res.send("Users Router by HHK");
});

// app show
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
