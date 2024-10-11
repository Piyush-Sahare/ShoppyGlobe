// src/components/ProductItem.jsx

import React from 'react'; 
import { useDispatch } from 'react-redux'; 
import { addItem } from '../features/cart/cartSlice'; 
import { Link } from 'react-router-dom'; 

function ProductItem({ product }) {
  const dispatch = useDispatch(); // Initialize dispatch to send actions to the Redux store

  return (
    <div className="product-item"> 
      <Link to={`/product/${product.id}`}> 
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3> 
      </Link>
      <p>{product.description}</p> 
      <p className="price">${product.price}</p> 
     
      <button onClick={() => { 
        dispatch(addItem(product)); // Dispatch action to add product to the cart
        alert("Item Added to Cart"); 
      }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem; 
