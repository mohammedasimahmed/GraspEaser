import { Request, Response } from "express";
import { scrape_page_and_handle_text } from "../lib/text_content_handler";
import { URLRequest } from "@repo/common/custom";
import { inputUrlSchema } from "@repo/common/zod/input_url"
import { HttpStatusCode } from "../enums/http_status_code";

async function url_handler(request: URLRequest, response: Response) {
  const data = request.body;
  const validate = inputUrlSchema.safeParse(data);
  if (!validate.success) {
    response.status(HttpStatusCode.BAD_REQUEST).json({
      message: "Server received data with wrong data type."
    });
  }
  const { url, options } = data;
  const content_simplified: string = await scrape_page_and_handle_text(
    url,
    options
  );
  response.json({
    content_simplified: content_simplified,
  });
}

export default url_handler;
