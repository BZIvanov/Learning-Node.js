# ShopStop Node.js Demo - Features Overview

This simple Node.js demo application provides the following core functionality:

## 🏠 Home Page (`/`)

- Displays a list of all products currently in the in-memory database.
- Each product is shown as a card with:
  - Image
  - Name
  - Description
- Includes a **search bar** that filters products by name using a case-insensitive match.
  - Example: searching for "phone" will display all products with "phone" in the name.

## ➕ Add Product (`/product/add`)

- Accessible via the "Add Product" link in the navigation bar.
- Displays a form with the following input fields:
  - Product name (`text`)
  - Description (`textarea`)
  - Price (`number`)
  - Image URL (`text`)
- On form submission:
  - Product is added to an in-memory product list.
  - User is redirected back to the home page.
  - The new product immediately appears in the product list.

## 📦 Static File Serving (`/static/...`)

- Serves static assets such as:
  - CSS stylesheets (e.g., `/static/styles/styles.css`)
  - Favicon (e.g., `/static/favicon.ico`)
- Ensures that styles and images are correctly loaded for the UI.

## 🗃️ In-Memory Database

- Product data is stored in-memory (no persistent storage).
- Stored fields per product:
  - `id`: unique identifier (auto-incremented)
  - `name`
  - `description`
  - `price`
  - `image`

## ⚠️ Notes

- No input validation or sanitization (intended for learning/demo purposes).
- No data persistence — data resets every time the server restarts.
- No delete or edit functionality for products.
- No authentication or user system.
