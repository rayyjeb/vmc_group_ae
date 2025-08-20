// Test script to verify backend connection
import { publicApi } from "./backend-api";

export async function testBackendConnection() {
  try {
    console.log("🔍 Testing backend connection...");

    // Test health endpoint
    const healthResponse = await fetch("http://localhost:5000/health");
    if (healthResponse.ok) {
      console.log("✅ Backend is running");
    } else {
      console.log("❌ Backend health check failed");
      return false;
    }

    // Test products endpoint
    try {
      const products = await publicApi.getProducts();
      console.log(
        "✅ Products API working:",
        products.products?.length || 0,
        "products found"
      );
    } catch (error) {
      console.log("❌ Products API failed:", error);
    }

    // Test categories endpoint
    try {
      const categories = await publicApi.getCategories();
      console.log(
        "✅ Categories API working:",
        categories.length,
        "categories found"
      );
    } catch (error) {
      console.log("❌ Categories API failed:", error);
    }

    console.log("�� Backend connection test completed!");
    return true;
  } catch (error) {
    console.error("❌ Backend connection test failed:", error);
    return false;
  }
}

// Run test if called directly
if (typeof window !== "undefined") {
  // Only run in browser
  testBackendConnection();
}
