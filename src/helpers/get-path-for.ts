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
	const entryIdPattern = /^[a-z0-9-]+$/

	if (entryId === '') {
		throw new Error('entryId can’t be empty')
	}

	if (parentEntryId === '') {
		throw new Error('parentEntryId can’t be empty')
	}

	if (!entryIdPattern.test(entryId)) {
		throw new Error(
			'entryId can only contain lowercase letters, numbers, and hyphens',
		)
	}

	if (parentEntryId && !entryIdPattern.test(parentEntryId)) {
		throw new Error(
			'parentEntryId can only contain lowercase letters, numbers, and hyphens',
		)
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
