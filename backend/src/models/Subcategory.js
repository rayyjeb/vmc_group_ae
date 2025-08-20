const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subcategory name is required"],
      trim: true,
      maxlength: [50, "Subcategory name cannot exceed 50 characters"],
    },
    description: {
      type: String,
      required: [true, "Subcategory description is required"],
      trim: true,
      maxlength: [500, "Subcategory description cannot exceed 500 characters"],
    },
    image: {
      type: String,
      required: [true, "Subcategory image is required"],
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category ID is required"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Compound index to ensure unique subcategory names within a category
subcategorySchema.index({ categoryId: 1, name: 1 }, { unique: true });
subcategorySchema.index({ slug: 1 });

// Virtual for products count
subcategorySchema.virtual("productsCount", {
  ref: "Product",
  localField: "_id",
  foreignField: "subcategory",
  count: true,
});

// Pre-save middleware to generate slug
subcategorySchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  next();
});

// Pre-save middleware to ensure category exists
subcategorySchema.pre("save", async function (next) {
  if (this.isModified("categoryId")) {
    const Category = mongoose.model("Category");
    try {
      const category = await Category.findById(this.categoryId);
      if (!category) {
        throw new Error("Category not found");
      }
    } catch (error) {
      return next(error);
    }
  }
  next();
});

module.exports = mongoose.model("Subcategory", subcategorySchema);
