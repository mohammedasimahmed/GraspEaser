import { NextFunction, Request, Response } from "express";
import { ApiError } from "../lib/errors/api_error";
import { HttpStatusCode } from "../enums/http_status_code";
import jwt, { JwtPayload } from "jsonwebtoken"
import env from "../config/env";
import { UserFormInput } from "@repo/common/request";
import { AuthenticateRequest } from "@repo/common/custom";

export async function verifyToken(req: AuthenticateRequest, res: Response, next: NextFunction) {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
        const tokenMissing = new ApiError(
            "No token provided",
            HttpStatusCode.FORBIDDEN
        );
        next(tokenMissing);
        return;
    }

    try {
        const decoded = jwt.verify(token, env.ACCESS_TOKEN_SECRET) as JwtPayload;
        const user = {
            username: decoded.username,
            email: decoded.email,
            password: decoded.password
        };
        req.user = user;
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(HttpStatusCode.UNAUTHORIZED).json({
                message: "Access token expired",
                tokenExpired: true
            });
            return;
        } else if (error instanceof jwt.JsonWebTokenError) {
            res.status(HttpStatusCode.UNAUTHORIZED).json({
                message: "Invalid access token",
                invalidToken: true
            });
            return;
        }

        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: "An error occurred while verifying the access token",
            tokenError: true
        })
        return;
    }
}