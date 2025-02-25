import { UserFormRequest } from "@repo/common/custom";
import { inputFormSchema } from "@repo/common/zod/input_form";
import { NextFunction, Response } from "express";
import prisma from "../lib/prisma";
import bcrypt from "bcrypt";
import { ApiError } from "../lib/errors/api_error";
import { HttpStatusCode } from "../enums/http_status_code";

export async function signup_handler(req: UserFormRequest, res: Response, next: NextFunction) {
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
        const existingUserByUsername = await prisma.user.findUnique({
            where: { username },
        });

        if (existingUserByUsername) {
            const usernameTaken = new ApiError(
                "Username already taken",
                HttpStatusCode.BAD_REQUEST,
            );
            next(usernameTaken)
            return
        }

        const existingUserByEmail = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUserByEmail) {
            const emailTaken = new ApiError(
                "Email already registered",
                HttpStatusCode.BAD_REQUEST,
            );
            next(emailTaken)
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        res.status(HttpStatusCode.CREATED).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        next(error)
    }
}
