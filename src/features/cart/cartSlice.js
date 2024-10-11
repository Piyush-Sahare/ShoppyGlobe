// src/features/cart/cartSlice.js

import { createSlice } from '@reduxjs/toolkit'; 

// Create a slice of the Redux store for cart management
const cartSlice = createSlice({
  name: 'cart', 
  initialState: [], // Initial state of the cart, starting as an empty array
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If it exists, increase the quantity by 1
        existingItem.quantity += 1;
      } else {
        // If it doesn't exist, add a new item with quantity 1
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload); // Return a new state excluding the item with the specified ID
    },
    // Reducer to increase the quantity of an item in the cart
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload); // Find the item in the cart
      if (item) {
        item.quantity += 1; // Increase quantity by 1 if the item is found
      }
    },
    // Reducer to decrease the quantity of an item in the cart
    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload); // Find the item in the cart
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrease quantity by 1 if it is greater than 1
      }
    },
    // Reducer to clear the entire cart
    clearCart: () => {
      return []; // Return an empty array to reset the cart
    },
  },
});

// Exporting actions generated from the slice for use in components
export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
