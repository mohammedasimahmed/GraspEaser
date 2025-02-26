import { NextFunction, Request, Response } from "express";
import { ApiError } from "../lib/errors/api_error";
import { HttpStatusCode } from "../enums/http_status_code";
import jwt from "jsonwebtoken"
import env from "../config/env";

export async function verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        const tokenMissing = new ApiError(
            "No token provided",
            HttpStatusCode.FORBIDDEN
        );
        next(tokenMissing);
        return;
    }

    try {
        jwt.verify(token, env.ACCESS_TOKEN_SECRET);
        next();
    } catch (error) {
        next(error);
    }
}