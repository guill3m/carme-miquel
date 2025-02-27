// @ts-check

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	experimental: { contentIntellisense: true },
	integrations: [mdx(), sitemap({ lastmod: new Date() })],
	site: 'https://www.carmemiquel.com',
	trailingSlash: 'always',
})
