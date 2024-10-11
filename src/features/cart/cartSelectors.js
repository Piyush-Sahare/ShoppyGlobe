// src/features/cart/cartSelectors.js

// Selector to get all cart items
export const selectCartItems = (state) => state.cart;

// Selector to get the total number of items in the cart
export const selectCartTotalItems = (state) =>
  state.cart.reduce((total, item) => total + item.quantity, 0);

// Selector to calculate the total price of the cart
export const selectCartTotalPrice = (state) =>
  state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
