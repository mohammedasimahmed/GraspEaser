import { scrape_webpage } from "./scraper";
import { google_llm_langchain } from "./gen_ai";
import { UserInputDataOptions } from "@repo/common/request";
import { generate_prompt } from "./prompts";

export async function text_content_handler(
  content: string,
  options: UserInputDataOptions,
) {
  const llm = google_llm_langchain;

  const ai_response = await llm.invoke([
    ["system", generate_prompt(options)],
    ["human", content],
  ]);

  return ai_response.content.toString();
}

export async function scrape_page_and_handle_text(
  url: string,
  options: UserInputDataOptions,
) {
  const content: string = await scrape_webpage(url);
  const response = await text_content_handler(content, options);
  return response;
}
