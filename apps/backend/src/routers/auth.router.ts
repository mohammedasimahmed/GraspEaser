import express from "express";
import { signup_handler } from "../controllers/signup.controller";
import { signin_handler } from "../controllers/signin.controller";

const auth_router = express.Router();

auth_router.post("/signup", signup_handler)
auth_router.post("/signin", signin_handler)

export default auth_router;