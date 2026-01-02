import React, { useContext, useState, useEffect } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod');
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products, getMatrixPrice } = useContext(ShopContext);
    
    const [saveAddress, setSaveAddress] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })

    // Fetch saved address on mount to auto-populate fields
    useEffect(() => {
        const fetchAddress = async () => {
            if (token) {
                try {
                    const response = await axios.post(backendUrl + '/api/user/get-address', {}, { headers: { token } });
                    if (response.data.success && response.data.address) {
                        setFormData(prev => ({ ...prev, ...response.data.address }));
                    }
                } catch (error) {
                    console.error("Error fetching address:", error);
                }
            }
        };
        fetchAddress();
    }, [token, backendUrl]);

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {

            let orderItems = []

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            // Extract variant info and calculate correct matrix price
                            const [tc, size] = item.split('-');
                            itemInfo.size = size;
                            itemInfo.threadCount = tc;
                            itemInfo.price = getMatrixPrice(itemInfo, item, 'sale'); 
                            itemInfo.quantity = cartItems[items][item];
                            
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee,
                paymentMethod: method 
            }

            // Save address if the checkbox is checked
            if (saveAddress && token) {
                await axios.post(backendUrl + '/api/user/update-address', { address: formData }, { headers: { token } });
            }

            switch (method) {
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
                    if (response.data.success) {
                        setCartItems({})
                        navigate('/orders')
                        toast.success("Order Reserved Successfully")
                    } else {
                        toast.error(response.data.message)
                    }
                    break;

                case 'stripe':
                    const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } })
                    if (responseStripe.data.success) {
                        const { session_url } = responseStripe.data
                        window.location.replace(session_url)
                    } else {
                        toast.error(responseStripe.data.message)
                    }
                    break;

                case 'razorpay':
                    const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } })
                    if (responseRazorpay.data.success) {
                        toast.info("Razorpay gateway initializing...");
                    } else {
                        toast.error(responseRazorpay.data.message)
                    }
                    break;

                default:
                    break;
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-12 pt-10 pb-20 min-h-[80vh] border-t border-stone-100 bg-white'>
            <div className='flex flex-col gap-6 w-full sm:max-w-[480px]'>
                <div className='mb-4'>
                    <Title text1={'DELIVERY'} text2={'DETAILS'} />
                    <p className='text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-2'>Atelier Shipping Information</p>
                </div>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-stone-200 rounded py-2.5 px-4 w-full text-sm outline-none transition-all' type="text" placeholder='First name' />
                    <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-stone-200 rounded py-2.5 px-4 w-full text-sm outline-none transition-all' type="text" placeholder='Last name' />
                </div>
                <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-stone-200 rounded py-2.5 px-4 w-full text-sm outline-none transition-all' type="email" placeholder='Email address' />
                <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-stone-200 rounded py-2.5 px-4 w-full text-sm outline-none transition-all' type="text" placeholder='Street address' />
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-stone-200 rounded py-2.5 px-4 w-full text-sm outline-none transition-all' type="text" placeholder='City' />
                    <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-stone-200 rounded py-2.5 px-4 w-full text-sm outline-none transition-all' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-stone-200 rounded py-2.5 px-4 w-full text-sm outline-none transition-all' type="number" placeholder='Zipcode' />
                    <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-stone-200 rounded py-2.5 px-4 w-full text-sm outline-none transition-all' type="text" placeholder='Country' />
                </div>
                <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-stone-200 rounded py-2.5 px-4 w-full text-sm outline-none transition-all' type="number" placeholder='Phone number' />
                
                <div onClick={() => setSaveAddress(!saveAddress)} className='flex items-center gap-3 mt-4 cursor-pointer'>
                    <div className={`w-4 h-4 border flex items-center justify-center ${saveAddress ? 'bg-stone-900 border-stone-900' : 'border-stone-300'}`}>
                        {saveAddress && <div className='w-2 h-2 bg-white rounded-full'></div>}
                    </div>
                    <p className='text-[10px] text-stone-500 font-bold uppercase tracking-widest'>Save address for future atelier curation</p>
                </div>
            </div>

            <div className='flex-1'>
                <div className='bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm'>
                    <CartTotal />

                    <div className='mt-12'>
                        <Title text1={'PAYMENT'} text2={'METHOD'} />
                        <p className='text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-2 mb-6'>Secure Bespoke Checkout</p>
                        
                        <div className='flex gap-3 flex-col lg:flex-row'>
                            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border border-stone-200 p-3 px-4 cursor-pointer rounded bg-white hover:bg-stone-100 transition-all'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-stone-900 border-stone-900' : 'border-stone-300'}`}></p>
                                <img className='h-5 mx-4' src={assets.stripe_logo} alt="Stripe" />
                            </div>
                            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border border-stone-200 p-3 px-4 cursor-pointer rounded bg-white hover:bg-stone-100 transition-all'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-stone-900 border-stone-900' : 'border-stone-300'}`}></p>
                                <img className='h-5 mx-4' src={assets.razorpay_logo} alt="Razorpay" />
                            </div>
                            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border border-stone-200 p-3 px-4 cursor-pointer rounded bg-white hover:bg-stone-100 transition-all'>
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-stone-900 border-stone-900' : 'border-stone-300'}`}></p>
                                <p className='text-stone-500 text-xs font-bold uppercase mx-4 tracking-widest'>Cash on Delivery</p>
                            </div>
                        </div>

                        <div className='w-full text-end mt-10'>
                            <button type='submit' className='bg-stone-900 text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] rounded hover:bg-black transition-all shadow-lg active:scale-95'>
                                Confirm Luxury Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder