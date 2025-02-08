const env = {
  BACKEND_URL:
    process.env.BACKEND_URL ||
    "postgresql://postgres:password@localhost:5432/mydb?schema=public",
  PORT: process.env.PORT || 5000,
  FRONTEND_URLS: [process.env.FRONTEND_URL || "http://localhost:3000"],
};

export default env;
