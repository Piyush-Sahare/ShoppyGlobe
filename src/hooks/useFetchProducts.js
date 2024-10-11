// src/hooks/useFetchProducts.js

import { useEffect, useState } from 'react'; 
import axios from 'axios'; // Import axios for making HTTP requests
import { useDispatch } from 'react-redux'; 
import { setProducts } from '../features/products/productsSlice'; 

// Custom hook to fetch products from an API
const useFetchProducts = () => {
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track error messages
  const dispatch = useDispatch(); // Initialize dispatch to send actions to the Redux store

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Make an HTTP GET request to fetch products
        const response = await axios.get('https://dummyjson.com/products');
        // Dispatch the fetched products to the Redux store
        dispatch(setProducts(response.data.products)); // Ensure products are dispatched
      } catch (err) {
        // Set error message if the request fails
        setError(err.message);
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };
    fetchProducts(); // Call the fetch function
  }, [dispatch]); // Dependency array includes dispatch to avoid stale closures

  // Return loading and error states for use in components
  return { loading, error };
};

export default useFetchProducts; 
