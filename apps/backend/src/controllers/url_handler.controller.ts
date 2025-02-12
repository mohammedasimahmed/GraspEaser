import { Request, Response } from "express";
import { scrape_page_and_handle_text } from "../lib/text_content_handler";

async function url_handler(request: Request, response: Response) {
  const { url } = request.body;
  const content_simplified: string = await scrape_page_and_handle_text(url);
  response.json({
    content_simplified: content_simplified,
  });
}

export default url_handler;
