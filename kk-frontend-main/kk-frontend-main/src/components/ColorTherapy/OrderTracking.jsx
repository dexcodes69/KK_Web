// src/components/OrderTracking.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// Assuming you have a LoadingSpinner.jsx component
import LoadingSpinner from './LoadingSpinner'; 

// Mock API Call Function (REPLACE WITH YOUR ACTUAL FETCH LOGIC)
const fetchOrderDetails = async (orderId) => {
  // Simulate an API delay
  await new Promise(resolve => setTimeout(resolve, 1500)); 

  // --- MOCK DATA ---
  const mockOrders = {
    '123456': {
      status: 'Shipped',
      date: 'Dec 15, 2025',
      items: 3,
      trackingNumber: 'FEDEX987654321',
      estimatedDelivery: 'Dec 19, 2025',
    },
    '987654': {
      status: 'Processing',
      date: 'Dec 16, 2025',
      items: 1,
      trackingNumber: null,
      estimatedDelivery: 'N/A',
    },
    // Add more mock orders as needed
  };

  const order = mockOrders[orderId];
  if (!order) {
    throw new Error('Order not found.');
  }
  return order;
};

// Component to visualize the tracking progress
const TrackingTimeline = ({ status }) => {
  const steps = ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
  const activeStepIndex = steps.indexOf(status);

  return (
    <div className="flex justify-between items-start my-8 px-4 relative">
      {/* Line connecting steps */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200"></div>

      {steps.map((step, index) => (
        <div key={step} className="text-center relative z-10 w-1/4">
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 transition-colors duration-500
            ${index <= activeStepIndex ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}
          `}>
            {/* You can replace this with icons (e.g., Lucide-React icons) */}
            {index + 1}
          </div>
          <span className={`text-sm font-medium ${index <= activeStepIndex ? 'text-gray-800' : 'text-gray-500'}`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};


const OrderTracking = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOrder = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchOrderDetails(orderId); // Call the API
        setOrderDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      loadOrder();
    }
  }, [orderId]);


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <LoadingSpinner /> {/* Use your existing spinner component */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error: {error}</h2>
        <p className="text-gray-600">Please verify the Order ID or contact support.</p>
        <Link to="/" className="text-blue-600 mt-4 inline-block hover:underline">
          Go Home
        </Link>
      </div>
    );
  }

  const { status, date, items, trackingNumber, estimatedDelivery } = orderDetails;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif text-gray-900 mb-2">Order #{orderId}</h1>
      <p className="text-lg text-gray-600 mb-8">Placed on {date}</p>

      {/* --- Tracking Timeline --- */}
      <div className="bg-white p-6 md:p-10 shadow-lg rounded-xl mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Current Status: 
          <span className={`ml-3 px-3 py-1 rounded-full text-sm font-semibold 
            ${status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
              status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
          >
            {status}
          </span>
        </h2>
        <TrackingTimeline status={status} />
      </div>
      
      {/* --- Details and Shipping Info --- */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Shipping Details Card */}
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Shipping Information</h3>
          <p className="mb-2"><strong>Estimated Delivery:</strong> <span className="text-green-600 font-semibold">{estimatedDelivery}</span></p>
          
          {trackingNumber ? (
            <p className="mb-2">
              <strong>Tracking Number:</strong> 
              <a 
                href={`https://www.fedex.com/en-us/tracking/tracking.html?trackNum=${trackingNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline ml-2"
              >
                {trackingNumber}
              </a>
            </p>
          ) : (
            <p className="text-gray-500 italic">Tracking number pending (status: {status}).</p>
          )}
        </div>

        {/* Order Summary Card */}
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
          <p><strong>Items:</strong> {items} unique products</p>
          <p className="mt-2">
            <Link to="/contact" className="text-blue-600 hover:underline">
              View Order History / Receipt
            </Link>
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Continue Shopping
        </Link>
      </div>

    </div>
  );
};

export default OrderTracking;