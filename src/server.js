require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const webRoutes = require("./routes/web");

// config template engine & static file
configViewEngine(app);

// config routes
app.use("/", webRoutes);

// app show
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
