import React from 'react'
import Image from 'next/image'
import qazi from '../public/static/qazi.jpg'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'
import bannerImg from '../public/static/tutorial.jpg'

const ArticleMain = ({post, author}) => {
    console.log(author)
    return (
        <div className='wrapper flex items-center justify-center flex-[3] border-l border-r ' >
            <div className='content overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 h-screen w-full p-[2rem]  ' >
                <div className="postHeaderContainer flex justify-between items-center mt-[2.2rem] mb-[1.2rem]  ">
                    <div className="authorContainer flex gap-[1rem]  ">
                        <div className="authorProfileImageContainer h-[3rem] w-[3rem] grid center rounded-full object-cover overflow-hidden ">
                            <img className='image w-[49px] h-[49px] ' src={author?.imageUrl} alt='author image' />
                        </div>
                        <div className='columns flex-1 flex flex-col justify-center  '>
                            <div>{author?.name}</div>
                            <div className='postDetails flex gap-[.2rem] text-[#787878] '>
                                <span>{new Date(post?.postedOn).toLocaleString('en-US', {day: 'numeric',month: 'short'})} • {post?.postLength} min read •</span>
                                <span className='listenButton flex items-center gap-[.2rem] text-[#1A8917] ' ><AiFillPlayCircle /> Listen</span>
                            </div>
                        </div>
                    </div>
                    <div className="socials flex gap-[1rem] text-[#787878]">
                        <IoLogoTwitter className='cursor-pointer' />
                        <FaFacebook className='cursor-pointer' />
                        <GrLinkedin className='cursor-pointer' />
                        <HiOutlineLink className='cursor-pointer' />
                        <div className="space w-[.5rem]" />
                        <BiBookmarks className='cursor-pointer' />
                        <FiMoreHorizontal className='cursor-pointer' />
                    </div>
                </div>
                <div className="articleMainContainer flex flex-col gap-[1rem] ">
                    <div className="bannerContainer h-[18rem] w-full grid center object-cover overflow-hidden mb-[2rem] ">
                        <img className='image w-full h-[20rem] ' src={`https://res.cloudinary.com/demo/image/fetch/${post?.bannerImage}`} alt='bannerImg'/>
                    </div>
                    <h1 className='title font-bold text-3xl  ' >{post?.title}</h1>
                    <div className='subtitle font-mediumSerifItalic text-[1.4rem] text-[#292929] ' >
                        <p>{author?.name}, {new Date(post?.postedOn).toLocaleString('en-US', {day: 'numeric',month: 'short', year: 'numeric'})}</p> 
                        <p>Brief: {post?.brief}</p>
                    </div>
                    <div className="articleText font-mediumSerif text-[1.4rem] text-[#292929]">
                    {post?.body}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleMain