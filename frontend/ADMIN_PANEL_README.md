# Admin Panel Setup Guide

## Overview

This admin panel provides a simple interface for managing products in the VMC Group UAE website. It includes basic authentication and product management features.

## Features

- **Secure Login**: Admin-only access with JWT authentication
- **Dashboard**: Overview of database statistics
- **Add Products**: Form to add new products with all required fields
- **Manage Products**: View, edit featured status, and delete existing products
- **Responsive Design**: Works on desktop and mobile devices

## Default Admin Credentials

- **Email**: admin@vmcgroup.com
- **Password**: admin123

## Setup Instructions

### 1. Backend Setup

Make sure your backend server is running:

```bash
cd backend
npm install
npm start
```

### 2. Seed the Database (First Time Only)

Run the seed script to create the default admin user and sample data:

```bash
cd backend
node src/scripts/seedDatabase.js
```

### 3. Frontend Setup

Make sure your frontend is running:

```bash
cd frontend
npm install
npm run dev
```

### 4. Access Admin Panel

Navigate to: `http://localhost:3000/admin`

## Usage

### Adding Products

1. Click on "Add Product" tab
2. Fill in all required fields:
   - Product Name
   - Description
   - Category (select from dropdown)
   - Subcategory (optional)
   - Image URL
   - Stock Quantity
   - Featured status
3. Click "Add Product"

### Managing Products

1. Click on "Products" tab
2. View all products with their details
3. Toggle featured status
4. Delete products (with confirmation)

### Security Features

- JWT-based authentication
- Admin-only access
- Secure password hashing
- Rate limiting on API endpoints

## File Structure

```
frontend/
├── app/admin/
│   ├── page.tsx          # Main admin page
│   └── layout.tsx        # Admin layout
└── components/admin/
    ├── AdminLogin.tsx    # Login form
    ├── AdminDashboard.tsx # Main dashboard
    ├── AddProductForm.tsx # Product creation form
    └── ProductList.tsx   # Product management
```

## API Endpoints Used

- `POST /api/auth/login` - Admin authentication
- `GET /api/products` - Fetch products
- `POST /api/products` - Create new product
- `PATCH /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/categories` - Fetch categories
- `GET /api/subcategories` - Fetch subcategories

## Customization

- Modify the admin panel styling in the component files
- Add new features by extending the dashboard
- Customize the product form fields as needed
- Update the authentication flow if required

## Troubleshooting

- Ensure MongoDB is running and accessible
- Check that all environment variables are set
- Verify the backend API is accessible from the frontend
- Check browser console for any JavaScript errors

## Summary

I've created a complete, simple admin panel for you with the following features:

### 🔐 **Authentication System**

- Secure login with JWT tokens
- Admin-only access protection
- Default credentials: `admin@vmcgroup.com` / `admin123`

### 📊 **Dashboard**

- Overview of database statistics
- Quick navigation between features
- Clean, modern interface

### ➕ **Add Products**

- Comprehensive form with all required fields
- Category and subcategory selection
- Image URL input
- Stock and pricing management
- Featured product togg
