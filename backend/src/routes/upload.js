const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { auth } = require("../middleware/auth");

// Test endpoint
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Upload endpoint is working",
    timestamp: new Date().toISOString(),
  });
});

// Upload single image
router.post("/image", auth, upload.single("image"), async (req, res) => {
  try {
    console.log("📤 Upload request received");
    console.log(" File object:", req.file);
    console.log("👤 User:", req.user);

    if (!req.file) {
      console.log("❌ No file in request");
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    console.log("✅ File received successfully");
    console.log(" File details:", {
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      mimetype: req.file.mimetype,
    });

    // Generate the URL for the uploaded file
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    const fileUrl = `${baseUrl}/uploads/${req.file.filename}`;

    res.json({
      success: true,
      message: "File uploaded successfully",
      data: {
        url: fileUrl,
        public_id: req.file.filename,
        secure_url: fileUrl,
        filename: req.file.filename,
        size: req.file.size,
      },
    });
  } catch (error) {
    console.error(" Upload route error:", error);
    console.error("💥 Error stack:", error.stack);
    res.status(500).json({
      success: false,
      error: "Server Error",
      details: error.message,
    });
  }
});

module.exports = router;
