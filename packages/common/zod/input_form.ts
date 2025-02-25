import { z } from "zod";

export const inputFormSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string()
})

export type inputFormTypes = z.infer<typeof inputFormSchema>