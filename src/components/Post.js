import Link from 'next/link'
//import { HeadPost } from './HeadPost'

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post

  //   <div meta={meta} />

  return (

    <>
      <article>
        <h2 className="text-lg">{meta.title}</h2>
        <p className="text-purple-500">{meta.description}</p>
        <p className="text-gray-600">{meta.date}</p>
        <Link href={'/posts' + link}>
          <a className="text-purple-800">Read more &rarr;</a>
        </Link>
      </article>
      <style jsx>
        {`
          article {
            margin-bottom: 3rem;
          }
        `}
      </style>
    </>
  )
}
