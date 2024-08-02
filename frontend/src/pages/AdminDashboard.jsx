// src/pages/ClientDashboard.jsx
import React from 'react';
import OrderForm from '../components/Client/OrderForm'; // Adjust the path if necessary

function ClientDashboard() {
  return (
    <div>
      <h1>admin Dashboard</h1>
      <OrderForm /> {/* Ensure OrderForm component is defined and imported */}
      {/* Other dashboard content */}
    </div>
  );
}

export default ClientDashboard;
