import { z } from "zod";
import { userInputDataOptionsSchema } from "./options";

export const inputFileSchema = z.object({
    file: z.object({
        fieldname: z.string(),
        originalname: z.string(),
        encoding: z.string(),
        mimetype: z.string(),
        destination: z.string(),
        filename: z.string(),
        path: z.string(),
        size: z.number().int().positive()
    }),
    options: userInputDataOptionsSchema
});

export type inputFileType = z.infer<typeof inputFileSchema>;
