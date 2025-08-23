const express = require("express");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const AdminUser = require("../models/AdminUser");
const { auth } = require("../middleware/auth");

const router = express.Router();

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

// @route   POST /api/auth/login
// @desc    Admin login
// @access  Public
router.post(
  "/login",
  [
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      const { email, password } = req.body;

      // Check if user exists
      const user = await AdminUser.findOne({ email, isActive: true });

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }


      const isMatch = await user.comparePassword(password);

      try {
        const bcrypt = require("bcryptjs");
        const manualMatch = await bcrypt.compare(password, user.password);
      } catch (bcryptError) {
      }

      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      // Update last login
      user.lastLogin = new Date();
      await user.save();

      // Generate token
      const token = generateToken(user._id);

      res.json({
        success: true,
        message: "Login successful",
        data: {
          user: user.toPublicJSON(),
          token,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error during login",
      });
    }
  }
);

// @route   GET /api/auth/me
// @desc    Get current admin user
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        user: req.user,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// @route   POST /api/auth/logout
// @desc    Admin logout (client-side token removal)
// @access  Private
router.post("/logout", auth, async (req, res) => {
  try {
    // In a real application, you might want to blacklist the token
    // For now, we'll just return success and let the client remove the token
    res.json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error during logout",
    });
  }
});

// Temporary route to reset admin password (remove after use)
router.post("/reset-admin-password", async (req, res) => {
  try {
    const adminUser = await AdminUser.findOne({ email: "admin@vmcgroup.com" });
    if (!adminUser) {
      return res.status(404).json({ message: "Admin user not found" });
    }

    // Set new password
    adminUser.password = "admin123";
    await adminUser.save();

    res.json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Password reset failed" });
  }
});

// Temporary route to check database state (remove after debugging)
router.get("/debug-users", async (req, res) => {
  try {
    const users = await AdminUser.find({}).select("-password");

    const adminUser = await AdminUser.findOne({ email: "admin@vmcgroup.com" });
    if (adminUser) {
    } else {
    }

    res.json({
      userCount: users.length,
      users: users,
      adminUserExists: !!adminUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Debug failed", error: error.message });
  }
});

// Temporary route to completely reset database (remove after use)
router.post("/reset-database", async (req, res) => {
  try {
    
    // Clear all collections
    await Promise.all([
      AdminUser.deleteMany({}),
      require("../models/Category").deleteMany({}),
      require("../models/Subcategory").deleteMany({}),
      require("../models/Product").deleteMany({}),
    ]);


    // Create fresh admin user
    const bcrypt = require("bcryptjs");
    const adminPassword = await bcrypt.hash("admin123", 12);

    const adminUser = await AdminUser.create({
      email: "admin@vmcgroup.com",
      name: "Admin User",
      password: adminPassword,
      role: "admin",
      isActive: true,
    });

    res.json({
      message: "Database reset successfully",
      adminUser: {
        email: adminUser.email,
        name: adminUser.name,
        role: adminUser.role,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Database reset failed", error: error.message });
  }
});

module.exports = router;
