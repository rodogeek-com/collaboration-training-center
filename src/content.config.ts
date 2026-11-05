import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    guideId: z.string(),
    lang: z.enum(['en','es']),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    minutes: z.number(),
    platforms: z.array(z.string()),
    requirements: z.string(),
    outcome: z.string(),
    trouble: z.string(),
    lastVerified: z.coerce.date(),
    status: z.enum(['draft','published','needs-review']).default('published')
  })
});
export const collections = { guides };
