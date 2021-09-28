import express from "express";
import {
  getUser,
  getUsers,
  createUser,
  postUsers,
  loginUser,
} from "../controllers/users.js";

const router = express.Router();
router.get("/", getUsers);
router.post("/userInfo", getUser);
router.get("/seed", postUsers);
router.post("/register", createUser);
router.post("/login", loginUser);

export default router;
