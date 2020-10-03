import Head from 'next/head'
import {Post} from '../src/components/Post';
import { posts } from "../src/getAllPosts";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Vilhelmina musikanter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white rounded-lg p-6">
        <h1 className="text-center text-4xl text-blue-400 rounded-full mx-auto">
          Välkommen till Vilhelmina musikanter!
        </h1>

        <div className="bg-grey-300">
          
        {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
        </div>
      </main>

      <footer className="bg-grey-500">
        Mer innehåll...
      </footer>
    </div>
  )
}
