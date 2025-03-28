import { scrape_webpage } from "./scraper";
import { google_llm_langchain } from "./gen_ai";
import { UserInputDataOptions } from "@repo/common/request";
import { generate_prompt } from "./prompts";
import { generate_output } from "./generate_output";
import { splitText } from "./splitText";
import { ApiError } from "./errors/api_error";
import { HttpStatusCode } from "../enums/http_status_code";

export async function text_content_handler(
  content: string,
  options: UserInputDataOptions,
  username: string,
) {
  if (content.length === 0) return "";
  const chunksArray = await splitText(content);
  return generate_output(chunksArray, username, options);
}

export async function scrape_page_and_handle_text(
  url: string,
  options: UserInputDataOptions,
  username: string,
) {
  try {
    const content: string = await scrape_webpage(url);
    console.log("Content is");
    console.log(content);
    const response = await text_content_handler(content, options, username);
    console.log("responnse is");
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    const pageScrapeError = new ApiError(
      "Unable to scrape the webpage",
      HttpStatusCode.SERVICE_UNAVAILABLE,
    );
    throw pageScrapeError;
    return "";
  }
}
