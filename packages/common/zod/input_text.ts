import { z } from "zod";
import { userInputDataOptionsSchema } from "./options";

export const inputTextSchema = z.object({
    text: z.string(),
    options: userInputDataOptionsSchema
})

export type inputTextType = z.infer<typeof inputTextSchema>;
