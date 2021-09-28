import express from "express";
import { getColors, postColors } from "../controllers/colors.js";

const router = express.Router();
router.get("/", getColors);
router.get("/seed", postColors);

export default router;
