// @ts-check

/** @type {import('prettier').Config} */
export default {
	semi: false,
	singleQuote: true,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: ['.*', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
