import { createNewUser, login, verifyToken } from "../controllers/auth.js";
import express from "express";

const router = express.Router();

router.post("/create", createNewUser);
router.post("/login", login);
router.get("/verify-token", verifyToken);

export default router;
