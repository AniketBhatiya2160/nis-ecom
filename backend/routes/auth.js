import express from 'express';
import { vlogin, vlogout, vregister } from '../controllers/auth.js';

const router=express.Router();
router.post("/vregister",vregister)
router.post("/vlogin",vlogin)
router.post("/vlogout",vlogout)

export default router