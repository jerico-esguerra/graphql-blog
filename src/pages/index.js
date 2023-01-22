import Head from 'next/head';
import styles from '@/styles/Home.module.css'

const posts = [{title: "Testing"}]

export default function Home() {
  return (
    <>
      <Head><title>Memories</title></Head>
      <div className="container mx-auto px-10 mb-8">
        <div>Featured Posts</div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <div>{post.title}</div>
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <div>Post Widget</div>
              <div>Categories</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
