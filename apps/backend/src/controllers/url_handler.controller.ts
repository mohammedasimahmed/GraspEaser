import { Request, Response } from "express";
import { scrape_page_and_handle_text } from "../lib/text_content_handler";
import { URLRequest } from "@repo/common/custom";

async function url_handler(request: URLRequest, response: Response) {
  const { url, options } = request.body;
  const content_simplified: string = await scrape_page_and_handle_text(
    url,
    options
  );
  response.json({
    content_simplified: content_simplified,
  });
}

export default url_handler;
