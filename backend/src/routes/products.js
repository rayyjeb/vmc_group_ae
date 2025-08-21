const express = require("express");
const { body, validationResult, query } = require("express-validator");
const Product = require("../models/Product");
const { auth, adminOnly } = require("../middleware/auth");
const upload = require("../middleware/upload");

const router = express.Router();

// @route   GET /api/products
// @desc    Get all products with filtering and pagination
// @access  Public
router.get(
  "/",
  [
    query("page").optional().isInt({ min: 1 }),
    query("limit").optional().isInt({ min: 1, max: 100 }),
    query("category").optional().isMongoId(),

    query("featured").optional().isBoolean(),
    query("search").optional().isString(),
    query("sort").optional().isIn(["name", "rating", "createdAt"]),
    query("order").optional().isIn(["asc", "desc"]),
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

      const {
        page = 1,
        limit = 20,
        category,

        featured,
        search,
        sort = "createdAt",
        order = "desc",
      } = req.query;

      // Build filter object
      const filter = {};
      if (category) filter.category = category;

      if (featured !== undefined) filter.featured = featured === "true";
      if (search) {
        filter.$text = { $search: search };
      }

      // Build sort object
      const sortObj = {};
      sortObj[sort] = order === "asc" ? 1 : -1;

      // Execute query with pagination
      const skip = (page - 1) * limit;

      const [products, total] = await Promise.all([
        Product.find(filter)
          .populate("category", "name")

          .sort(sortObj)
          .skip(skip)
          .limit(parseInt(limit)),
        Product.countDocuments(filter),
      ]);

      // Transform the products to include id field
      const transformedProducts = products.map((product) => {
        const productObj = product.toObject();
        return {
          ...productObj,
          id: productObj._id.toString(),
          rating: productObj.rating || 0, // Add default rating if missing
        };
      });

      const totalPages = Math.ceil(total / limit);

      res.json({
        success: true,
        data: {
          products: transformedProducts,
          pagination: {
            currentPage: parseInt(page),
            totalPages,
            totalItems: total,
            itemsPerPage: parseInt(limit),
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
          },
        },
      });
    } catch (error) {
      console.error("Get products error:", error);
      res.status(500).json({
        success: false,
        message: "Server error while fetching products",
      });
    }
  }
);

// @route   GET /api/products/:id
// @desc    Get single product
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "category",
      "name description image"
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Transform the product to include id field
    const productObj = product.toObject();
    const transformedProduct = {
      ...productObj,
      id: productObj._id.toString(),
      rating: productObj.rating || 0, // Add default rating if missing
    };

    res.json({
      success: true,
      data: { product: transformedProduct },
    });
  } catch (error) {
    console.error("Get product error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching product",
    });
  }
});

// @route   POST /api/products
// @desc    Create new product
// @access  Private (Admin only)
router.post(
  "/",
  auth,
  adminOnly,
  express.json({ limit: "10mb" }), // Change to JSON parsing
  [
    body("name").trim().isLength({ min: 1, max: 100 }),
    body("description").trim().isLength({ min: 1, max: 1000 }),
    body("category").isMongoId(),
    body("image").notEmpty().withMessage("Product image is required"), // Add image validation
    body("stock").isInt({ min: 0 }),
    body("featured").optional().isBoolean(),
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

      if (!req.body.image) {
        return res.status(400).json({
          success: false,
          message: "Product image is required",
        });
      }

      const productData = {
        ...req.body,
        stock: parseInt(req.body.stock),
        featured: req.body.featured === "true",
      };

      const product = new Product(productData);
      await product.save();

      const populatedProduct = await Product.findById(product._id).populate(
        "category",
        "name"
      );

      res.status(201).json({
        success: true,
        message: "Product created successfully",
        data: { product: populatedProduct },
      });
    } catch (error) {
      console.error("Create product error:", error);
      res.status(500).json({
        success: false,
        message: "Server error while creating product",
      });
    }
  }
);

// @route   PUT /api/products/:id
// @desc    Update product
// @access  Private (Admin only)
router.put(
  "/:id",
  auth,
  adminOnly,
  express.urlencoded({ extended: true, limit: "10mb" }), // Add this line
  upload.single("image"),
  [
    body("name").optional().trim().isLength({ min: 1, max: 100 }),
    body("description").optional().trim().isLength({ min: 1, max: 1000 }),
    body("category").optional().isMongoId(),

    body("stock").optional().isInt({ min: 0 }),
    body("featured").optional().isBoolean(),
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

      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      const updateData = { ...req.body };

      // Handle image update
      if (req.file) {
        updateData.image = `/uploads/${req.file.filename}`;
      }

      // Parse numeric fields
      if (updateData.stock) updateData.stock = parseInt(updateData.stock);
      if (updateData.featured !== undefined) {
        updateData.featured = updateData.featured === "true";
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true, runValidators: true }
      ).populate("category", "name");

      res.json({
        success: true,
        message: "Product updated successfully",
        data: { product: updatedProduct },
      });
    } catch (error) {
      console.error("Update product error:", error);
      res.status(500).json({
        success: false,
        message: "Server error while updating product",
      });
    }
  }
);

// @route   PATCH /api/products/:id
// @desc    Partially update product (JSON only)
// @access  Private (Admin only)
router.patch(
  "/:id",
  auth,
  adminOnly,
  express.json({ limit: "10mb" }),
  [
    body("name").optional().trim().isLength({ min: 1, max: 100 }),
    body("description").optional().trim().isLength({ min: 1, max: 1000 }),
    body("category").optional().isMongoId(),
    body("stock").optional().isInt({ min: 0 }),
    body("featured").optional().isBoolean(),
    body("image").optional().isString(), // Accept base64 or URL string
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

      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      // Only include fields that are actually provided in the request
      const updateData = {};
      const allowedFields = ['name', 'description', 'category', 'stock', 'featured', 'image'];
      
      allowedFields.forEach(field => {
        if (req.body.hasOwnProperty(field)) {
          updateData[field] = req.body[field];
        }
      });

      // Parse numeric fields if provided
      if (updateData.hasOwnProperty('stock')) {
        updateData.stock = parseInt(updateData.stock);
      }

      // Ensure boolean conversion for featured if provided
      if (updateData.hasOwnProperty('featured')) {
        updateData.featured = Boolean(updateData.featured);
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { $set: updateData },
        { new: true, runValidators: true }
      ).populate("category", "name");

      // Transform the product to include id field
      const productObj = updatedProduct.toObject();
      const transformedProduct = {
        ...productObj,
        id: productObj._id.toString(),
        rating: productObj.rating || 0,
      };

      res.json({
        success: true,
        message: "Product updated successfully",
        data: { product: transformedProduct },
      });
    } catch (error) {
      console.error("Patch product error:", error);
      res.status(500).json({
        success: false,
        message: "Server error while updating product",
      });
    }
  }
);

// @route   DELETE /api/products/:id
// @desc    Delete product
// @access  Private (Admin only)
router.delete("/:id", auth, adminOnly, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete product error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting product",
    });
  }
});

module.exports = router;
