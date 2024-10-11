// src/components/ProductList.jsx

import React, { useState } from 'react'; 
import ProductItem from './ProductItem'; 
import useFetchProducts from '../hooks/useFetchProducts'; 
import { useSelector } from 'react-redux'; 
import { selectAllProducts } from '../features/products/productsSelectors'; 

function ProductList() {
  const [searchTerm, setSearchTerm] = useState(''); // State for managing the search input
  const { loading, error } = useFetchProducts(); // Call custom hook to fetch products, getting loading and error states
  const products = useSelector(selectAllProducts); // Get the list of products from Redux state

  // Filter products based on the search term (case insensitive)
  const filteredProducts = (products || []).filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) // Check if product title includes search term
  );

  // Show loading message while fetching data
  if (loading) return <div>Loading...</div>;
  // Show error message if there was an error fetching data
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h1>Products</h1> 
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <div className="product-list"> 
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => ( // Map over filtered products to create ProductItem components
            <ProductItem key={product.id} product={product} /> // Pass product as prop to ProductItem
          ))
        ) : (
          <div>No products found.</div> // Message if no products match the search
        )}
      </div>
    </div>
  );
}

export default ProductList; 

