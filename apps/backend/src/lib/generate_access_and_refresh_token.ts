import { UserFormInput } from "@repo/common/request";
import jwt from "jsonwebtoken"
import env from "../config/env";

export default function generateAccessAndRefreshToken(user: UserFormInput) {
    const accessToken = jwt.sign(user, env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
    const refreshToken = jwt.sign(user, env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
    return { accessToken, refreshToken };
}