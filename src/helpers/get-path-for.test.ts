import { expect, test } from 'vitest'
import { getPathFor } from './get-path-for'

test('article path', () => {
	expect(getPathFor('article', 'entry')).toBe('/article/entry/')
})

test('article tag path without parent', () => {
	expect(getPathFor('article-tag', 'entry')).toBe('/articles/entry/')
})

test('article tag path with parent', () => {
	expect(getPathFor('article-tag', 'entry', 'parent-entry')).toBe(
		'/articles/parent-entry/entry/',
	)
})

test('book path', () => {
	expect(getPathFor('book', 'entry')).toBe('/llibre/entry/')
})

test('book audience path', () => {
	expect(getPathFor('book-audience', 'entry')).toBe('/llibres/entry/')
})

test('book documents path', () => {
	expect(getPathFor('book-documents', 'entry')).toBe('/llibre/entry/documents/')
})

test('interview path', () => {
	expect(getPathFor('interview', 'entry')).toBe('/entrevista/entry/')
})

test('video path', () => {
	expect(getPathFor('video', 'entry')).toBe('/video/entry/')
})

test('generic path', () => {
	expect(getPathFor('page', 'entry')).toBe('/entry/')
})

// Unexpected cases

test('invalid content type', () => {
	// @ts-ignore
	expect(getPathFor('invalid-type', 'entry')).toBe('/entry/')
})

test('empty entry ID', () => {
	expect(() => getPathFor('article', '')).toThrowError('entryId can’t be empty')
})

test('empty parent entry ID', () => {
	expect(() => getPathFor('article-tag', 'entry', '')).toThrowError(
		'parentEntryId can’t be empty',
	)
})

test('undefined parent entry ID', () => {
	expect(getPathFor('article-tag', 'entry', undefined)).toBe('/articles/entry/')
})

test('special characters in entry ID', () => {
	expect(() => getPathFor('article', 'entry_with/special*chars')).toThrowError(
		'entryId can only contain lowercase letters, numbers, and hyphens',
	)
})

test('special characters in parent entry ID', () => {
	expect(() =>
		getPathFor('article', 'entry', 'parent_with/special*chars'),
	).toThrowError(
		'parentEntryId can only contain lowercase letters, numbers, and hyphens',
	)
})
