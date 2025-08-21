const express = require("express");
const router = express.Router();
const multer = require("multer");
const { auth } = require("../middleware/auth");
const cloudinary = require("../config/cloudinary");

// Use memory storage instead of CloudinaryStorage
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  console.log("🔍 Filtering file:", {
    originalname: file.originalname,
    mimetype: file.mimetype,
    fieldname: file.fieldname
  });

  const allowedTypes = /jpeg|jpg|png|webp|gif/;
  const extname = allowedTypes.test(
    file.originalname.toLowerCase()
  );
  const mimetype = file.mimetype.startsWith("image/");

  if (mimetype && extname) {
    console.log("✅ File type allowed");
    return cb(null, true);
  } else {
    console.log("❌ File type rejected");
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024, // 10MB default
  },
  fileFilter: fileFilter,
});

// Upload single image to Cloudinary using direct approach
router.post("/image", auth, (req, res) => {
  console.log("📥 Upload request received");
  console.log("🔑 Auth user:", req.user?.email);
  
  upload.single("image")(req, res, async (err) => {
    try {
      if (err) {
        console.error("❌ Multer error:", err.message);
        
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(413).json({
            success: false,
            message: "File too large. Maximum size is 10MB",
            error: "FILE_TOO_LARGE"
          });
        }
        
        if (err.message === "Only image files are allowed!") {
          return res.status(400).json({
            success: false,
            message: "Invalid file type. Only image files are allowed.",
            error: "INVALID_FILE_TYPE"
          });
        }
        
        return res.status(400).json({
          success: false,
          message: err.message,
          error: "UPLOAD_ERROR"
        });
      }

      if (!req.file) {
        console.error("❌ No file received");
        return res.status(400).json({
          success: false,
          message: "No file uploaded",
          error: "NO_FILE"
        });
      }

      console.log("📁 File received:", {
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        bufferLength: req.file.buffer?.length
      });

      // Generate unique public ID
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const sanitizedName = req.file.originalname
        .replace(/[^a-zA-Z0-9.-]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase();
      const publicId = `image-${uniqueSuffix}-${sanitizedName}`;

      // Upload directly to Cloudinary
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            resource_type: "image",
            folder: "vmc-products",
            public_id: publicId,
            transformation: [
              {
                width: 1200,
                height: 1200,
                crop: "limit",
                quality: "auto",
                fetch_format: "auto",
              }
            ],
          },
          (error, result) => {
            if (error) {
              console.error("❌ Cloudinary upload error:", error);
              reject(error);
            } else {
              console.log("✅ Cloudinary upload successful:", {
                secure_url: result.secure_url,
                public_id: result.public_id,
                format: result.format,
                bytes: result.bytes
              });
              resolve(result);
            }
          }
        ).end(req.file.buffer);
      });

      res.json({
        success: true,
        message: "File uploaded successfully",
        data: {
          url: uploadResult.secure_url,
          public_id: uploadResult.public_id,
          secure_url: uploadResult.secure_url,
          filename: req.file.originalname,
          size: uploadResult.bytes,
          format: uploadResult.format,
          width: uploadResult.width,
          height: uploadResult.height,
        },
      });

    } catch (error) {
      console.error("💥 Server error:", error);
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: "SERVER_ERROR",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  });
});

// Upload multiple images to Cloudinary
router.post("/images", auth, (req, res) => {
  console.log("📥 Multiple upload request received");
  
  upload.array("images", 5)(req, res, async (err) => {
    try {
      if (err) {
        console.error("❌ Multer error:", err.message);
        
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(413).json({
            success: false,
            message: "One or more files are too large. Maximum size is 10MB per file",
            error: "FILE_TOO_LARGE"
          });
        }
        
        return res.status(400).json({
          success: false,
          message: err.message,
          error: "UPLOAD_ERROR"
        });
      }

      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          success: false,
          message: "No files uploaded",
          error: "NO_FILES"
        });
      }

      // Upload all files to Cloudinary
      const uploadPromises = req.files.map((file, index) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const sanitizedName = file.originalname
          .replace(/[^a-zA-Z0-9.-]/g, '')
          .replace(/\s+/g, '-')
          .toLowerCase();
        const publicId = `image-${uniqueSuffix}-${sanitizedName}`;

        return new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            {
              resource_type: "image",
              folder: "vmc-products",
              public_id: publicId,
              transformation: [
                {
                  width: 1200,
                  height: 1200,
                  crop: "limit",
                  quality: "auto",
                  fetch_format: "auto",
                }
              ],
            },
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve({
                  url: result.secure_url,
                  public_id: result.public_id,
                  secure_url: result.secure_url,
                  filename: file.originalname,
                  size: result.bytes,
                  format: result.format,
                  width: result.width,
                  height: result.height,
                });
              }
            }
          ).end(file.buffer);
        });
      });

      const uploadedImages = await Promise.all(uploadPromises);

      console.log(`✅ ${req.files.length} files uploaded successfully`);

      res.json({
        success: true,
        message: `${req.files.length} files uploaded successfully`,
        data: {
          images: uploadedImages,
          count: uploadedImages.length,
        },
      });
    } catch (error) {
      console.error("💥 Server error:", error);
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: "SERVER_ERROR",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  });
});

// Delete image from Cloudinary
router.delete("/image/:publicId", auth, async (req, res) => {
  try {
    const { publicId } = req.params;
    
    if (!publicId) {
      return res.status(400).json({
        success: false,
        message: "Public ID is required",
        error: "MISSING_PUBLIC_ID"
      });
    }

    console.log("🗑️ Deleting image:", publicId);
    
    const result = await cloudinary.uploader.destroy(publicId);
    
    console.log("🗑️ Cloudinary delete result:", result);
    
    if (result.result === "ok") {
      res.json({
        success: true,
        message: "Image deleted successfully",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Failed to delete image",
        error: "DELETE_FAILED",
        data: result,
      });
    }
  } catch (error) {
    console.error("💥 Delete error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: "SERVER_ERROR",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

module.exports = router;