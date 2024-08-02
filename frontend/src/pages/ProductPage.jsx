import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // Fetch products from API
      const response = await axios.get('/api/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Row>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
