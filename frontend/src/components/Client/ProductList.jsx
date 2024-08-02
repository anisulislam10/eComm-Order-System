import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <select onChange={(e) => setSelectedColor(e.target.value)}>
              {product.colors.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
            {selectedColor && <img src={product.colors[selectedColor].image} alt={selectedColor} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
