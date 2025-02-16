/*
Prompt parameters: 
- word_limit -> 50, 100, 200, 300, 400, 500
- detail: detailed, basic, simple
- input_type: text, url, video, photo, document
*/

import {
  DetailTypes,
  InputTypes,
  UserInputDataOptions,
} from "@repo/common/request";

const BASE_PROMPT =
  "You are an intelligent assistant. Answer my question carefully.";

const input_type_prompt_map: Record<InputTypes, string> = {
  text: "Explain the provided text to me",
  url: "This is the scraped data of a webpage url. Explain this to me",
  video: "Explain the provided video to me",
  image: "Explain the provided image to me",
  document: "Explain the provided document to me",
};

const detail_prompt_map: Record<DetailTypes, string> = {
  detailed:
    "The explanation should be detailed, it should capture every information in it.",
  simple:
    "The explanation should be very simple, as if explaining to a 12 year old.",
  basic:
    "The explanation should be basic, just giving a vague idea of what it is.",
};

export function generate_prompt(options: UserInputDataOptions) {
  const prompt = `${BASE_PROMPT} ${input_type_prompt_map[options.input_type]}. Explanation should be around ${options.word_limit} words. ${detail_prompt_map[options.detail_type]}`;
  console.log("Prompt: -------------------------------------------");
  console.log(prompt);
  console.log("-------------------------------------------");
  return prompt;
}
