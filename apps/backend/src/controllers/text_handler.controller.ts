import { Request, Response } from "express";
import { text_content_handler } from "../lib/text_content_handler";
import { HttpStatusCode } from "../enums/http_status_code";

export async function text_handler(req: Request, res: Response) {
  const { text } = req.body;
  const content_simplified = await text_content_handler(text);
  res.status(HttpStatusCode.OK).json({
    content_simplified,
  });
}
