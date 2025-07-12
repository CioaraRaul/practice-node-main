const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const { getAddProduct } = require("../controllers/admin");
const products = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", getAddProduct);

router.get("/products", products.getProducts);
// /admin/add-product => POST
router.post("/add-product", products.postAddProduct);

module.exports = router;
