const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");
const path = require("path");

// Test Cloudinary connection
const testCloudinaryConnection = async () => {
  try {
    const result = await cloudinary.api.ping();
    console.log("✅ Cloudinary connection test:", result);
    return true;
  } catch (error) {
    console.error("❌ Cloudinary connection failed:", error.message);
    return false;
  }
};

// Test connection on startup
testCloudinaryConnection();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "vmc-products",
    allowed_formats: ["jpg", "jpeg", "png", "webp", "gif"],
    transformation: [
      {
        width: 1200,
        height: 1200,
        crop: "limit",
        quality: "auto",
        fetch_format: "auto",
      }
    ],
    public_id: (req, file) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const sanitizedName = file.originalname
        .replace(/[^a-zA-Z0-9.-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .toLowerCase();
      const publicId = `${file.fieldname}-${uniqueSuffix}-${sanitizedName}`;
      console.log("🏷️ Generated public_id:", publicId);
      return publicId;
    },
  },
});

const fileFilter = (req, file, cb) => {
  console.log("🔍 Filtering file:", {
    originalname: file.originalname,
    mimetype: file.mimetype,
    fieldname: file.fieldname
  });

  const allowedTypes = /jpeg|jpg|png|webp|gif/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
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
    files: 5, // Maximum 5 files
  },
  fileFilter: fileFilter,
});

module.exports = upload;