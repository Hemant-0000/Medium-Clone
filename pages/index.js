import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import { useContext } from 'react'
import { MediumContext } from '../context/MediumContext'

export default function Home() {

  const { posts, users } = useContext(MediumContext)
  console.log(users)
  console.log(posts)

  return (
    <div className='wrapper mx-auto '>
      <Head>
        <title>Medium – Where good ideas find you.</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <Banner />

      <div className='main flex justify-center '>
        <div className='container max-w-7xl flex-1 '>
          <div className='postsList flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3   '>

            {posts.map(post => {
              return <PostCard post={post} key={post.id}  />
            })}

          </div>
        </div>
      </div>

    </div>
  )
}
