import express from "express";
import env from "./config/env";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import cookie_parser from "cookie-parser";
import { cors_config } from "./config/config";
import v1_router from "./routers/versions/v1.router";
import { error_handler } from "./middlewares/error.middleware";

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors(cors_config));
app.use(cookie_parser());

// Security
app.disable("x-powered-by");

app.use("/api/v1", v1_router);
app.use(error_handler);

app.listen(env.PORT, () => {
  console.log(`Server is running on http://localhost:${env.PORT}`);
});
