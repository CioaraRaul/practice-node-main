const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path"); // Importing the utility to get the root directory

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html")); // sends a response to the client
});

module.exports = router;
