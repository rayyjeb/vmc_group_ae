const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const AdminUser = require("../models/AdminUser");
const Category = require("../models/Category");
const Product = require("../models/Product");

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/vmc_group_uae"
    );
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    await Promise.all([
      AdminUser.deleteMany({}),
      Category.deleteMany({}),
      Product.deleteMany({}),
    ]);
    console.log("🧹 Cleared existing data");

    // Create default admin user
    const adminPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD || "admin123",
      12
    );
    const adminUser = await AdminUser.create({
      email: process.env.ADMIN_EMAIL || "admin@vmcgroup.com",
      name: "Admin User",
      password: adminPassword,
      role: "admin",
    });
    console.log("�� Created admin user:", adminUser.email);

    // Create sample categories
    const categories = await Category.create([
      {
        name: "Food & Beverages",
        description:
          "High-quality food and beverage products for various industries",
        image: "/uploads/food-category.jpg",
      },
      {
        name: "Cleaning & Hygiene",
        description: "Professional cleaning and hygiene solutions",
        image: "/uploads/cleaning-category.jpg",
      },
      {
        name: "Packaging & Disposables",
        description: "Sustainable packaging and disposable products",
        image: "/uploads/packaging-category.jpg",
      },
    ]);
    console.log("�� Created categories:", categories.length);

    // Create sample products
    const products = await Product.create([
      {
        name: "Premium Coffee Beans",
        description:
          "High-quality Arabica coffee beans for restaurants and cafes",
        category: categories[0]._id,
        image: "/uploads/coffee-beans.jpg",
        rating: 4.8,
        stock: 100,
        featured: true,
      },
      {
        name: "Fresh Milk 1L",
        description:
          "Fresh whole milk suitable for coffee shops and restaurants",
        category: categories[0]._id,
        image: "/uploads/milk.jpg",
        rating: 4.5,
        stock: 200,
        featured: false,
      },
      {
        name: "Multi-Surface Cleaner",
        description: "Professional-grade cleaner for all surfaces",
        category: categories[1]._id,
        image: "/uploads/cleaner.jpg",
        rating: 4.6,
        stock: 150,
        featured: true,
      },
      {
        name: "Eco-Friendly Plates",
        description: "Biodegradable plates for sustainable food service",
        category: categories[2]._id,
        image: "/uploads/plates.jpg",
        rating: 4.7,
        stock: 500,
        featured: true,
      },
    ]);

  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
};

// Run seeder if called directly
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;
