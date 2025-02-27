import { CorsOptions } from "cors";
import env from "./env";

export const cors_config: CorsOptions = {
  origin: env.FRONTEND_URLS,
  credentials: true, 
};

export const TEMPORARY_FILE_UPLOAD_DEST = ".uploads/";
