import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true 
    },
    date: { 
        type: Number, 
        default: Date.now 
    }
});

const subscriberModel = mongoose.models.subscriber || mongoose.model("subscriber", subscriberSchema);
export default subscriberModel;