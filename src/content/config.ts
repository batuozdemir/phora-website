import { defineCollection, z } from 'astro:content';

const solutionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    focus: z.array(z.string()),
    challenges: z.array(z.object({
        title: z.string(),
        description: z.string()
    })),
  }),
});

export const collections = {
  'solutions': solutionsCollection,
};
