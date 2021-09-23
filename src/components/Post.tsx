import Link from 'next/link'
import React from 'react'
//import { HeadPost } from './HeadPost'
import { MdxDocument } from '../getAllPosts'

export const Post = ({ post }: { post: MdxDocument }) => {
  const {
    link,
    module: { meta },
  } = post

  //   <div meta={meta} />

  return (
    <>
      <PostCard
        title={meta.title}
        description={meta.description}
        href={link}
        image={meta.titleImage}
      />
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

interface CardProps {
  title: string
  description: string
  href: string
  image?: string
}

function PostCard({ title, description, href, image }: CardProps) {
  const authorElement = false ? (
    <div className="mt-6 flex items-center">
      <div className="flex-shrink-0">
        <a href="#">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </a>
      </div>
      <div className="ml-3">
        <p className="text-sm leading-5 font-medium text-gray-900">
          <a href="#" className="hover:underline">
            Roel Aufderhar
          </a>
        </p>
        <div className="flex text-sm leading-5 text-gray-500">
          <time dateTime="2020-03-16">Mar 16, 2020</time>
          <span className="mx-1">&middot;</span>
          <span>6 min read</span>
        </div>
      </div>
    </div>
  ) : null

  const titleImage = image
    ? image
    : 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" loading="lazy" src={titleImage} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-indigo-600">
            <a href="#" className="hover:underline">
              Musikant
            </a>
          </p>
          <Link href={'/posts' + href}>
            <a className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">{title}</h3>
              <p className="mt-3 text-base leading-6 text-gray-500">{description}</p>
            </a>
          </Link>
        </div>
        {authorElement}
      </div>
    </div>
  )
}
