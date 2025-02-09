import { Request, Response } from "express";
import { text_content_handler } from "../lib/text_content_handler";

async function url_handler(request: Request, response: Response) {
  const url: string = request.body();
  if (url.includes("youtube")) {
  } else {
    const content_simplified: string = await text_content_handler(url);
    return response.json({
      content_simplified: content_simplified,
    });
  }
}

export default url_handler;
