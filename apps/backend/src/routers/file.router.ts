import express from "express";
import { file_handler } from "../controllers/file.controller";
import { upload } from "../lib/multer";

const file_router = express.Router();

file_router.post("/", upload.single("file"), file_handler);

export default file_router;
