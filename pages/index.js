import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import PostCard from '../components/PostCard'

export default function Home() {
  return (
    <div className='wrapper mx-auto '>
      <Head>
        <title>Creating something</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <div className='main flex justify-center '>
        <div className='container max-w-7xl flex-1 '>
          <div className='postsList flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3   '>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>

    </div>
  )
}
