import express from 'express';
import { listProducts, addProduct, removeProduct, singleProduct, updateProduct } from '../controllers/productController.js';
import adminAuth from '../middleware/adminAuth.js';
import upload from '../middleware/multer.js';

const productRouter = express.Router();

/**
 * Route: Add Product
 * Middleware: adminAuth (Security), upload.fields (8-Image Buffer)
 * This route now supports up to 8 images as per the updated controller requirements.
 */
productRouter.post('/add', adminAuth, upload.fields([
    { name: 'image1', maxCount: 1 }, 
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 }, 
    { name: 'image4', maxCount: 1 },
    { name: 'image5', maxCount: 1 }, 
    { name: 'image6', maxCount: 1 },
    { name: 'image7', maxCount: 1 }, 
    { name: 'image8', maxCount: 1 }
]), addProduct);

/**
 * Route: Remove Product
 * Middleware: adminAuth
 */
productRouter.post('/remove', adminAuth, removeProduct);

/**
 * Route: Get Single Product Details
 * Logic: Fetches product by ID for details page or editing.
 */
productRouter.post('/single', singleProduct);

/**
 * Route: List All Products
 * Logic: Public retrieval for the Collection and List pages.
 */
productRouter.get('/list', listProducts);

/**
 * Route: Update Product
 * Middleware: adminAuth, upload.fields
 * Supports updating text fields and the 8-image portfolio.
 */
productRouter.post('/update', adminAuth, upload.fields([
    { name: 'image1', maxCount: 1 }, 
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 }, 
    { name: 'image4', maxCount: 1 },
    { name: 'image5', maxCount: 1 }, 
    { name: 'image6', maxCount: 1 },
    { name: 'image7', maxCount: 1 }, 
    { name: 'image8', maxCount: 1 }
]), updateProduct);

export default productRouter;