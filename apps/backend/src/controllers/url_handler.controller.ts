import { NextFunction, Request, Response } from "express";
import { scrape_page_and_handle_text } from "../lib/text_content_handler";
import { URLRequest } from "@repo/common/custom";
import { inputUrlSchema } from "@repo/common/zod/input_url"
import { HttpStatusCode } from "../enums/http_status_code";
import { ApiError } from "../lib/errors/api_error";

async function url_handler(request: URLRequest, response: Response, next: NextFunction) {
  const data = request.body;
  const validate = inputUrlSchema.safeParse(data);
  const username = request.user?.username;
  if (!validate.success) {
    const wrongTypeError = new ApiError(
      "Server received data with wrong data type",
      HttpStatusCode.BAD_REQUEST,
    );
    next(wrongTypeError)
    return
  }
  const { url, options } = data;
  const content_simplified: string = await scrape_page_and_handle_text(
    url,
    options,
    username as string
  );
  response.json({
    content_simplified: content_simplified,
  });
}

export default url_handler;
