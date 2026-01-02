import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRoute from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express();
const port = process.env.PORT || 5001;

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRoute);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => { res.send("API Working"); });

// Initialize Connections and Start Server once
const startServer = async () => {
    try {
        await connectDB(); 
        console.log("DB Connected Successfully");
        connectCloudinary(); 
        app.listen(port, () => console.log(`Main Backend started on PORT : ${port}`));
    } catch (error) {
        console.error("Critical: Failed to start server:", error.message);
    }
};

startServer();