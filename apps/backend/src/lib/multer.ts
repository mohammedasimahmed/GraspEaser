import multer from "multer";
import { TEMPORARY_FILE_UPLOAD_DEST } from "../config/config";

export const upload = multer({ dest: TEMPORARY_FILE_UPLOAD_DEST });
