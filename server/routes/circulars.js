import express from "express";

import {
  getCirculars,
  getCircular,
  createCircular,
} from "../controllers/circulars.js";

const router = express.Router();

router.get("/", getCirculars);
router.get("/search", getCircular);
router.post("/create", createCircular);

export default router;
