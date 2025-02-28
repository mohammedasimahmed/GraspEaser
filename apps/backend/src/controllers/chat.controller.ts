import { Response, NextFunction } from "express";
import { HttpStatusCode } from "../enums/http_status_code";
import { ChatRequest } from "@repo/common/custom";
import { ApiError } from "../lib/errors/api_error";
import { google_llm_langchain } from "../lib/gen_ai";
import { chatSchema } from "@repo/common/zod/chat"
import { userMemoryStoreMap } from "../lib/user_map";

export async function chat_handler(req: ChatRequest, res: Response, next: NextFunction) {
    const data = req.body;
    const username = req.user?.username as string;

    const validate = chatSchema.safeParse(data);
    if (!validate.success) {
        const wrongTypeError = new ApiError(
            "Server received data with wrong data type",
            HttpStatusCode.BAD_REQUEST,
        );
        next(wrongTypeError)
        return;
    }

    const { prompt } = data;
    console.log(data)
    const searches = await userMemoryStoreMap.get(username)?.similaritySearch(prompt);
    console.log("searches")
    console.log(searches)

    let content = "";
    searches?.forEach((search) => {
        content = content + "\n\n" + search.pageContent;
    });


    const response = await google_llm_langchain.invoke([
        ["system", prompt],
        ["human", content],
    ]);

    res.status(HttpStatusCode.OK).json({
        ai_response: response.content.toString(),
    });
}
