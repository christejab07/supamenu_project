const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const blacklist = new Set();

// signup controller
const signup = async (req, res) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[+\d]?\d{10,15}$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  // Validate phone number
  if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
    return res.status(400).json({
      error:
        "Invalid phone number format. Use digits only, optionally starting with '+'.",
    });
  }
  // validate password
  if (password.length < 8 || !/\d/.test(password)) {
    return res.status(400).json({
      error: "Password must be at least 8 characters and include a number.",
    });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );
    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        phoneNumber: newUser.phoneNumber,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error during signup" + error.message });
  }
};

// login controller
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) return res.status(400).json({ error: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ error: "Email doesn't match the password given." });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Error during login" + error.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users: " + error.message });
  }
};

// Dashboard controller
const getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching user data: " + error.message });
  }
};

// Logout controller
const logout = (req, res) => {
  try {
    const token = req.header("Authorization"); // Extract the token from the Authorization header
    if (!token) {
      return res.status(400).json({ error: "Token is required for logout." });
    }

    // Add the token to the blacklist
    blacklist.add(token);

    res.status(200).json({ message: "Logout successful!" });
  } catch (error) {
    res.status(500).json({ error: "Error during logout: " + error.message });
  }
};

// Request password reset controller
const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ error: "User with this email does not exist" });
    }

    // Generate reset token
    const resetToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    // In a real application, you would send this token via email
    // For this implementation, we'll just return it in the response
    res.status(200).json({
      message: "Password reset link generated successfully",
      resetToken,
      // In production, don't send the token directly in the response
      // Instead, send an email with a link containing the token
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error requesting password reset: " + error.message });
  }
};

// Reset password controller
const resetPassword = async (req, res) => {
  const { password, confirmPassword } = req.body;
  const token = req.header("Authorization");

  // Validate token
  if (!token) {
    return res.status(401).json({
      error: "Reset token is required",
    });
  }

  // Validate inputs
  if (!password || !confirmPassword) {
    return res.status(400).json({
      error: "Password and confirm password are required",
    });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({
      error: "Passwords do not match",
    });
  }

  // Validate password strength
  if (password.length < 8 || !/\d/.test(password)) {
    return res.status(400).json({
      error: "Password must be at least 8 characters and include a number",
    });
  }

  try {
    // Verify token and extract user information
    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );

    // Check if user exists
    const user = await User.findOne({ _id: decoded.id, email: decoded.email });
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    // Add the token to blacklist to invalidate it
    blacklist.add(token);

    res.status(200).json({
      message: "Password has been reset successfully",
    });
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
    res.status(500).json({
      error: "Error resetting password: " + error.message,
    });
  }
};

module.exports = {
  signup,
  login,
  getAllUsers,
  getDashboard,
  logout,
  requestPasswordReset,
  resetPassword,
  blacklist,
};
