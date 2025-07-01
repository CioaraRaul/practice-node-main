const path = require("path");
const express = require("express");

const rootDir = require("../utils/path"); // Importing the utility to get the root directory

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html")); // sends a response to the client
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
