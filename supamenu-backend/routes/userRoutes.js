const express = require("express");
const {
  signup,
  login,
  getAllUsers,
  getDashboard,
  logout,
  requestPasswordReset,
  resetPassword,
} = require("../controllers/userController.js");

const { authenticateToken } = require("../middleware/authMiddleware.js");
const router = express.Router();

router.get("/", getAllUsers);
router.post("/signup", signup);
router.post("/login", login);
router.get("/dashboard", authenticateToken, getDashboard);
router.post("/logout", authenticateToken, logout);
router.post("/request-password-reset", requestPasswordReset);
router.post("/reset-password", resetPassword);

module.exports = router;
