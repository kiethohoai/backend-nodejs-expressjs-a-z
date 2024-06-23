require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

// config template engine & static file
configViewEngine(app);

// config routes
app.use("/", webRoutes);

// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// query to database get data
connection.query(`SELECT * FROM Users u`, function (err, results, fields) {
  // console.log("🚀CHECK  fields =", fields);
  console.log("🚀CHECK  results =", results);
});

// app show
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
