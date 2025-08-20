const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: "deub6d5hv",
  api_key: "355523397887432",
  api_secret: process.env.CLOUDINARY_API_SECRET, // Keep this as environment variable for security
});

module.exports = cloudinary;
