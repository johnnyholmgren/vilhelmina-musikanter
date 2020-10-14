
function importAll(r): Array<{link: string, module: {}}> {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
    module: r(fileName),
  }))
}

// @ts-ignore
export const posts = importAll(require.context('../pages/posts/', true, /\.mdx$/))
