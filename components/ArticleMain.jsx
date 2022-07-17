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

const ArticleMain = () => {
    return (
        <div className='wrapper flex items-center justify-center flex-[3] border-l border-r ' >
            <div className='content overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 h-screen w-full p-[2rem]  ' >
                <div className="postHeaderContainer flex justify-between items-center mt-[2.2rem] mb-[1.2rem]  ">
                    <div className="authorContainer flex gap-[1rem]  ">
                        <div className="authorProfileImageContainer h-[3rem] w-[3rem] grid center rounded-full overflow-hidden ">
                            <Image objectFit='cover' width={100} height={100} className='image' src={qazi} alt='author image' />
                        </div>
                        <div className='columns flex-1 flex flex-col justify-center  '>
                            <div>Rafeh Qazi</div>
                            <div className='postDetails flex gap-[.2rem] text-[#787878] '>
                                <span>June 15 • 7 min read</span>
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
                    <div className="bannerContainer h-[18rem] w-full grid center overflow-hidden mb-[2rem] ">
                        <Image className='image' objectFit='cover' src={bannerImg} height={100} width={100} alt='bannerImg'/>
                    </div>
                    <h1 className='title font-bold text-3xl  ' >7 Free Tools That Will Make You More Productive In 2022</h1>
                    <div className='subtitle font-mediumSerifItalic text-[1.4rem] text-[#292929] ' >
                        <p>Rafeh Qazi, June 15, 2022</p> 
                        <p>Brief: Productivity is a skill that can be learned.</p>
                    </div>
                    <div className="articleText font-mediumSerif text-[1.4rem] text-[#292929]">
                    I love being productive every day as it helps me sort out all my priorities very quickly. Being Productive is a superpower we all must acquire early in our lives. So, for this same quest, I keep searching for some of the best Productive tools that will help me to stay productive all day long. So, here I have curated some of the best Productive Tools that will also make you more productive so that you can achieve most of the day very easily. Let’s get started.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleMain