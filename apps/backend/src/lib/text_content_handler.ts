import { scrape_webpage } from "./scraper";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import env from "../config/env";

export async function text_content_handler(url: string) {
    const content:string = await scrape_webpage(url)
    const llm = new ChatGoogleGenerativeAI({
        model: "gemini-1.5-pro",
        temperature: 0,
        maxRetries: 2,
        apiKey: env.API_KEY
    });


    const ai_response = await llm.invoke([
        [
            "system",
            `You are a helpful assistant that will simplify the content 
             given to you and make it easy to understand without skipping 
             any content.`
        ],
        [
            "human",
            content
        ]
    ]);

    return (ai_response.content).toString()
}