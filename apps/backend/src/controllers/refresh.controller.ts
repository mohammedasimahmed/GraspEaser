import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import env from "../config/env";
import { HttpStatusCode } from "../enums/http_status_code";
import { ApiError } from "../lib/errors/api_error";

export async function refresh_handler(req: Request, res: Response, next: NextFunction) {
    if (!req.cookies) {
        const cookieMissing = new ApiError(
            "No cookies found",
            HttpStatusCode.BAD_REQUEST
        )
        next(cookieMissing)
        return;
    }
    const cookies = req.cookies;

    if (!cookies?.refresh) {
        const refreshTokenMissing = new ApiError(
            "Refresh token missing in cookies",
            HttpStatusCode.FORBIDDEN
        )
        next(refreshTokenMissing)
        return;
    }

    const refreshToken = cookies.refresh;
    try {
        const user = jwt.verify(refreshToken, env.REFRESH_TOKEN_SECRET) as JwtPayload;

        const accessToken = jwt.sign({
            username: user.name,
            email: user.email,
            password: user.password
        }, env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' })

        res.status(HttpStatusCode.OK).json({ accessToken })
    } catch (error) {
        next(error)
    }
}