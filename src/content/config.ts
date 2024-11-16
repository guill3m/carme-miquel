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
		tags: reference('articleCategory').array(),
	}),
})

const articleCategory = defineCollection({
	loader: file('src/content/article-categories/article-categories.json'),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		parent: reference('articleCategory').optional(),
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
		audience: reference('bookAudience').array(),
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
	loader: file('src/content/book-audiences/book-audiences.json'),
	schema: z.object({
		id: z.string(),
		name: z.string(),
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
		base: 'src/content/interiews',
		pattern: 'base.md',
	}),
	schema: z.object({
		meta,
		title: z.string(),
		date: z.string().date(),
		interviewer: z.string(),
		format: z.string().regex(/audio|text|video/),
		type: reference('interviewType'),
	}),
})

const interviewType = defineCollection({
	loader: file('src/content/interview-types/interview-types.json'),
	schema: z.object({
		id: z.string(),
		name: z.string(),
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
	articleCategory,
	book,
	bookAudience,
	bookDocuments,
	interview,
	interviewType,
	video,
}
