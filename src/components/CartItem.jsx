// src/components/CartItem.jsx

import React from 'react'; 
import { useDispatch } from 'react-redux'; 
import { removeItem, increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice'; 

function CartItem({ item }) {
  const dispatch = useDispatch(); // Initialize dispatch to send actions to the Redux store

  // Function to handle the removal of the item from the cart
  const handleRemoveItem = () => {
    dispatch(removeItem(item.id)); 
  };

  // Function to handle increasing the quantity of the item
  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id)); 
  };

  // Function to handle decreasing the quantity of the item
  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.id)); 
    } else {
      // Optionally remove item if quantity reaches 0
      dispatch(removeItem(item.id)); 
    }
  };

  // Render the individual cart item
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} /> 
      <div className="cart-item-details">
        <h4>{item.title}</h4> 
        <p>${item.price}</p> 
        <div className="quantity-controls">
        
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
      <button className="remove-button" onClick={handleRemoveItem}>
        Remove 
      </button>
    </div>
  );
}

export default CartItem; 
