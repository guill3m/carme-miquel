import { defineCollection, reference, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const meta = z
	.object({
		title: z.string().optional(),
		description: z.string().optional(),
	})
	.optional()

const article = defineCollection({
	loader: glob({ base: 'src/content/articles', pattern: '*.mdx' }),
	schema: z.object({
		meta,
		title: z.string(),
		date: z.date(),
		publisher: z.string().optional().default('Levante EMV'),
		tags: z.array(reference('article-tag')),
	}),
})

const articleTag = defineCollection({
	loader: file('src/content/article-tags.yaml'),
	schema: z.object({
		name: z.string(),
		parent: z.optional(reference('article-tag')),
	}),
})

const book = defineCollection({
	loader: glob({
		base: 'src/content/books',
		pattern: ['*.mdx', '!*.documents.mdx'],
	}),
	schema: ({ image }) =>
		z.object({
			meta,
			title: z.string(),
			publisher: z.string(),
			year: z.number().min(1900).max(2024),
			audience: z.array(reference('book-audience')),
			cover: image(),
			isbn: z
				.string()
				.regex(
					/^(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$$/,
				)
				.optional(),
			awards: z.string().array().optional(),
			details: z
				.object({
					what: z.string(),
					who: z.string(),
				})
				.array()
				.optional(),
		}),
})

const bookAudience = defineCollection({
	loader: file('src/content/book-audiences.yaml'),
	schema: z.object({
		name: z.string(),
		order: z.number(),
	}),
})

const bookDocuments = defineCollection({
	loader: glob({ base: 'src/content/books', pattern: '*.documents.mdx' }),
	schema: z.object({
		book: reference('book'),
		meta,
		title: z.string(),
	}),
})

const interview = defineCollection({
	loader: glob({ base: 'src/content/interviews', pattern: '*.mdx' }),
	schema: ({ image }) =>
		z.object({
			meta,
			title: z.string().optional(),
			date: z.date(),
			dateFormated: z.string().optional(),
			issue: z.string().optional(),
			interviewer: z.string(),
			format: z.enum(['audio', 'text', 'video']),
			language: z.enum(['ca', 'es']).optional().default('ca'),
			type: reference('interview-type'),
			asideImage: image().optional(),
			asideContent: z.string().optional(),
		}),
})

const interviewType = defineCollection({
	loader: file('src/content/interview-types.yaml'),
	schema: z.object({
		namePlural: z.string(),
		nameSingular: z.string(),
	}),
})

const video = defineCollection({
	loader: glob({ base: 'src/content/videos', pattern: '*.mdx' }),
	schema: ({ image }) =>
		z.object({
			meta,
			title: z.string(),
			date: z.date(),
			thumbnail: image(),
			video: z.object({
				aspectRatio: z.enum(['16:9', '4:3']).optional().default('16:9'),
				id: z.string(),
				platform: z.enum(['vimeo', 'youtube', 'youtube-list']),
			}),
		}),
})

export const collections = {
	article,
	'article-tag': articleTag,
	book,
	'book-audience': bookAudience,
	'book-documents': bookDocuments,
	interview,
	'interview-type': interviewType,
	video,
}
