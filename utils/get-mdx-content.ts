import { compileMDX } from 'next-mdx-remote/rsc'

import readMdxFile from '@/utils/read-mdx-file'

export default async function getMdxContent(slug: string, folder: string) {
	const fileContent = await readMdxFile(slug, folder)

	if (!fileContent) {
		return null
	}

	const { content, frontmatter } = await compileMDX({
		source: fileContent,
		options: {
			parseFrontmatter: true,
		},
	})

	return { content, frontmatter }
}
