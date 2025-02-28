import { z } from "zod";

export const chatSchema = z.object({
    prompt: z.string(),
})

export type chatType = z.infer<typeof chatSchema>;
