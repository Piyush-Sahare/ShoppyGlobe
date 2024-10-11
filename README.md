# **ShoppyGlobe E-commerce Application**

## **Overview**

ShoppyGlobe is a basic e-commerce web application built with **React**, **Redux**, and **React Router**. Users can browse products, view detailed product information, add items to their cart, and manage their shopping cart by modifying item quantities or removing items. The application also includes features like product search, error handling, and lazy loading for improved performance.

## **Features**

*   View a list of products fetched from an external API.
*   Search and filter products by title.
*   View detailed information about each product.
*   Add products to a shopping cart and modify item quantities.
*   Remove products from the shopping cart.
*   Responsive design for mobile and desktop views.
*   Lazy loading for optimized performance.
*   Error handling for failed API requests.

## **Technology Stack**

*   **React**: Front-end JavaScript library for building the user interface.
*   **Redux**: State management library for managing global state (cart, products).
*   **React Router**: Library for handling navigation and routing between pages.
*   **Axios**: For fetching data from external APIs.
*   **Vite**: Fast build tool and development server.
*   **CSS**: For styling and responsive design.

## **API Used**

The product data is fetched from [DummyJSON API](https://dummyjson.com/products).


## **Installation Instructions**

## Prerequisites

Make sure you have the following installed:

- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/)
- **npm** : Installed automatically with Node.js.

## Getting Started

1. **Clone the repository:**
2. **Install dependencies:**
3. **Run Project:**

   ```bash
   git clone https://github.com/Piyush-Sahare/ShoppyGlobe.git

   cd ShoppyGlobe

   npm install
   
   npm run dev

## **Usage**

### **Home Page (Product List)**

*   Displays a list of products fetched from the API.
*   Search functionality allows filtering of products by title.
*   Each product has an “Add to Cart” button to add the item to the shopping cart.

### **Product Detail Page**

*   Displays detailed information about a specific product, including title, description, price, and image.
*   Users can add the product to the shopping cart from the detail page.

### **Shopping Cart**

*   Displays all the products added to the cart with the option to increase or decrease item quantity.
*   Users can remove items from the cart.
*   The total number of items and total price are shown at the bottom.

### **Search Functionality**

*   The search bar is available on the home page.
*   Users can filter products by typing a search term, and the product list updates in real-time.

## **State Management**

The application uses **Redux** for state management.

*   **Cart State**: Manages the cart items, including adding, removing, and updating item quantities.
*   **Products State**: Manages the list of products fetched from the API.

## **Key Redux Slices**:

*   `cartSlice.js`: Contains actions and reducers for managing the cart (e.g., add item, remove item, increase quantity).
*   `productsSlice.js`: Manages product data fetched from the API.

## **Error Handling**

The application includes error handling for API failures. If the product data cannot be fetched, the user will see an error message. This is implemented in the `useFetchProducts` custom hook.

## **Performance Optimization**

**React.lazy** and **Suspense** are used to lazy load components. This improves the performance by splitting code and loading components only when needed.

## **Styling and Responsiveness**

The application is styled using **CSS** and is fully responsive. It works well on different screen sizes, from mobile to desktop.



## **Project Structure**

```bash

src/
│
├── components/
│   ├── Header.jsx           # Navigation and cart icon
│   ├── ProductList.jsx      # Displays a list of products
│   ├─  Checkout.jsx         # Checkout page
│   ├── ProductItem.jsx      # Represents individual product with "Add to Cart" button
│   ├── ProductDetail.jsx    # Displays detailed product information
│   ├── Cart.jsx             # Shopping cart page
│   ├── CartItem.jsx         # Represents individual cart items
│   └── NotFound.jsx         # 404 error page
│
├── features/
│   ├── cart/                # Redux slice for cart management
│   ├── products/            # Redux slice for product management
│
├── hooks/
│   └── useFetchProducts.js  # Custom hook for fetching products from API
│
├── App.jsx                  # Main application component
├── main.jsx                 # Entry point of the application
├── store.js                 # Redux store configuration
└── index.css               # CSS for styling the application







