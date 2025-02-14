import { Request, Response } from "express";
import { text_content_handler } from "../lib/text_content_handler";
import { HttpStatusCode } from "../enums/http_status_code";
import { TextRequest } from "@repo/common/custom";

export async function text_handler(req: TextRequest, res: Response) {
  const { text, options } = req.body;
  const content_simplified = await text_content_handler(text, options);
  res.status(HttpStatusCode.OK).json({
    content_simplified,
  });
}
