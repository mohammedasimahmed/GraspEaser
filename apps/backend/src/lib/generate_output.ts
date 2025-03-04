import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { vectorSaveAndSearch } from "./vectorSaveAndSearch";
import { generate_prompt } from "./prompts";
import { UserInputDataOptions } from "@repo/common/request";
import { Document } from "langchain/document";

export async function generate_output(chunksArray: Document[], username: string, options: UserInputDataOptions) {
    const prompt = generate_prompt(options);
    const searches = await vectorSaveAndSearch(chunksArray, prompt, username);

    let content = "";
    searches?.forEach((search) => {
        content = content + "\n\n" + search.pageContent;
    });

    const llm = new ChatGoogleGenerativeAI({
        model: "gemini-1.5-pro",
        temperature: 0,
        maxRetries: 2,
        apiKey: process.env.API_KEY,
    });

    const ai_response = await llm.invoke([
        ["system", prompt],
        ["human", content],
    ]);

    return ai_response.content.toString();
}