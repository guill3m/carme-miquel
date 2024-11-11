import path from 'path'
import { readFile, access } from 'fs/promises'

export default async function readMdxFile(
	slug: string,
	folder: string,
): Promise<string | null> {
	const folderPath = path.join(process.cwd(), folder)
	const filePath = path.resolve(path.join(folderPath, `${slug}.mdx`))

	try {
		await access(filePath)
	} catch (error) {
		return null
	}

	const fileContent = await readFile(filePath, { encoding: 'utf-8' })

	return fileContent
}
