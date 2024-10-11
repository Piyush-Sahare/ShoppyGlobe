// src/components/ProductDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios'; // Import axios for making HTTP requests
import { useDispatch } from 'react-redux'; 
import { addItem } from '../features/cart/cartSlice'; 

function ProductDetail() {
  // Extract product ID from the URL parameters
  const { id } = useParams();
  const dispatch = useDispatch(); // Initialize dispatch to send actions to the Redux store

  // State for storing product data, loading status, and error messages
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch product details when component mounts or ID changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Make an API call to fetch product details
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data); // Set product data in state
      } catch (err) {
        setError(err.message); // Set error message in case of failure
      } finally {
        setLoading(false); // Set loading to false once fetching is complete
      }
    };
    fetchProduct(); // Call the fetchProduct function
  }, [id]); // Dependency array ensures fetch is called when ID changes

  // Show loading message while fetching data
  if (loading) return <div>Loading...</div>;
  // Show error message if there was an error fetching data
  if (error) return <div>Error: {error}</div>;

  // Render product details once data is successfully fetched
  return (
    <div className="container">
      <div className="product-detail">
        <img src={product.thumbnail} alt={product.title} />
        <div className="product-detail-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          {/* Button to add product to cart, dispatching addItem action with product data */}
          <button onClick={() => {
            dispatch(addItem(product));
            alert("Item Added to Cart");
          }
          }>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; 
