import express from "express";
import url_handler from "../controllers/url_handler";
import { text_content_handler } from "../lib/text_content_handler";

const url_router = express.Router();

url_router.post("/", url_handler);

export default url_router;
