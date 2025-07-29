import { describe, expect, test } from 'vitest'
import { getIframeUrl } from './video-embed.astro'

describe('getIframeUrl', () => {
	test('Vimeo URL', () => {
		const url = getIframeUrl('vimeo', '12345')
		expect(url).toBe('https://player.vimeo.com/video/12345')
	})

	test('YouTube URL', () => {
		const url = getIframeUrl('youtube', '67890')
		expect(url).toBe('https://www.youtube-nocookie.com/embed/67890')
	})

	test('YouTube list URL', () => {
		const url = getIframeUrl('youtube-list', 'abcdef')
		expect(url).toBe(
			'https://www.youtube-nocookie.com/embed/videoseries?list=abcdef',
		)
	})

	// Unexpected cases

	test('undefined id', () => {
		// @ts-ignore
		expect(() => getIframeUrl('youtube', undefined)).toThrow('id is required')
	})

	test('null id', () => {
		// @ts-ignore
		expect(() => getIframeUrl('youtube', null)).toThrow(
			'id can’t be null or empty',
		)
	})

	test('empty string id', () => {
		expect(() => getIframeUrl('youtube', '')).toThrow(
			'id can’t be null or empty',
		)
	})

	test('undefined platform', () => {
		// @ts-ignore
		expect(() => getIframeUrl(undefined, '12345')).toThrow(
			'platform is required',
		)
	})

	test('invalid platform value', () => {
		expect(() => getIframeUrl('invalid' as any, '12345')).toThrow(
			'invalid platform value',
		)
	})
})
