// src/components/Cart.jsx

import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import { selectCartItems, selectCartTotalPrice } from '../features/cart/cartSelectors'; // Import selectors to get cart items and total price from Redux state
import CartItem from './CartItem'; 

function Cart() {
  // Use selectors to get cart items and total price from the Redux store
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  // Check if the cart is empty and render appropriate message if so
  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h1>Your Cart</h1>
        <div>Your cart is empty!</div>
      </div>
    );
  }

  // Render cart items and summary when there are items in the cart
  return (
    <div className="container">
      <h1>Your Cart</h1>
      <div className="cart">
       
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} /> // Pass each item to CartItem component with a unique key
        ))}
        <div className="cart-summary">
         
          <p>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
         
          <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
        </div>
        <Link to="/checkout" className="checkout-button">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart; 
