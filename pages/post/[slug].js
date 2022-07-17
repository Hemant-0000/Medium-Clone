import React from 'react'
import ReadersNav from '../../components/ReadersNav'
import Recommendations from '../../components/Recommendations'

const Post = () => {
  return (
    <div className='content flex'>
      <ReadersNav/>
      <div>Main Will Go Here</div>
      <Recommendations/>
    </div>
  )
}

export default Post