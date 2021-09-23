function importAll(r): Array<{ link: string; module: {} }> {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
    module: r(fileName),
  }))
}

// @ts-ignore
export const posts: MdxDocument[] = importAll(require.context('../pages/posts/', true, /\.mdx$/))

export interface MdxDocument {
  link: string
  module: Module
}

export interface Module {
  meta: Meta
}

export interface Meta {
  title: string
  description: string
  date: Date
  readTime: number
  titleImage?: string | undefined
}
