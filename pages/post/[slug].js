import React, { useContext, useEffect, useState } from 'react'
import ArticleMain from '../../components/ArticleMain'
import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations'
import { MediumContext } from '../../context/MediumContext'
import { useRouter } from 'next/router'

const Post = () => {

  const { users, posts } = useContext(MediumContext)
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])

  const router = useRouter()

  const slug = router.query.slug
  console.log(slug)

  useEffect(() => {
    if(posts.length === 0) return;
    setPost(posts.find(post => post.id === slug))
    setAuthor(users.find(user => user.data.email === post.author))
  }, [post])
  

  return (
    <div className='content flex'>
      <ReadersNav />
      <ArticleMain post={post} author={author?.data} />
      <Recommendations />
    </div>
  )
}

export default Post