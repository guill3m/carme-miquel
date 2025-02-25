import { defineCollection, reference, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const meta = z.object({
	title: z.string().optional(),
	description: z.string().optional(),
})

const article = defineCollection({
	loader: glob({
		base: 'src/content/articles',
		pattern: '.md',
	}),
	schema: z.object({
		meta,
		title: z.string(),
		date: z.string().date(),
		publisher: z.string().optional(),
		tags: z.array(reference('article-category')),
	}),
})

const articleCategory = defineCollection({
	loader: file('src/content/article-categories/article-categories.yaml'),
	schema: z.object({
		name: z.string(),
		parent: z.optional(reference('article-category')),
	}),
})

const book = defineCollection({
	loader: glob({
		base: 'src/content/books',
		pattern: ['*.md', '!*.documents.md'],
	}),
	schema: z.object({
		meta,
		title: z.string(),
		publisher: z.string(),
		year: z.number().min(1900).max(2024),
		audience: z.array(reference('book-audience')),
		isbn: z
			.string()
			.regex(
				/^(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$$/,
			)
			.optional(),
		awards: z.string().array().optional(),
		extra: z
			.object({
				what: z.string(),
				who: z.string(),
			})
			.array()
			.optional(),
	}),
})

const bookAudience = defineCollection({
	loader: file('src/content/book-audiences/book-audiences.yaml'),
	schema: z.object({
		name: z.string(),
		order: z.number(),
	}),
})

const bookDocuments = defineCollection({
	loader: glob({
		base: 'src/content/books',
		pattern: '*.documents.md',
	}),
	schema: z.object({
		book: reference('book'),
		meta,
		title: z.string(),
	}),
})

const interview = defineCollection({
	loader: glob({
		base: 'src/content/interviews',
		pattern: '*.md',
	}),
	schema: z.object({
		meta,
		title: z.string(),
		date: z.string().date(),
		interviewer: z.string(),
		format: z.string().regex(/audio|text|video/),
		interviewType: reference('interview-type'),
	}),
})

const interviewType = defineCollection({
	loader: file('src/content/interview-types/interview-types.yaml'),
	schema: z.object({
		namePlural: z.string(),
		nameSingular: z.string(),
	}),
})

const video = defineCollection({
	loader: glob({
		base: 'src/content/videos',
		pattern: '*.md',
	}),
	schema: z.object({
		meta,
		title: z.string(),
		platform: z.string().regex(/vimeo|youtube|youtube-list/),
		videoId: z.string(),
	}),
})

export const collections = {
	article,
	'article-category': articleCategory,
	book,
	'book-audience': bookAudience,
	'book-documents': bookDocuments,
	interview,
	'interview-type': interviewType,
	video,
}
