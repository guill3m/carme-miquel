export function getPathFor(
	contentType:
		| 'article'
		| 'article-tag'
		| 'book'
		| 'book-audience'
		| 'book-documents'
		| 'interview'
		| 'video'
		| 'page',
	entryId: string,
	parentEntryId?: string,
): string {
	if (contentType === undefined) {
		throw new Error('contentType is required')
	}

	if (entryId === undefined) {
		throw new Error('entryId is required')
	}

	if (entryId === null || entryId === '') {
		throw new Error('entryId can’t be null or empty')
	}

	if (parentEntryId === null || parentEntryId === '') {
		throw new Error('parentEntryId can’t be null or empty')
	}

	switch (contentType) {
		case 'article':
			return `/article/${entryId}/`
		case 'article-tag':
			return `/articles${parentEntryId ? `/${parentEntryId}/` : '/'}${entryId}/`
		case 'book':
			return `/llibre/${entryId}/`
		case 'book-audience':
			return `/llibres/${entryId}/`
		case 'book-documents':
			return `/llibre/${entryId}/documents/`
		case 'interview':
			return `/entrevista/${entryId}/`
		case 'video':
			return `/video/${entryId}/`
		case 'page':
		default:
			return `/${entryId}/`
	}
}
