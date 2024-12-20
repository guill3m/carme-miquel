// @ts-check

import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	integrations: [sitemap()],
	site: 'https://www.carmemiquel.com',
	trailingSlash: 'always',
})
