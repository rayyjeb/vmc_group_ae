#!/bin/bash

echo "�� Starting VMC Group UAE Backend..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    cp .env.example .env
    echo "📝 Please edit .env file with your configuration before continuing."
    echo "�� Make sure to set JWT_SECRET and MONGODB_URI"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if MongoDB is accessible
echo "🔍 Checking MongoDB connection..."
node -e "
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/vmc_group_uae')
  .then(() => {
    console.log('✅ MongoDB connection successful');
    process.exit(0);
  })
  .catch(err => {
    console.log('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
"

if [ $? -eq 0 ]; then
    echo "✅ MongoDB connection successful"
    echo "🌱 Seeding database with sample data..."
    npm run seed
    
    echo "🚀 Starting development server..."
    npm run dev
else
    echo "❌ MongoDB connection failed. Please check your connection string."
    exit 1
fi
