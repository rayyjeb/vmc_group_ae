# VMC Group UAE Backend API

A robust Node.js/Express backend API for the VMC Group UAE website with MongoDB integration.

## Features

- 🔐 JWT-based authentication for admin users
- 📦 Full CRUD operations for products, categories, and subcategories
- 🖼️ Image upload support with Multer
- ��️ MongoDB with Mongoose ODM
- ✅ Input validation with express-validator
- 🛡️ Security middleware (Helmet, CORS, Rate limiting)
- 📝 Comprehensive error handling
- 🔍 Search and filtering capabilities
- �� Pagination support

## Prerequisites

- Node.js >= 18.0.0
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. **Clone the repository and navigate to backend:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` file with your configuration:

   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/vmc_group_uae
   JWT_SECRET=your-super-secret-jwt-key-here
   ADMIN_EMAIL=admin@vmcgroup.com
   ADMIN_PASSWORD=admin123
   ```

4. **Start MongoDB:**

   - Local: Ensure MongoDB is running on your machine
   - Atlas: Use your MongoDB Atlas connection string

5. **Seed the database (optional):**
   ```bash
   npm run seed
   ```

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start on `http://localhost:5000` (or your configured PORT).

## API Endpoints

### Authentication

- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user (protected)
- `POST /api/auth/logout` - Logout (protected)

### Products

- `GET /api/products` - Get all products (with filtering/pagination)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get single category
- `POST /api/categories` - Create category (admin only)
- `PUT /api/categories/:id` - Update category (admin only)
- `DELETE /api/categories/:id` - Delete category (admin only)

### Subcategories

- `GET /api/subcategories` - Get all subcategories
- `GET /api/subcategories/:id` - Get single subcategory
- `POST /api/subcategories` - Create subcategory (admin only)
- `PUT /api/subcategories/:id` - Update subcategory (admin only)
- `DELETE /api/subcategories/:id` - Delete subcategory (admin only)

## Database Schema

### Product

- name, description, price, image
- category (ref: Category), subcategory (ref: Subcategory)
- rating, stock, featured
- timestamps

### Category

- name, description, image, slug
- timestamps
- Virtual fields: subcategoriesCount, productsCount

### Subcategory

- name, description, image, slug
- categoryId (ref: Category)
- timestamps
- Virtual fields: productsCount

### AdminUser

- email, name, password, role
- isActive, lastLogin
- timestamps

## File Upload

- Supported formats: JPEG, JPG, PNG, WebP, GIF
- Max file size: 5MB (configurable)
- Files stored in `uploads/` directory
- Accessible via `/uploads/filename` endpoint

## Security Features

- JWT token authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS configuration
- Rate limiting
- Helmet security headers
- File type validation

## Error Handling

Comprehensive error handling for:

- Validation errors
- Authentication errors
- Database errors
- File upload errors
- General server errors

## Development

### Scripts

- `npm run dev` - Start with nodemon (auto-restart)
- `npm start` - Start production server
- `npm run seed` - Seed database with sample data
- `npm test` - Run tests (when implemented)

### Project Structure

```
src/
├── models/          # MongoDB schemas
├── routes/          # API route handlers
├── middleware/      # Custom middleware
├── scripts/         # Database scripts
└── server.js        # Main server file
```

## Environment Variables

| Variable         | Description               | Default                       |
| ---------------- | ------------------------- | ----------------------------- |
| `PORT`           | Server port               | 5000                          |
| `NODE_ENV`       | Environment               | development                   |
| `MONGODB_URI`    | MongoDB connection string | localhost:27017/vmc_group_uae |
| `JWT_SECRET`     | JWT signing secret        | required                      |
| `JWT_EXPIRES_IN` | JWT expiration            | 7d                            |
| `ADMIN_EMAIL`    | Default admin email       | admin@vmcgroup.com            |
| `ADMIN_PASSWORD` | Default admin password    | admin123                      |
| `MAX_FILE_SIZE`  | Max upload file size      | 5242880 (5MB)                 |

## Contributing

1. Follow the existing code style
2. Add proper error handling
3. Include input validation
4. Test your changes
5. Update documentation if needed

## License

MIT License - see LICENSE file for details
