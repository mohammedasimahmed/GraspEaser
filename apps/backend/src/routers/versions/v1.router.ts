import express from "express";
import url_router from "../url.router";
import text_router from "../text.router";
import file_router from "../file.router";

const v1_router = express.Router();

v1_router.use("/url", url_router);
v1_router.use("/text", text_router);
v1_router.use("/file", file_router);

export default v1_router;
