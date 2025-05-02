const jwt = require ('jsonwebtoken');
const {blacklist} = require('../controllers/userController.js');
/**
 * Middleware to authenticate and verify the JWT token.
 * Ensures that the token is valid and not blacklisted.
 */
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization"); // Extract the token from the Authorization header

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  // Check if the token is in the blacklist
  if (blacklist.has(token)) {
    return res.status(403).json({ error: "The token you provided has already been used." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(403).json({ error: "Invalid or expired token." });
  }
};

module.exports = { authenticateToken };
