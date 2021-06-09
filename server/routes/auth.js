import { createNewUser } from "../controllers/auth.js";
import express from "express";

const router = express.Router();

router.post("/create", createNewUser);

export default router;
