import { Request, Response } from "express";
import { text_content_handler } from "../lib/text_content_handler";

async function url_handler(request: Request, response: Response) {
  const { url } = request.body;
  const content_simplified: string = await text_content_handler(url);
  response.json({
    content_simplified: content_simplified,
  });
}

export default url_handler;
