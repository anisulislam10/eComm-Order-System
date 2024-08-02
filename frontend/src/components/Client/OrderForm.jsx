// src/components/OrderForm.jsx
import React, { useState } from 'react';

function OrderForm() {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission
    console.log(`Order submitted: ${product}, Quantity: ${quantity}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Place Order</h2>
      <label>
        Product:
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <button type="submit">Submit Order</button>
    </form>
  );
}

export default OrderForm;
