import { z, defineCollection } from "astro:content";

let recipeCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    ingredients: z.array(z.string()),
    steps: z.array(z.string()),
  }),
});

export const collections = {
  recipes: recipeCollection,
};
