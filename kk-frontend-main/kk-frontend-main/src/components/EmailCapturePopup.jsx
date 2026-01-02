import React, { useState, useEffect } from 'react';
import { X, Mail, Sparkles } from 'lucide-react';

const EmailCapturePopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (localStorage.getItem('emailPopupSeen')) return;
        const timer = setTimeout(() => setIsVisible(true), 6000); 
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('pending');
        try {
            // Using a fetch call to your backend subscribe endpoint
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/user/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (data.success) {
                setStatus('success');
                localStorage.setItem('emailPopupSeen', 'true');
                setTimeout(() => setIsVisible(false), 2500);
            } else { 
                setStatus('error'); 
            }
        } catch (error) { 
            setStatus('error'); 
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-[2000] flex items-center justify-center p-4">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl max-w-lg w-full relative">
                <button onClick={() => setIsVisible(false)} className="absolute top-5 right-5 text-gray-400 hover:text-black"><X size={24} /></button>
                <div className="text-center space-y-5">
                    <Sparkles size={40} className="text-purple-600 mx-auto"/>
                    {status === 'success' ? (
                        <h2 className="text-2xl font-serif text-green-600">Subscribed! Welcome to Royalty.</h2>
                    ) : (
                        <>
                            <h2 className="text-3xl font-serif font-bold">Unlock VIP Secrets</h2>
                            <p className="text-gray-600">Join for exclusive luxury cotton updates and VIP offers.</p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required className="w-full px-4 py-3 border rounded-xl outline-none" />
                                <button type="submit" className="w-full bg-black text-white py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-gray-800">Claim Offer</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default EmailCapturePopup;