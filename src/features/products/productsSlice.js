// src/features/products/productsSlice.js

import { createSlice } from '@reduxjs/toolkit'; 

// Create a slice of the Redux store for product management
const productsSlice = createSlice({
  name: 'products', 
  initialState: [], // Initial state of the products, starting as an empty array
  reducers: {
    // Reducer to set the products in the state
    setProducts: (state, action) => action.payload, // Set the state to the payload (new products data)
  },
});

// Exporting actions generated from the slice for use in components
export const { setProducts } = productsSlice.actions;

// Export the reducer to be used in the Redux store
export default productsSlice.reducer;
