import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("DB Connected Successfully");
    });

    // DEBUG: Check if the URI is actually being read
    if (!process.env.MONGODB_URI) {
        console.log("Error: MONGODB_URI is undefined. Check your .env file location.");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI); 
    } catch (error) {
        console.error("Initial MongoDB Connection Failed:", error.message);
        process.exit(1); 
    }
};

export default connectDB;