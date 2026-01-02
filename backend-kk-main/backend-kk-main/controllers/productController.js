import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const safeNumber = (val) => {
    const num = Number(val);
    return isNaN(num) ? 0 : num;
};

export const addProduct = async (req, res) => {
    try {
        const { name, description, price, oldPrice, category, subCategory, bestseller, threadCounts, rashi, priceMatrix, colors } = req.body;
        const imagesUrl = [];

        // Support up to 12 image slots for color variety
        for (let i = 1; i <= 12; i++) {
            const imgFile = req.files && req.files[`image${i}`] && req.files[`image${i}`][0];
            if (imgFile) {
                const result = await cloudinary.uploader.upload(imgFile.path, { resource_type: 'image' });
                imagesUrl.push(result.secure_url);
            } else if (req.body[`imageUrl${i}`]) {
                imagesUrl.push(req.body[`imageUrl${i}`]);
            }
        }

        const productData = {
            name,
            description,
            category,
            subCategory,
            rashi: rashi || "",
            price: safeNumber(price),
            oldPrice: safeNumber(oldPrice),
            bestseller: bestseller === "true",
            threadCounts: threadCounts ? JSON.parse(threadCounts) : {},
            priceMatrix: priceMatrix ? JSON.parse(priceMatrix) : {},
            colors: colors ? JSON.parse(colors) : [],
            images: imagesUrl,
            date: Date.now()
        };

        const product = new productModel(productData);
        await product.save();
        res.json({ success: true, message: "Product Added to Atelier Portfolio" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id, name, description, price, oldPrice, category, subCategory, bestseller, rashi, threadCounts, priceMatrix, colors } = req.body;
        const imagesUrl = [];
        
        for (let i = 1; i <= 12; i++) {
            const imgFile = req.files && req.files[`image${i}`] && req.files[`image${i}`][0];
            if (imgFile) {
                const result = await cloudinary.uploader.upload(imgFile.path, { resource_type: 'image' });
                imagesUrl.push(result.secure_url);
            } else if (req.body[`imageUrl${i}`]) { 
                imagesUrl.push(req.body[`imageUrl${i}`]); 
            }
        }

        const updateData = {
            name,
            description,
            category,
            subCategory,
            rashi: rashi || "",
            price: safeNumber(price),
            oldPrice: safeNumber(oldPrice),
            bestseller: bestseller === "true" || bestseller === true,
            threadCounts: typeof threadCounts === 'string' ? JSON.parse(threadCounts) : threadCounts,
            priceMatrix: typeof priceMatrix === 'string' ? JSON.parse(priceMatrix) : priceMatrix,
            colors: typeof colors === 'string' ? JSON.parse(colors) : colors
        };

        if (imagesUrl.length > 0) updateData.images = imagesUrl;
        
        await productModel.findByIdAndUpdate(id, updateData);
        res.json({ success: true, message: "Atelier Variant Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product Removed" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const singleProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.body.productId);
        res.json({ success: true, product });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}