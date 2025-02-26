import { UserFormRequest } from "@repo/common/custom";
import { inputFormSchema } from "@repo/common/zod/input_form";
import { NextFunction, Response } from "express";
import prisma from "../lib/prisma";
import bcrypt from "bcrypt";
import { ApiError } from "../lib/errors/api_error";
import { HttpStatusCode } from "../enums/http_status_code";
import generateAccessAndRefreshToken from "../lib/generate_access_and_refresh_token";

export async function signin_handler(req: UserFormRequest, res: Response, next: NextFunction) {
    const data = req.body;
    const { username, email, password } = data;

    const validate = inputFormSchema.safeParse(data);
    if (!validate.success) {
        const wrongTypeError = new ApiError(
            "Server received data with wrong data type",
            HttpStatusCode.BAD_REQUEST,
        );
        next(wrongTypeError)
        return
    }

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                AND: [
                    { username: username },
                    { email: email },
                ],
            },
        });


        if (!existingUser) {
            const userNotFound = new ApiError(
                "User not found",
                HttpStatusCode.NOT_FOUND,
            );
            next(userNotFound);
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            const wrongPassword = new ApiError(
                "Wrong password",
                HttpStatusCode.UNAUTHORIZED,
            );
            next(wrongPassword);
            return;
        }

        const { accessToken, refreshToken } = generateAccessAndRefreshToken(existingUser);

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            sameSite:"none", secure: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(HttpStatusCode.OK).json({ user: existingUser, accessToken });
    } catch (error) {
        next(error)
    }
}
