// src/components/Header.jsx

import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import {FaShoppingCart } from 'react-icons/fa';
import { selectCartTotalItems } from '../features/cart/cartSelectors'; 

function Header() {
  // Use selector to get the total number of items in the cart from Redux state
  const totalItems = useSelector(selectCartTotalItems);

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">ShoppyGlobe</Link> 
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link> 
          <Link to="/cart">
           <FaShoppingCart />{totalItems} 
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header; 
