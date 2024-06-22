# Infinite Mart Website Backend

## Description

This repository contains the backend code for an online shopping website. The backend is built with Node.js, Express.js, and Mongoose, providing a robust and scalable solution for managing products, users, orders, and other essential features of an e-commerce platform. The API supports various functionalities such as user authentication, product management, order processing, and more.

## Features

- User authentication and authorization
- Product management (CRUD operations)
- Order processing and management
- Shopping cart functionality
- User profile management
- Secure password handling with bcrypt
- JWT-based authentication
- Error handling and validation

## Technology Used

- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Other**: dotenv for environment variables, nodemon for development

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Mirhasankhan/infinite-mart-backend.git
   ```

   cd your-repo-name
   npm install

2. Update env file:
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

   npm start

   ## API Endpoints

   Here are some of the key API endpoints available in this backend:

User Routes:

- **POST /api/users/register:** : Register a new user
- **POST /api/users/login:** Authenticate a user and get a token
- **GET /api/users/profile:** Get user profile (protected)
  Product Routes:

GET /api/products: Get all product
GET /api/products/:id: Get a product by ID
POST /api/products: Create a new product (protected)
PUT /api/products/:id: Update a product by ID (protected)
DELETE /api/products/:id: Delete a product by ID (protected)
Order Routes:

POST /api/orders: Create a new order (protected)
GET /api/orders/:id: Get an order by ID (protected)
GET /api/orders: Get all orders (protected, admin only)
