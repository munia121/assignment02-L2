# **Bi-Cycle store B4A2V4**

An advanced RESTful API for managing an online cycle store, built with **Express.js**, **TypeScript**, and **MongoDB**. This API supports full CRUD operations for managing books and orders, with features like inventory management, revenue calculation, and advanced validation.

---

## **Live Demo**

- **API Base URL:** 
 


---

## **Features**

### **Product Management**

- Create, read, update, and delete books.
- Search cycle by `name`, `brand`, or `type`.
- Inventory management to track stock levels.

### **Order Management**

- Place orders for books with real-time stock updates.
- Automatically calculate total price for each order.
- Manage customer details and order quantities.

### **Revenue Tracking**

- Calculate total revenue from all orders using MongoDB aggregation.

### **Error Handling**

- Comprehensive error responses for validation, not found, and insufficient stock.
- Clear and structured error messages for debugging.

---

## **Technologies Used**

- **Backend Framework:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Programming Language:** TypeScript
- **Validation:** Mongoose Schema Validation
- **API Testing:** Postman
- **Deployment:** vercel 

---

## **Project Structure**

```
📦 cycle-store-server
├── 📂 src
│   ├── 📂 config                 # Configuration files
│   │   ├── db.ts                # MongoDB connection setup
│   │   └── env.ts               # Environment variable setup
│   │
│   ├── 📂 modules                # All modules (features) of the application
│   │   ├── 📂 cycle-store          # Book-related functionalities
│   │   │   ├── product.controller.ts
│   │   │   ├── product.interface.ts
│   │   │   ├── product.route.ts
│   │   │   ├── product.service.ts
│   │   │
│   │   ├── 📂 order-cycle    # Order-related functionalities
│   │   │   ├── order.controller.ts
│   │   │   ├── order.interface.ts
│   │   │   ├── order.route.ts
│   │   │   ├── order.service.ts
│   │   └── product.model.ts
│   │
│   ├── 📂 utils                  # Reusable utility functions
│   │   ├── customError.ts       # Custom error class for error handling
│   │   ├── errorHandler.ts      # Global error handler middleware
│   │   ├── logger.ts            # Logger setup for debugging
│   │   └── response.ts          # Standard API response format utility
│   │
│   ├── app.ts                    # Application setup (middleware, routes, etc.)
│   ├── server.ts                 # Server startup file
│   └── 📂 Error                # Centralized route management
│
├── 📂 dist                       # Compiled output (TypeScript -> JavaScript)
│
├── 📂 node_modules               # Installed dependencies
│
├── .env                          # Environment variables file
├── .gitignore                    # Ignored files for Git
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Locked dependency versions
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation

```

---


### **Installation**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/munia121/assignment02-L2.git
   cd assignment02-L2
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**  
   Create a `.env` file in the root directory and add the following:

   ```env
   NODE_ENV=development
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the Server:**
   ```bash
   npm run dev
   ```
   The server will start at `http://localhost:5000`.

---

## **API Endpoints**

### **Product Endpoints**

1. **Create a Book:**

   - **POST** `/api/products`
   - **Request Body:**
     ```json
     {
       "name": "Roadster 5000",
        "brand": "SpeedX",
        "price": 300,
        "type": "Road",
        "description": "A premium road bike designed for speed and performance.",
        "quantity": 20,
        "inStock": true
     }
     ```
   - **Response:** Details of the post cycle.

2. **Get All Books:**

   - **GET** `/api/products`
   - **Query Parameters:**
     - `searchTerm` (optional): Search by `name`, `brand`, or `type`.
   - **Response:** List of cycle.

3. **Get a Specific Book:**

   - **GET** `/api/products/:productId`
   - **Response:** Details of the specific cycle.

4. **Update a cycle:**

   - **PUT** `/api/products/:productId`
   - **Request Body:** Partial updates (e.g., `price`, `quantity`).
   - **Response:** Updated cycle details.

5. **Delete a Book:**
   - **DELETE** `/api/products/:productId`
   - **Response:** Confirmation message.

---

### **Order Endpoints**

1. **Place an Order:**

   - **POST** `/api/orders`
   - **Request Body:**
     ```json
     {
        "email": "customer@example.com",
        "product": "648a45e5f0123c45678d9012",
        "quantity": 2,
        "totalPrice": 600
     }
     ```
   - **Response:** Details of the created order.

2. **Calculate Revenue:**
   - **GET** `/api/orders/revenue`
   - **Response:**
     ```json
     {
       "totalRevenue": 600
     }
     ```

---

## **Error Handling**

- **Validation Errors:**  
  Returns clear error messages when input validation fails.  
  Example:

  ```json
  {
    "message": "Validation failed",
    "success": false,
    "error": {
      "price": "Price must be a positive number"
    }
  }
  ```

- **Not Found:**  
  Returns `404` if a product or order is not found.

- **Insufficient Stock:**  
  Returns an error if the requested quantity exceeds available stock.

---


