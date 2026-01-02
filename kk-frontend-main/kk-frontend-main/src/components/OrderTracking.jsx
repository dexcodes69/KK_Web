import React, { useState } from 'react';
import { Truck, Search, XCircle, CheckCircle, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderTracking = () => {
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null); // null, 'loading', 'error', 'success'
    const [trackingDetails, setTrackingDetails] = useState(null);

    // Placeholder for API call logic
    const handleTrack = (e) => {
        e.preventDefault();
        
        if (!orderId || !email) {
            setStatus('error');
            setTrackingDetails({ message: "Please enter both the Order ID and Email Address." });
            return;
        }

        setStatus('loading');
        setTrackingDetails(null);

        // --- SIMULATED API CALL ---
        // In a real application, you would use axios/fetch here:
        // axios.post('/api/orders/track', { orderId, email })
        
        setTimeout(() => {
            // Replace this simulated logic with your actual backend response handling
            if (orderId === 'LUX1024' && email === 'test@example.com') {
                setStatus('success');
                setTrackingDetails({
                    trackingNumber: 'TBX4920401',
                    carrier: 'FedEx Luxury Freight',
                    currentStatus: 'Out for Delivery',
                    estimatedDelivery: 'Dec 20, 2025',
                    lastUpdate: 'Richmond, VA - 8:30 AM',
                });
            } else if (orderId === 'LUX1025') {
                 setStatus('success');
                 setTrackingDetails({
                    trackingNumber: 'LXK900100',
                    carrier: 'DHL Priority',
                    currentStatus: 'Delivered',
                    estimatedDelivery: 'Dec 10, 2025',
                    lastUpdate: 'Your Porch - 11:15 AM',
                });
            } else {
                setStatus('error');
                setTrackingDetails({ message: `Order ID "${orderId}" not found or email mismatch. Please check your credentials.` });
            }
        }, 1500); // Simulate network delay
    };
    
    // --- Render Logic ---
    const renderStatus = () => {
        if (status === 'loading') {
            return (
                <div className="flex items-center justify-center p-8 bg-gray-50 rounded-xl">
                    <Package size={24} className="animate-spin text-gray-500 mr-3"/>
                    <p className="text-gray-500 font-medium">Tracking your luxury shipment...</p>
                </div>
            );
        }

        if (status === 'error' && trackingDetails) {
            return (
                <div className="flex flex-col items-center justify-center p-8 bg-red-50 border border-red-200 rounded-xl">
                    <XCircle size={32} className="text-red-500 mb-3"/>
                    <p className="text-red-700 font-medium text-center">{trackingDetails.message}</p>
                </div>
            );
        }

        if (status === 'success' && trackingDetails) {
            const isDelivered = trackingDetails.currentStatus === 'Delivered';
            
            return (
                <div className="p-8 bg-white border border-gray-100 rounded-[1.5rem] shadow-xl space-y-4">
                    <div className={`flex items-center gap-4 p-4 rounded-xl ${isDelivered ? 'bg-green-50' : 'bg-blue-50'}`}>
                        {isDelivered 
                           ? <CheckCircle size={36} className="text-green-600"/> 
                           : <Truck size={36} className="text-blue-600"/>
                        }
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Current Status</p>
                            <h4 className="text-2xl font-serif font-bold text-gray-900">{trackingDetails.currentStatus}</h4>
                        </div>
                    </div>
                    
                    <ul className="text-sm text-gray-700 space-y-2 pt-4 border-t border-gray-100">
                        <li><strong className="font-bold">Tracking Number:</strong> <span className="text-black">{trackingDetails.trackingNumber}</span></li>
                        <li><strong className="font-bold">Carrier:</strong> {trackingDetails.carrier}</li>
                        <li><strong className="font-bold">Last Update:</strong> {trackingDetails.lastUpdate}</li>
                        {isDelivered 
                           ? <li><strong className="font-bold text-green-600">Delivery Date:</strong> {trackingDetails.estimatedDelivery}</li>
                           : <li><strong className="font-bold text-blue-600">Estimated Delivery:</strong> {trackingDetails.estimatedDelivery}</li>
                        }
                    </ul>
                    
                    <div className="mt-6 pt-4 text-center">
                        <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-0.5">
                            Need help? Contact Support
                        </Link>
                    </div>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-[#F9FAFB] font-sans">
            <div className="max-w-xl mx-auto px-6">
                
                <div className="text-center mb-12">
                    <Truck size={40} className="text-gray-400 mx-auto mb-4"/>
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-3">Track Your Order</h1>
                    <p className="text-gray-500 max-w-sm mx-auto text-lg">
                        Enter your Order ID and the Email used at checkout.
                    </p>
                </div>

                {/* Tracking Form */}
                <form onSubmit={handleTrack} className="bg-white p-8 rounded-[2rem] shadow-2xl space-y-6 border border-gray-100 mb-10">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Order ID</label>
                        <input
                            type="text"
                            required
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value.toUpperCase())}
                            placeholder="e.g., LUX1024"
                            className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-colors outline-none text-lg font-mono"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-colors outline-none text-lg"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
                        disabled={status === 'loading'}
                    >
                        <Search size={18}/> {status === 'loading' ? 'Searching...' : 'Track Shipment'}
                    </button>
                </form>

                {/* Tracking Status Display */}
                {renderStatus()}

            </div>
        </div>
    );
};

export default OrderTracking;