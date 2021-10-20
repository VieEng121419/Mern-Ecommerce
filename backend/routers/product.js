import express from "express";
import {
  getProducts,
  postProducts,
  createProduct,
  deleteProducts,
  updateProducts,
} from "../controllers/products.js";
import { upload } from "../helpers/filehelper.js";
import { isAdmin, isAuth } from "../utils.js";

const router = express.Router();

router.get("/", isAuth, isAdmin, getProducts);
router.get("/seed", postProducts);
router.post("/add-product", isAuth, upload.array("files"), createProduct);
router.put("/:id", upload.array("files"), updateProducts);
router.delete("/", isAuth, deleteProducts);

export default router;
