import { z } from "zod";
import { userInputDataOptionsSchema } from "./options";

export const inputUrlSchema = z.object({
  url: z.string().url(),
  options: userInputDataOptionsSchema,
});

export type inputUrlTypes = z.infer<typeof inputUrlSchema>;
