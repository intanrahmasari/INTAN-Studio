# INTAN Studio – Modern Fashion E-Commerce Website

## Project Overview

INTAN Studio is a modern fashion e-commerce website developed as the Final Project (UAS) for the Computer Application IT course at International Women University (IWU).

The website is designed to simulate the core business processes of an online fashion store, allowing customers to browse products, view product details, manage a shopping cart, complete a checkout process, and review their purchase history through a customer dashboard. In addition, an administrator dashboard is provided to monitor customers, orders, revenue, and the product catalog.

This project was developed using HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript. Local Storage is used as a simple client-side database to simulate user authentication, shopping cart management, customer information, and order transactions without requiring a backend server.

---

# Business Documentation

## Business Name

INTAN Studio

---

## Business Description

INTAN Studio is an online fashion store that offers modern casual clothing and accessories for young adults. The business focuses on providing a simple, clean, and responsive shopping experience where customers can easily browse products, select product variations, add items to their shopping cart, complete a simulated payment process, and monitor their purchase history.

The website also includes an administrator dashboard that allows administrators to monitor customer data, order transactions, sales revenue, and available products.

---

## Business Objectives

The objectives of this project are:

- To provide a modern online shopping experience.
- To simulate the workflow of an e-commerce website.
- To demonstrate the implementation of front-end web development concepts.
- To improve user interaction through responsive interface design.
- To apply JavaScript for dynamic website functionality using Local Storage.

---

## Target Market

The target customers of INTAN Studio include:

- College students
- Young adults (18–30 years old)
- Fashion enthusiasts
- Casual online shoppers
- Customers looking for affordable modern fashion

---

## Value Proposition

INTAN Studio offers several advantages for customers, including:

- Modern and minimalist website interface
- Responsive design for desktop and mobile devices
- Easy product browsing
- Simple shopping cart experience
- Fast checkout process
- Customer dashboard with order history
- Easy navigation throughout the website

---

## Business Model

INTAN Studio applies the **Business-to-Customer (B2C)** business model, where fashion products are sold directly from the online store to end customers through a web-based platform.

---

## Product Categories

The website provides four main product categories:

- T-Shirt
- Hoodie
- Bottom
- Accessories

Each product includes:

- Product image
- Product name
- Product category
- Product price
- Product description
- Product rating
- Size selection (where applicable)

---

## Pricing Strategy

INTAN Studio uses an affordable pricing strategy targeted at students and young adults.

The product prices are designed to remain competitive while maintaining a modern fashion image. Future versions of the website may include promotional pricing, discount campaigns, and voucher systems.

---

## Customer Journey

The shopping flow follows a complete customer journey:

1. Register a new account.
2. Login to the website.
3. Browse available products.
4. View product details.
5. Select product size.
6. Add products to the shopping cart.
7. Review the shopping cart.
8. Complete checkout and payment.
9. Receive payment confirmation.
10. View purchase history from the customer dashboard.

This workflow simulates the standard purchasing process commonly found in modern e-commerce websites.

---

# Website Features

## Customer Features

The customer side of the website provides a complete online shopping experience, including:

- User Registration
- User Login
- Home Page
- Product Catalog
- Product Search
- Product Detail Page
- Product Size Selection
- Add to Cart
- Shopping Cart
- Remove Product from Cart
- Cart Badge Notification
- Checkout Page
- Payment Simulation
- Payment Success Page
- Customer Dashboard
- My Profile
- Order History
- Order Detail
- Logout

---

## Admin Features

The administrator dashboard provides business monitoring and inventory management features, including:

- Admin Login
- Dashboard Statistics
- Total Products
- Total Customers
- Total Orders
- Total Revenue
- Recent Orders
- Customer List
- Product Management
- Product Stock Monitoring
- Increase Product Stock
- Decrease Product Stock
- Logout

---

# User Roles

The website provides two different user roles.

## Customer

Customers can:

- Register a new account.
- Login using their registered account.
- Browse products.
- Search products.
- View detailed product information.
- Select product size.
- Add products to the shopping cart.
- Remove products from the shopping cart.
- Complete the checkout process.
- Simulate online payment.
- View order history.
- View order details.
- Manage their personal dashboard.
- Logout securely.

---

## Administrator

Administrators can:

- Login using the admin account.
- Monitor business statistics.
- View customer data.
- Monitor recent orders.
- View total sales revenue.
- Monitor product inventory.
- Increase product stock.
- Decrease product stock.
- Logout securely.

---

# Website Workflow

The overall workflow of the website can be summarized as follows:

### Customer Workflow

Home Page

↓

Browse Products

↓

Search Products

↓

View Product Details

↓

Select Size

↓

Add to Cart

↓

Shopping Cart

↓

Checkout

↓

Payment

↓

Payment Success

↓

Customer Dashboard

↓

Order History

↓

View Order Details

---

### Administrator Workflow

Admin Login

↓

Dashboard

↓

View Business Statistics

↓

Monitor Customers

↓

Monitor Orders

↓

Manage Product Stock

↓

Increase / Decrease Stock

↓

Logout

# Technologies Used

The website was developed using the following technologies:

### Front-End

- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- Google Fonts (Poppins)

### Programming Language

- Vanilla JavaScript (ES6)

### Storage

- Browser Local Storage

### Development Tools

- Visual Studio Code
- Git
- GitHub
- GitHub Pages

---

# Responsive Design

The website uses Bootstrap 5 responsive components to ensure compatibility across different screen sizes.

The layout has been optimized for:

- Desktop
- Laptop
- Tablet
- Mobile Device

---

# Project Structure

```
INTAN-Studio/
│
├── assets/
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   ├── auth.js
│   ├── products.js
│   ├── product-detail.js
│   ├── cart.js
│   ├── cart-badge.js
│   ├── payment.js
│   ├── login.js
│   ├── register.js
│   ├── customer.js
│   └── admin.js
│
├── index.html
├── products.html
├── product-detail.html
├── cart.html
├── payment.html
├── payment-success.html
├── login.html
├── register.html
├── customer.html
├── admin.html
├── about.html
└── README.md
```

---

# Technical Documentation

## Technical Explanation

INTAN Studio is developed as a front-end web application using HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript.

Instead of using a backend server and database, this project utilizes the browser's Local Storage to simulate data persistence. This approach allows user information, shopping cart data, customer information, and order history to remain available after the browser page is refreshed.

The application follows a modular JavaScript structure where each JavaScript file is responsible for a specific feature, making the project easier to maintain and expand.

---

# Local Storage Structure

The project uses several Local Storage keys to simulate database functionality.

| Local Storage Key | Description |
|-------------------|-------------|
| users | Stores all registered customer accounts |
| currentUser | Stores the currently logged-in user |
| userRole | Stores the current user role (Customer/Admin) |
| cart | Stores shopping cart items |
| customer | Stores customer billing information |
| orders | Stores completed orders after checkout |

---

# JavaScript Modules

## script.js

Handles general website initialization and common JavaScript functions.

---

## products.js

Contains the product catalog data displayed throughout the website.

Each product includes:

- Product ID
- Product Name
- Category
- Price
- Rating
- Image
- Description

This module is also responsible for displaying product cards and implementing the product search feature.

---

## product-detail.js

Displays detailed product information based on the selected product.

Features include:

- Product image
- Product description
- Product price
- Product rating
- Size selection
- Add to Cart functionality

---

## cart.js

Manages all shopping cart operations.

Main responsibilities include:

- Display cart items
- Calculate subtotal
- Calculate total price
- Remove products from cart
- Update Local Storage

---

## cart-badge.js

Updates the shopping cart badge displayed in the navigation bar based on the total quantity of products currently stored in the cart.

---

## payment.js

Handles the checkout and payment simulation process.

Functions include:

- Display order summary
- Validate billing information
- Save customer information
- Generate a new order
- Store order data
- Clear shopping cart
- Redirect to the payment success page

---

## login.js

Handles user authentication.

Main features include:

- Customer login
- Admin login
- User validation
- Session management
- Redirect based on user role

---

## register.js

Handles customer registration.

Functions include:

- Validate registration form
- Check duplicate email addresses
- Save new customer accounts
- Redirect users to the login page

---

## customer.js

Controls the Customer Dashboard.

Features include:

- Display customer profile
- Display order history
- Display order details
- View purchase history
- Logout

---

## admin.js

Controls the Administrator Dashboard.

Features include:

- Display dashboard statistics
- Display total products
- Display total customers
- Display total orders
- Display total revenue
- Display recent orders
- Display customer list
- Display product inventory
- Increase product stock
- Decrease product stock
- Store stock changes using Local Storage
- Logout

---

## auth.js

Handles authentication and authorization processes.

Main responsibilities include:

- Checking user login status
- Restricting access to protected pages
- Redirecting unauthorized users
- Managing user sessions based on roles

---

# HTML Pages

## index.html

The landing page introducing INTAN Studio with featured products and navigation to the main sections of the website.

---

## products.html

Displays the complete product catalog with search functionality.

---

## product-detail.html

Displays detailed product information and allows customers to choose product size before adding items to the shopping cart.

---

## cart.html

Displays all products currently added to the shopping cart along with subtotal and total calculations.

---

## payment.html

Allows customers to complete billing information and simulate an online payment.

---

## payment-success.html

Displays a payment confirmation message after the checkout process has been completed successfully.

---

## login.html

Allows registered users and administrators to log into the website.

---

## register.html

Allows new customers to create an account.

---

## customer.html

Displays the customer dashboard, including profile information and purchase history.

---

## admin.html

Displays the administrator dashboard for monitoring business statistics, customers, orders, sales revenue, and product inventory. Administrators can also increase or decrease product stock through the Product Management section.

---

## about.html

Provides information about INTAN Studio, including the company's vision, mission, and business overview.

---

# Installation Guide

Follow these steps to run the project locally:

1. Clone this repository.

```bash
git clone https://github.com/intanrahmasari/INTAN-Studio
```

2. Open the project folder using Visual Studio Code.

3. Install the **Live Server** extension (recommended).

4. Right-click `index.html`.

5. Select **Open with Live Server**.

6. The website will open automatically in your browser.

---

# Demo Account

## Administrator

Email:

```
admin@intanstudio.com
```

Password:

```
admin123
```

## Customer

Customers can create a new account using the Register page before logging in.

---

# Future Improvements

Several features can be added in future versions of this project, such as:

- Backend database integration (MySQL or Firebase)
- Secure user authentication
- Product CRUD connected to a database
- Automatic inventory management
- Order status updates
- Online payment gateway integration
- Wishlist feature
- Product reviews and ratings from customers
- Discount and voucher system
- Order tracking
- Customer profile editing
- Sales report export
- Product filtering and sorting

---

# Current Limitations

This project is developed as a front-end prototype using Local Storage.

Some limitations include:

- Data is stored only in the browser.
- Product management is not connected to a real database.
- Inventory is displayed for monitoring purposes only.
- Payment is simulated and not connected to an actual payment gateway.
- Orders are stored locally and cannot be shared across different devices.

Despite these limitations, the project successfully demonstrates the complete workflow of a modern e-commerce website, including user authentication, shopping cart management, checkout, payment simulation, customer dashboard, and administrator dashboard.

---

# Learning Outcomes

Through this project, the following web development concepts were successfully implemented:

- Responsive web design
- Component-based page structure
- JavaScript DOM manipulation
- Local Storage implementation
- User authentication
- Shopping cart management
- Order management
- Dashboard interface
- Business workflow simulation
- Front-end application development

---

# Author

**INTAN Studio – Final Project**

Developed by:

**Intan Rahma Sari**

Faculty of Social and Business

Business Administration Program

International Women University (IWU)

Bandung, Indonesia

Academic Year 2025/2026

---

# License

This project was developed for educational purposes as part of the Final Semester Examination (UAS) and is intended solely for learning, portfolio, and academic evaluation.

© 2026 INTAN Studio. All rights reserved.