import express from "express";
import { signup_handler } from "../controllers/signup.controller";

const user_router = express.Router();

user_router.post("/signup", signup_handler)

export default user_router;