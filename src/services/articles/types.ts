import { z } from "zod";

const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.any(),
  thumbnail: z.string(),
  author: z.object({
    name: z.string(),
    avatar: z.string(),
  }),
  date: z.coerce.date(),
});
type Article = z.output<typeof articleSchema>;

export { articleSchema };
export type { Article };
