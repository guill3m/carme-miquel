export type ArticleCategoryFrontmatter = {
  uid: string,
  name: string,
  parent?: ArticleCategoryFrontmatter['uid'],
}

export type ArticleFrontmatter = {
  uid: string,
  title: string,
  date: string,
  publisher?: string,
  tags: ArticleCategoryFrontmatter['uid'][],
}

export type InterviewFrontmatter = {
  uid: string,
  title: string,
  date: string,
  interviewer: string,
  format: 'audio' | 'text' | 'video',
  type: 'entrevista' | 'conversa',
}

export type BookFrontmatter = {
  uid: string,
  title: string,
  publisher: string,
  year: number,
  audience: Array<'infantil' | 'juvenil' | 'adult'>,
  isbn?: string,
  extra?: {
    what: string,
    who: string,
  }[],
  awards?: string[],
}

export type BookDocumentsFrontmatter = {
  book: BookFrontmatter['uid'],
  title: string,
}

export type VideoFrontmatter = {
  uid: string,
  title: string,
  platform: 'vimeo' | 'youtube' | 'youtube-list',
  videoId: string,
}
