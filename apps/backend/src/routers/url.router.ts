import express from "express";
import url_handler from "../controllers/url_handler.controller";

const url_router = express.Router();

url_router.post("/", url_handler);

export default url_router;
