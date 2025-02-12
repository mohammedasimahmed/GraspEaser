import express from "express";
import { text_handler } from "../controllers/text_handler.controller";

const text_router = express.Router();

text_router.post("/text", text_handler);

export default text_router;
