import { expect, test } from 'vitest'
import { getPathFor } from './get-path-for'

test('article path', () => {
	expect(getPathFor('article', 'entry')).toBe('/article/entry/')
})

test('article category path without parent', () => {
	expect(getPathFor('article-category', 'entry')).toBe('/articles/entry/')
})

test('article category path with parent', () => {
	expect(getPathFor('article-category', 'entry', 'parent-entry')).toBe(
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
