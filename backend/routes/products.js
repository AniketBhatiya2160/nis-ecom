import express from 'express';
import { vGetAllProduct,addProduct,updateProduct,deleteProduct } from '../controllers/product.js';

const router=express.Router();


router.get("/:v_id",vGetAllProduct)
router.post("/",addProduct)
router.delete("/:id",deleteProduct)
router.put("/:id",updateProduct)


export default router