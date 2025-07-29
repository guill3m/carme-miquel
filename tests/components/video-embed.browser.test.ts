import { describe, expect, test } from 'vitest'
import { renderAstroComponent } from '../helpers'

import Link from '../../src/components/video-embed.astro'

describe('VideoEmbed component', () => {
	test('vimeo', async () => {
		const result = await renderAstroComponent(Link, {
			props: {
				aspectRatio: '16:9',
				id: 'test-id',
				platform: 'vimeo',
				title: 'Test title',
			},
		})
		const videoEmbedElement = result.firstChild
		const iframeElement = videoEmbedElement.getElementsByTagName('iframe')[0]

		expect(result).toMatchSnapshot()

		expect(iframeElement).toBeInstanceOf(HTMLIFrameElement)
		expect(iframeElement).toHaveAttribute(
			'src',
			'https://player.vimeo.com/video/test-id',
		)
		expect(iframeElement).toHaveAccessibleName('Video: Test title')
	})

	test('youtube', async () => {
		const result = await renderAstroComponent(Link, {
			props: {
				aspectRatio: '4:3',
				id: 'test-id',
				platform: 'youtube',
				title: 'Test title',
			},
		})
		const videoEmbedElement = result.firstChild
		const iframeElement = videoEmbedElement.getElementsByTagName('iframe')[0]

		expect(result).toMatchSnapshot()

		expect(iframeElement).toBeInstanceOf(HTMLIFrameElement)
		expect(iframeElement).toHaveAttribute(
			'src',
			'https://www.youtube-nocookie.com/embed/test-id',
		)
		expect(iframeElement).toHaveAccessibleName('Video: Test title')
	})

	test('youtube list', async () => {
		const result = await renderAstroComponent(Link, {
			props: {
				aspectRatio: '16:9',
				id: 'test-id',
				platform: 'youtube-list',
				title: 'Test title',
			},
		})
		const videoEmbedElement = result.firstChild
		const iframeElement = videoEmbedElement.getElementsByTagName('iframe')[0]

		expect(result).toMatchSnapshot()

		expect(iframeElement).toBeInstanceOf(HTMLIFrameElement)
		expect(iframeElement).toHaveAttribute(
			'src',
			'https://www.youtube-nocookie.com/embed/videoseries?list=test-id',
		)
		expect(iframeElement).toHaveAccessibleName('Video: Test title')
	})
})
