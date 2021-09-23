//import { HeadPost } from './HeadPost'

export default function BlogPost({ children, meta }) {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article className="prose prose-lg text-gray-500 mx-auto">{children}</article>
    </>
  )
}

export const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <div className="details">
      {isBlogPost ? null : <p>{meta.description}</p>}
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        ☕ {meta.readTime + ' min läsning'}
      </span>
    </div>
    <style jsx>
      {`
        .prose > p > img {
          margin-bottom: 0px !important;
        }
      `}
    </style>
  </>
)
