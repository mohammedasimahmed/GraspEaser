import { z } from "zod"
export const inputTypesValues = ["text", "url", "video", "image", "document"] as const;
export const detailTypesValues = ["detailed", "simple", "basic"] as const;

export const userInputDataOptionsSchema = z.object({
    word_limit: z.number().int(),
    input_type: z.enum(inputTypesValues),
    detail_type: z.enum(detailTypesValues),
});