// @ts-check

import { defineConfig, envField } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
	env: {
		schema: {
			UMAMI_ANALYTICS_HOST: envField.string({
				context: 'client',
				access: 'public',
				optional: true,
			}),
			UMAMI_ANALYTICS_ID: envField.string({
				context: 'client',
				access: 'public',
				optional: true,
			}),
			UMAMI_ANALYTICS_SCRIPT: envField.string({
				context: 'client',
				access: 'public',
				optional: true,
			}),
		},
	},
	experimental: {
		contentIntellisense: true,
		preserveScriptOrder: true,
	},
	integrations: [
		mdx(),
		sitemap({
			lastmod: new Date(),
			namespaces: {
				image: false,
				news: false,
				video: false,
				xhtml: false,
			},
		}),
	],
	prefetch: {
		prefetchAll: true,
	},
	site: 'https://www.carmemiquel.com',
	trailingSlash: 'always',
})
