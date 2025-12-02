const express = require("express");
const { ProductController } = require("../Controller/product.controller.js");

const router = express.Router();

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getOne);

module.exports = router;
