import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const AREAS = ['Design', 'Product', 'Marketing', 'Strategy', 'Analytics'] as const;
export const ERAS = ['2020–2023', '2024–now'] as const;
export const TAGS = ['design', 'marketing', 'strategy', 'startups', 'investing', 'ai', 'cannabis', 'personal'] as const;

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    organization: z.string(),
    role: z.string(),
    period: z.string(),
    era: z.enum(ERAS),
    areas: z.array(z.enum(AREAS)).min(1),
    tags: z.array(z.enum(TAGS)).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    cover: z.string().optional(),
    outcomes: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    originalDate: z.coerce.date().optional(),
    tags: z.array(z.enum(TAGS)).min(1),
    canonical: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing };
