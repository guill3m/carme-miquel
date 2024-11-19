export function getPathFor(
	contentType:
		| 'article'
		| 'article-category'
		| 'book'
		| 'book-audience'
		| 'book-documents'
		| 'interview'
		| 'video'
		| 'page',
	entryId: string,
	parentEntryId?: string,
): string {
	switch (contentType) {
		case 'article':
			return `/article/${entryId}`
		case 'article-category':
			return `/articles${parentEntryId ? `/${parentEntryId}/` : '/'}${entryId}`
		case 'book':
			return `/llibre/${entryId}`
		case 'book-audience':
			return `/llibres/${entryId}`
		case 'book-documents':
			return `/llibre/${entryId}/documents`
		case 'interview':
			return `/entrevista/${entryId}`
		case 'video':
			return `/video/${entryId}`
		case 'page':
		default:
			return `/${entryId}`
	}
}
