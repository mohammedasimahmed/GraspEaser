import express from "express";
import { chat_handler } from "../controllers/chat.controller";

const chat_router = express.Router();

chat_router.post("/", chat_handler);

export default chat_router;
