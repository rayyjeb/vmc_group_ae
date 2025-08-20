const express = require("express");
const { body, validationResult, query } = require("express-validator");
const Category = require("../models/Category");
const { auth, adminOnly } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

// @route   GET /api/categories
// @desc    Get all categories
// @access  Public
router.get("/", async (req, res) => {
  try {
    console.log(" Categories request received");
    console.log("👤 User:", req.user);

    const categories = await Category.find({}).sort({ name: 1 });
    console.log("✅ Found categories:", categories.length);

    res.json({
      success: true,
      message: "Categories retrieved successfully",
      data: categories,
    });
  } catch (error) {
    console.error("❌ Categories error:", error);
    res.status(500).json({
      success: false,
      message: "Error retrieving categories",
      error: error.message,
    });
  }
});

// @route   GET /api/categories/:id
// @desc    Get single category with subcategories
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Manually fetch subcategories for this category
    const Subcategory = require("../models/Subcategory");
    const subcategories = await Subcategory.find({
      categoryId: category._id,
    }).select("name description image");

    const categoryWithSubcategories = {
      ...category.toObject(),
      subcategories,
    };

    res.json({
      success: true,
      data: { category: categoryWithSubcategories },
    });
  } catch (error) {
    console.error("Get category error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching category",
    });
  }
});
// @route   POST /api/categories
// @desc    Create new category
// @access  Private (Admin only)
router.post(
  "/",
  auth,
  adminOnly,
  upload.single("image"),
  [
    body("name").trim().isLength({ min: 1, max: 50 }),
    body("description").trim().isLength({ min: 1, max: 500 }),
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

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Category image is required",
        });
      }

      const categoryData = {
        ...req.body,
        image: `/uploads/${req.file.filename}`,
      };

      const category = new Category(categoryData);
      await category.save();

      res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: { category },
      });
    } catch (error) {
      console.error("Create category error:", error);
      res.status(500).json({
        success: false,
        message: "Server error while creating category",
      });
    }
  }
);

// @route   PUT /api/categories/:id
// @desc    Update category
// @access  Private (Admin only)
router.put(
  "/:id",
  auth,
  adminOnly,
  upload.single("image"),
  [
    body("name").optional().trim().isLength({ min: 1, max: 50 }),
    body("description").optional().trim().isLength({ min: 1, max: 500 }),
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

      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }

      const updateData = { ...req.body };

      if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`;
      }

      const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true, runValidators: true }
      );

      res.json({
        success: true,
        message: "Category updated successfully",
        data: { category: updatedCategory },
      });
    } catch (error) {
      console.error("Update category error:", error);
      res.status(500).json({
        success: false,
        message: "Server error while updating category",
      });
    }
  }
);

// @route   DELETE /api/categories/:id
// @desc    Delete category
// @access  Private (Admin only)
router.delete("/:id", auth, adminOnly, async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Check if category has subcategories or products
    const Subcategory = require("../models/Subcategory");
    const Product = require("../models/Product");

    const [subcategoriesCount, productsCount] = await Promise.all([
      Subcategory.countDocuments({ categoryId: req.params.id }),
      Product.countDocuments({ category: req.params.id }),
    ]);

    if (subcategoriesCount > 0 || productsCount > 0) {
      return res.status(400).json({
        success: false,
        message:
          "Cannot delete category with existing subcategories or products",
      });
    }

    await Category.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("Delete category error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting category",
    });
  }
});

module.exports = router;
