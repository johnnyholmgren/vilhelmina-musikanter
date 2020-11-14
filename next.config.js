

/*
module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
    domains: ['https://images.unsplash.com'],
  },
}
*/

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: [''],
  },
})