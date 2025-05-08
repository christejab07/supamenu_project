const express = require("express");
const router = express.Router();
const {getAllClients, getClientById, createClient, updateClient, deleteClient} = require("../controllers/clientController.js");
const { authenticateToken } = require("../middleware/authMiddleware.js");

router.post("/add", authenticateToken, createClient);
router.get("/all", authenticateToken, getAllClients);
router.get("/:id", authenticateToken, getClientById);
router.put("/:id", authenticateToken, updateClient);
router.delete("/:id", authenticateToken, deleteClient);

module.exports = router;
