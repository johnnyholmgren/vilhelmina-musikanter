import Head from 'next/head'
import Link from "next/link";
import { Post } from '../src/components/Post'
import { posts } from '../src/getAllPosts'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Vilhelmina musikanter</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>

      <main className="bg-white rounded-lg p-6">
          <div className="text-lg max-w-prose mx-auto mb-6">
        <h1 className="text-center text-4xl text-blue-400 rounded-full mx-auto">
          Musiknyheter för dig i Vilhelmina
        </h1>
          <p className="text-xl text-gray-500 leading-8">
              Om du vill läsa om och  musikanter som har anknytning till Vilhelmina, är detta en blogg för dig. Mitt namn är Johnny Holmgren. Hemsidan kommer allt eftersom att byggas upp . Idéer och förslag emottages tacksamt.
          </p>
          </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {
              //@ts-ignore
              posts.sort((a, b) => dateSortDesc(a.module.meta.date, b.module.meta.date)).map((post) => (
            <Post key={post.link} post={post} />
          ))}
        </div>
      </main>

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <Link href="/om-mig">
                <a>Om mig</a>
            </Link>
        </div>

    </div>
  )
}


function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}