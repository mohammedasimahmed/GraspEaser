import express from "express";
import { signup_handler } from "../controllers/signup.controller";
import { signin_handler } from "../controllers/signin.controller";

const user_router = express.Router();

user_router.post("/signup", signup_handler)
user_router.post("/signin", signin_handler)

export default user_router;