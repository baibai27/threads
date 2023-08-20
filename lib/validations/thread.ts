import * as z from "zod";
export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(2, { message: "MINIMUM 2 CHARACTERS" }),
  accountId: z.string(),
});
export const CommentValidation = z.object({
  thread: z.string().nonempty().min(2, { message: "MINIMUM 2 CHARACTERS" }),
});
