const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World With ExpressJS");
});

app.get("/users", (req, res) => {
  res.send("Users Router");
});

app.get("/home", (req, res) => {
  res.send("Home Router");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
