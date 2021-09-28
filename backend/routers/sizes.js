import express from "express";
import { getSizes, postSizes } from "../controllers/sizes.js";

const router = express.Router();
router.get("/", getSizes);
router.get("/seed", postSizes);

export default router;
