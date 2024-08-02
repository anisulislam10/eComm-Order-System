import React from 'react';
import OrderInProgress from '../components/Client/OrderInProgress';
import Dispatch from '../components/Client/Dispatch';
import Deliver from '../components/Client/Deliver';
import ProductList from '../components/Client/ProductList';

function ClientDashboard() {
  return (
    <div>
      <h1>Client Dashboard</h1>
      <OrderInProgress />
      <Dispatch />
      <Deliver />
      <ProductList />
      <OrderForm />
    </div>
  );
}

export default ClientDashboard;
