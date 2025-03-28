import dotenv from "dotenv";
dotenv.config();

const env = {
  BACKEND_URL:
    process.env.BACKEND_URL ||
    "postgresql://postgres:password@localhost:5432/mydb?schema=public",
  PORT: process.env.PORT || 5000,
  FRONTEND_URLS: [process.env.FRONTEND_URL || "http://localhost:3000"],
  API_KEY: process.env.API_KEY || "",
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "secret",
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "secret",
};

console.log(env);
export default env;
