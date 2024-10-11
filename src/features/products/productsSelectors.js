// src/features/products/productsSelectors.js

// Selector to get all products
export const selectAllProducts = (state) => state.products;

// Selector to get a product by ID
export const selectProductById = (state, productId) =>
  state.products.find((product) => product.id === productId);

// Selector to filter products by search term
export const selectFilteredProducts = (state, searchTerm) =>
  state.products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
