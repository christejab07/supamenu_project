const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController.js");
const {authenticateToken} = require("../middleware/authMiddleware.js");

router.post("/create", authenticateToken, orderController.createOrder);
router.get("/:id", authenticateToken, orderController.getOrderById);

module.exports = router;
