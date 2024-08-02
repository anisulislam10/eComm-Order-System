import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DispatchOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders/dispatch')
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDispatch = (orderId) => {
    axios.post(`/api/orders/dispatch/${orderId}`)
      .then(response => alert('Order dispatched!'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Orders Ready for Dispatch</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.productName} - {order.status}
            <button onClick={() => handleDispatch(order.id)}>Dispatch</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DispatchOrder;
