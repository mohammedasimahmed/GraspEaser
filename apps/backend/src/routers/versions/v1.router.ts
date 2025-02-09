import express from "express";
import url_router from "../url.router";

const v1_router = express.Router();

v1_router.use("/url", url_router);

export default v1_router;
