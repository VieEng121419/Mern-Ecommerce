import express from "express";
import { getProducts, postProducts } from "../controllers/products.js";

const router = express.Router();
router.get("/", getProducts);
router.get("/seed", postProducts);

export default router;
