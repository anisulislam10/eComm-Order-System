import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dispatch() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders/dispatch')
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Dispatch Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.productName} - {order.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dispatch;
