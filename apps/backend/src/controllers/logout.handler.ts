import { NextFunction, Request, Response } from "express";
import { HttpStatusCode } from "../enums/http_status_code";
import { ApiError } from "../lib/errors/api_error";

export async function logout_handler(req: Request, res: Response, next: NextFunction) {
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
            HttpStatusCode.UNAUTHORIZED
        )
        next(refreshTokenMissing)
        return;
    }

    res.clearCookie("refresh", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 0
    })

    res.status(HttpStatusCode.OK).json({ message: "Logged out successfully" })
}