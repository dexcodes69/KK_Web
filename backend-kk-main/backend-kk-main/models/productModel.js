import mongoose from "mongoose";

// Preserving existing logic for nested size pricing
const sizePricingSchema = new mongoose.Schema({
  sale: { type: Number, default: 0 },
  original: { type: Number, default: 0 }
}, { _id: false });

// Preserving component-level pricing structure
const componentPriceSchema = new mongoose.Schema({
  SINGLE: { type: sizePricingSchema, default: () => ({}) },
  DOUBLE: { type: sizePricingSchema, default: () => ({}) },
  QUEEN: { type: sizePricingSchema, default: () => ({}) },
  KING: { type: sizePricingSchema, default: () => ({}) }
}, { _id: false });

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, default: 0 },
    images: { type: Array, required: true },
    
    // Updated to ensure one strict Category and Sub-category
    // These match the options seen in your UI: "Luxury Bedding" or "Celestial Rashi"
    // And subcategories like "Complete Bed Set", "Fitted Sheet", "Flat Sheet", or "Duvet Cover"
    category: { 
      type: String, 
      required: true 
    },
    subCategory: { 
      type: String, 
      required: true 
    }, 
    
    // Preserving Thread Count logic
    threadCounts: {
      '300TC': { type: Boolean, default: false },
      '500TC': { type: Boolean, default: false }
    },
    
    // Preserving Rashi logic for the "Celestial Rashi" category
    rashi: { type: String, default: "" },
    
    // Preserving the nested Price Matrix for different sizes
    priceMatrix: { type: Object, default: {} },
    
    bestseller: { type: Boolean, default: false },
    date: { type: Number, required: true }
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;