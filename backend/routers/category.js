import express from "express";
import { getCategory, postCategory } from "../controllers/category.js";

const router = express.Router();
router.get("/", getCategory);
router.get("/seed", postCategory);

export default router;
