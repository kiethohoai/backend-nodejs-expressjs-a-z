const express = require("express");
const router = express.Router();
const { getHomepage, getUsersPage } = require("../controllers/homeController");

// config routes
router.get("/", getHomepage);
router.get("/home", getHomepage);
router.get("/users", getUsersPage);

module.exports = router;
