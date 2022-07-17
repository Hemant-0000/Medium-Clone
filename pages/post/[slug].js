import React from 'react'
import ArticleMain from '../../components/ArticleMain'
import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations'

const Post = () => {
  return (
    <div className='content flex'>
      <ReadersNav/>
      <ArticleMain/>
      <Recommendations/>
    </div>
  )
}

export default Post