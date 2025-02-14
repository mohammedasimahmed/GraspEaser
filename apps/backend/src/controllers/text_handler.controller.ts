import { Request, Response } from "express";
import { text_content_handler } from "../lib/text_content_handler";
import { HttpStatusCode } from "../enums/http_status_code";
import { TextRequest } from "@repo/common/custom";
import { inputTextSchema } from "@repo/common/zod/input_text"

export async function text_handler(req: TextRequest, res: Response) {
  const data = req.body;
  const validate = inputTextSchema.safeParse(data);
  if (!validate.success) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      message: "Server received data with wrong data type."
    });
  }
  const { text, options } = data;
  const content_simplified = await text_content_handler(text, options);
  res.status(HttpStatusCode.OK).json({
    content_simplified,
  });
}
