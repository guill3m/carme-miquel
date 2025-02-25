// @ts-check

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	integrations: [mdx(), sitemap({ lastmod: new Date() })],
	site: 'https://www.carmemiquel.com',
	trailingSlash: 'always',
})
