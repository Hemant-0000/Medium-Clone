import React from 'react'
import Image from 'next/image'
import jslogo from '../public/static/jslogo.png'
import qazi from '../public/static/qazi.jpg'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link'

const PostCard = () => {
    return (
        <Link href={'/post/postid123'}>
            <div className='wrapper flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer '>
                <div className='postDetails flex flex-[2.5] flex-col  '>

                    <div className='authorContainer flex gap-[.4rem] '>
                        <div className='authorImageContainer grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] '><Image width={40} height={40} className='authorImage' objectFit='cover' src={qazi} alt='logo' /></div>
                        <div className='authorName font-semibold '>Rafeh Qazi</div>
                    </div>

                    <h1 className='font-bold text-2xl'>Why Your Favorite Foods Taste So Good</h1>
                    <div className='briefing text-[#787878]'>How do we decide what we like to eat?</div>

                    <div className='detailsContainer flex items-center justify-between text-[#787878] '>
                        <span className='articlesDetails my-2 text-[.8rem]  '>Jun 15 • 5 min read • <span className='category bg-[#F2F3F2] p-1 rounded-full '>productivity</span>
                        </span>
                        <span className='bookmarkContainer cursor-pointer '><FiBookmark className='h-5 w-5' /></span>
                    </div>
                </div>


                <div className='thumbnailContainer  ' >
                    <Image width={100} height={100} className='thumbnail' objectFit='cover' src={jslogo} alt='logo' />
                </div>

            </div>
        </Link>
    )
}

export default PostCard