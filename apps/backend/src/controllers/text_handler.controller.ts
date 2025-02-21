import { Request, Response, NextFunction } from "express";
import { text_content_handler } from "../lib/text_content_handler";
import { HttpStatusCode } from "../enums/http_status_code";
import { TextRequest } from "@repo/common/custom";
import { inputTextSchema } from "@repo/common/zod/input_text"
import { ApiError } from "../lib/errors/api_error";

export async function text_handler(req: TextRequest, res: Response, next:NextFunction) {
  const data = req.body;
  const validate = inputTextSchema.safeParse(data);
  if (!validate.success) {
    const wrongTypeError = new ApiError(
      "Server received data with wrong data type",
      HttpStatusCode.BAD_REQUEST,
    );
    next(wrongTypeError)
    return
  }
  const { text, options } = data;
  const content_simplified = await text_content_handler(text, options);
  res.status(HttpStatusCode.OK).json({
    content_simplified,
  });
}
