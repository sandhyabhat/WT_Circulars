import express from "express";
import {
  getCirculars,
  getCircular,
  createCircular,
} from "../controllers/circulars.js";
import multer from "multer";
import path from "path";

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, path.basename(file.originalname)); //Appending extension
  },
});

var upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getCirculars);
router.get("/search", getCircular);
router.post("/create", upload.array("files", 10), createCircular);

export default router;
