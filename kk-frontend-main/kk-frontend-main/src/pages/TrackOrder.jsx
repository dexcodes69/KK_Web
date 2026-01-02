// src/pages/TrackOrder.jsx

import React from 'react';
// Assuming OrderTracking.jsx is located in src/components/
import OrderTracking from '../components/OrderTracking'; 

const TrackOrder = () => {
  return (
    <div className="py-10">
      <OrderTracking />
    </div>
  );
};

export default TrackOrder;