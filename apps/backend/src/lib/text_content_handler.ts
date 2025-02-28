import { scrape_webpage } from "./scraper";
import { google_llm_langchain } from "./gen_ai";
import { UserInputDataOptions } from "@repo/common/request";
import { generate_prompt } from "./prompts";
import { generate_output } from "./generate_output";
import { splitText } from "./splitText";

export async function text_content_handler(
  content: string,
  options: UserInputDataOptions,
  username: string
) {
  const chunksArray = await splitText(content);
  return generate_output(chunksArray, username, options);
}

export async function scrape_page_and_handle_text(
  url: string,
  options: UserInputDataOptions,
  username: string
) {
  const content: string = await scrape_webpage(url);
  const response = await text_content_handler(content, options, username);
  return response;
}
