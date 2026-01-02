import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import razorpay from 'razorpay'

// global variables
const currency = 'INR' // Razorpay requires currency in uppercase
const deliveryCharge = 0


const razorpayInstance = new razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret : process.env.RAZORPAY_KEY_SECRET,
})

// Placing orders using COD Method
// --- Updated placeOrder function ---
const placeOrder = async (req,res) => {
    try {
        // 1. Add 'saveInfo' to the destructuring list
        const { userId, items, amount, address, saveInfo } = req.body; 

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        // 2. Add this block to save the address to the user profile
        if (saveInfo) {
            await userModel.findByIdAndUpdate(userId, { address });
        }

        res.json({success:true,message:"Order Placed"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
const placeOrderRazorpay = async (req, res) => {
    try {
        const { amount } = req.body;

        const options = {
            amount: amount * 100,
            currency,
            receipt: `rcptid_${Date.now()}`
        };

        const order = await razorpayInstance.orders.create(options);

        res.json({ success: true, order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to create Razorpay order", error: error.message });
    }
};

// 2. Verify Razorpay and Save Order
const verifyRazorpay = async (req, res) => {
    try {
        const { razorpay_order_id, items, amount, address, userId } = req.body;

        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

        if (orderInfo && orderInfo.status === 'paid') {
            const orderData = {
                userId,
                items,
                address,
                amount,
                paymentMethod: "Razorpay",
                payment: true,
                date: Date.now()
            };

            const newOrder = new orderModel(orderData);
            await newOrder.save();

            await userModel.findByIdAndUpdate(userId, { cartData: {} });

            res.json({ success: true, message: "Payment successful and order placed" });
        } else {
            res.json({ success: false, message: "Payment not completed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};


// All Orders data for Admin Panel
const allOrders = async (req,res) => {

    try {
        
        const orders = await orderModel.find({})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

// User Order Data For Forntend
const userOrders = async (req,res) => {
    try {
        
        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({success:true,orders})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// update order status from Admin Panel
const updateStatus = async (req,res) => {
    try {
        
        const { orderId, status } = req.body

        await orderModel.findByIdAndUpdate(orderId, { status })
        res.json({success:true,message:'Status Updated'})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export {verifyRazorpay,placeOrder, placeOrderRazorpay, allOrders, userOrders, updateStatus}