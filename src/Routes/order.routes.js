const express = require("express");
const {OrderController} = require("../Controller/order.controller.js");
const router = express.Router();

router.post("/", OrderController.create);
router.get("/", OrderController.getOrders);

module.exports = router;
