import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import env from "../config/env";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "node:fs/promises";

export const google_llm_langchain = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash-001",
  temperature: 0,
  maxRetries: 2,
  apiKey: env.API_KEY,
});

const google_genai = new GoogleGenerativeAI(env.API_KEY);
export const google_llm_model = google_genai.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const remove_temp_file = async (filePath: string) => {
  await fs.unlink(filePath);
};
