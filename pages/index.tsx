import Head from 'next/head'
import Link from 'next/link'
import { Post } from '../src/components/Post'
import { posts } from '../src/getAllPosts'
import { StackedLayout } from '../src/components/AppShell/stackedLayout'
import React from 'react'

export default function Home() {
  return (
    <>
      <Hero />

      <main className="bg-white rounded-lg p-6">
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Läs om följande musikanter
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Innehållet kommer att byggas upp allt eftersom. Idéer och förslag emottages tacksamt.
            </p>
          </div>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {
              //@ts-ignore
              posts
                .sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date))
                .map((post) => (
                  <Post key={post.link} post={post} />
                ))
            }
          </div>
        </div>
      </main>
    </>
  )
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

function Hero() {
  return (
    <div className="mt-3 mx-auto max-w-screen-xl md:mt-6 lg:mt-10">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Din guide till musikanter
          <br className="xl:hidden" />
          <span className="text-indigo-600"> i Vilhelmina</span>
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Om du vill läsa om musikanter som har anknytning till Vilhelmina har du hittat rätt plats.
          Mitt namn är Johnny Holmgren och jag har påbörjat arbetet med att dokumentera Vilhelminas
          musikaliska historia. Det kommer att byggas upp med mer information allt eftersom. Idéer
          och förslag emottages tacksamt.
        </p>
      </div>
    </div>
  )
}
