// src/components/Checkout.jsx

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotalPrice } from '../features/cart/cartSelectors';

function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a checkout process
    alert('Thank you for your purchase!');
  };

  return (
    <div className="container">
      <h1>Checkout</h1>

      {/* Display Cart Items */}
      <div className="checkout-cart-items">
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="checkout-summary">
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="checkout-form">
        <h2>Billing Information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Complete Checkout</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
