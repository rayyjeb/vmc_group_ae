const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const path = require("path");
require("dotenv").config();

const authRoutes = require("../src/routes/auth");
const productRoutes = require("../src/routes/products");
const categoryRoutes = require("../src/routes/categories");
const uploadRoutes = require("../src/routes/upload");
const { errorHandler } = require("../src/middleware/errorHandler");

const app = express();

// Security middleware
app.use(helmet());
app.use(compression());

// Rate limiting (commented out for debugging)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/", limiter);

// CORS configuration
app.use(
  cors({
    origin: true, // Allow all origins for now
    credentials: true,
  })
);

// Static files - serve uploaded images (fixed path)
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Health check endpoint
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "OK",
    message: "VMC Group UAE Backend is running",
    timestamp: new Date().toISOString(),
  });
});

// IMPORTANT: Register upload routes FIRST, without JSON parsing middleware
// This prevents conflicts between express.json() and multer
app.use("/api/upload", uploadRoutes);

// Now apply JSON parsing middleware to other routes that need it
app.use("/api/auth", express.json({ limit: "10mb" }));
app.use("/api/auth", express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/products", express.json({ limit: "10mb" }));
app.use("/api/products", express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/categories", express.json({ limit: "10mb" }));
app.use(
  "/api/categories",
  express.urlencoded({ extended: true, limit: "10mb" })
);

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

// 404 handler
app.use("*", (_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use(errorHandler);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });

// Export for Vercel
module.exports = app;
