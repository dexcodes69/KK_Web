import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async ( event, orderId ) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status' , {orderId, status:event.target.value}, { headers: {token}})
      if (response.data.success) {
        toast.success("Order status updated")
        await fetchAllOrders()
      }
    } catch (error) {
      toast.error("Error updating status")
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div className='p-4'>
      <h3 className='font-serif text-3xl mb-8 text-stone-800 italic'>Order Atelier Management</h3>
      <div className='space-y-6'>
        {
          orders.map((order, index) => (
            <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-6 items-start border border-stone-100 bg-white p-6 md:p-10 rounded-2xl shadow-sm transition-hover hover:shadow-md' key={index}>
              <div className='bg-stone-50 p-4 rounded-xl flex items-center justify-center'>
                 <img className='w-10 opacity-40' src={assets.parcel_icon} alt="" />
              </div>
              
              <div>
                <div className='mb-4'>
                  {order.items.map((item, idx) => (
                    <div key={idx} className='py-1 border-b border-stone-50 last:border-0'>
                       <p className='font-bold text-stone-800 text-sm'>{item.name} <span className='text-stone-400 font-normal'>x {item.quantity}</span></p>
                       <p className='text-[10px] text-stone-400 uppercase tracking-widest'>{item.size} — {item.subCategory || 'Standard component'}</p>
                    </div>
                  ))}
                </div>
                <div className='text-xs space-y-1'>
                  <p className='font-bold text-stone-900 text-[13px]'>{order.address.firstName} {order.address.lastName}</p>
                  <p className='text-stone-500'>{order.address.street}, {order.address.city}</p>
                  <p className='text-stone-500 uppercase tracking-tighter'>{order.address.state}, {order.address.country} {order.address.zipcode}</p>
                  <p className='pt-2 font-medium'>{order.address.phone}</p>
                </div>
              </div>

              <div className='text-xs space-y-2'>
                <div className='bg-stone-50 p-3 rounded-lg'>
                  <p className='font-bold uppercase tracking-widest text-[9px] text-stone-400 mb-1'>Details</p>
                  <p>Items: {order.items.length}</p>
                  <p>Method: {order.paymentMethod}</p>
                  <p className={order.payment ? 'text-green-600 font-bold' : 'text-amber-600 font-bold'}>
                    Payment: { order.payment ? 'Verified' : 'Pending' }
                  </p>
                </div>
                <p className='text-stone-400 italic'>Placed on {new Date(order.date).toLocaleDateString()}</p>
              </div>

              <div className='flex flex-col items-center justify-center h-full border-x border-stone-50 px-4'>
                 <p className='text-xl font-serif font-bold text-stone-900'>{currency}{order.amount}</p>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='text-[10px] font-bold uppercase tracking-widest text-stone-400'>Dispatch Status</p>
                <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='w-full p-3 bg-stone-900 text-white rounded-lg text-xs font-bold appearance-none cursor-pointer hover:bg-stone-800 outline-none'>
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders