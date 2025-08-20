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
      console.log("🔐 Login attempt received:", { email: req.body.email });

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("❌ Validation errors:", errors.array());
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      const { email, password } = req.body;
      console.log("📧 Looking for user with email:", email);

      // Check if user exists
      const user = await AdminUser.findOne({ email, isActive: true });
      console.log(" User found:", user ? "Yes" : "No");

      if (!user) {
        console.log("❌ User not found or inactive");
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      // Debug: Check what's stored
      console.log(" User details:", {
        email: user.email,
        hasPassword: !!user.password,
        passwordLength: user.password ? user.password.length : 0,
        isActive: user.isActive,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });

      // Check password
      console.log("🔑 Comparing passwords...");
      console.log("📝 Input password:", password);
      console.log("💾 Stored password hash:", user.password);

      const isMatch = await user.comparePassword(password);
      console.log("🔐 Password match:", isMatch);

      // Debug: Test password comparison manually
      try {
        const bcrypt = require("bcryptjs");
        const manualMatch = await bcrypt.compare(password, user.password);
        console.log("🔍 Manual bcrypt comparison:", manualMatch);
      } catch (bcryptError) {
        console.error("❌ Manual bcrypt comparison failed:", bcryptError);
      }

      if (!isMatch) {
        console.log("❌ Password mismatch");
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      console.log("✅ Login successful for user:", user.email);

      // Update last login
      user.lastLogin = new Date();
      await user.save();

      // Generate token
      const token = generateToken(user._id);
      console.log("🎫 Token generated successfully");

      res.json({
        success: true,
        message: "Login successful",
        data: {
          user: user.toPublicJSON(),
          token,
        },
      });
    } catch (error) {
      console.error("💥 Login error:", error);
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
    console.error("Get user error:", error);
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
    console.error("Logout error:", error);
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

    console.log("✅ Admin password reset successfully");
    res.json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Password reset error:", error);
    res.status(500).json({ message: "Password reset failed" });
  }
});

// Temporary route to check database state (remove after debugging)
router.get("/debug-users", async (req, res) => {
  try {
    const users = await AdminUser.find({}).select("-password");
    console.log("📊 All users in database:", users);

    const adminUser = await AdminUser.findOne({ email: "admin@vmcgroup.com" });
    if (adminUser) {
      console.log("👤 Admin user found:", {
        email: adminUser.email,
        hasPassword: !!adminUser.password,
        passwordLength: adminUser.password ? adminUser.password.length : 0,
        isActive: adminUser.isActive,
        role: adminUser.role,
        createdAt: adminUser.createdAt,
        updatedAt: adminUser.updatedAt,
      });
    } else {
      console.log("❌ No admin user found");
    }

    res.json({
      userCount: users.length,
      users: users,
      adminUserExists: !!adminUser,
    });
  } catch (error) {
    console.error("Debug error:", error);
    res.status(500).json({ message: "Debug failed", error: error.message });
  }
});

// Temporary route to completely reset database (remove after use)
router.post("/reset-database", async (req, res) => {
  try {
    console.log("🗑️  Clearing all data...");

    // Clear all collections
    await Promise.all([
      AdminUser.deleteMany({}),
      require("../models/Category").deleteMany({}),
      require("../models/Subcategory").deleteMany({}),
      require("../models/Product").deleteMany({}),
    ]);

    console.log("✅ Database cleared");

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

    console.log("✅ Fresh admin user created:", adminUser.email);

    res.json({
      message: "Database reset successfully",
      adminUser: {
        email: adminUser.email,
        name: adminUser.name,
        role: adminUser.role,
      },
    });
  } catch (error) {
    console.error("Database reset error:", error);
    res
      .status(500)
      .json({ message: "Database reset failed", error: error.message });
  }
});

module.exports = router;
