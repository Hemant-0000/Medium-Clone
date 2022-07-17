import React from 'react'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailRead } from 'react-icons/md'
import ReplitLogo from '../public/static/replit.png'
import TutorialImg from '../public/static/tutorial.jpg'
import CPlogo from '../public/static/cp.png'
import Qazi from '../public/static/qazi.jpg'
import JSLogo from '../public/static/jsLogo.png'

const recommendedPost = [
    {
        title: "What can you do with Replit?",
        image: ReplitLogo,
        author: {
            name: "Clever Programmer",
            image: CPlogo
        }
    },
    {
        title: "The ultimate JavaScript Course for beginners by Clever Programmer!",
        image: TutorialImg,
        author: {
            name: "Rafeh Qazi",
            image: Qazi
        }
    },
    {
        title: "How to become a developer in 2022?",
        image: JSLogo,
        author: {
            name: "Clever Programmer",
            image: CPlogo
        }
    },
    {
        title: "What can you do with Replit?",
        image: ReplitLogo,
        author: {
            name: "Clever Programmer",
            image: CPlogo
        }
    },
    {
        title: "The ultimate JavaScript Course for beginners by Clever Programmer!",
        image: TutorialImg,
        author: {
            name: "Rafeh Qazi",
            image: Qazi
        }
    },
]

const Recommendations = () => {
    return (
        <div className='wrapper h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem] '>
            <button className='accentedButton flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full px-[8rem] '>Get unlimited access</button>

            <div className="searchBar flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full ">
                <AiOutlineSearch />
                <input type="text" className='searchInput border-none outline-none bg-none w-full ' placeholder='Search' />
            </div>

            <div className="authorContainer my-[2rem]  ">
                <div className='authorProfileImageContainer h-[5rem] w-[5rem] rounded-full overflow-hidden  ' >
                    <Image src={Qazi} alt='authorlogo' width={100} height={100} />
                </div>
                <div className='authorName font-semibold mt-[.5rem] '>Rafeh Qazi</div>
                <div className='authorFollowing font-semibold mb-[.2rem] text-[#787878] '>1M followers</div>
                <div className='authorActions flex gap-[.6rem] my-[1rem] ' >
                    <button className='actionButton bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm ' >follow</button>
                    <button className='actionButton bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm '><MdMarkEmailRead /></button>
                </div>
            </div>

            <div className="title pb-[.5rem]">More from Medium</div>
            <div className="recommendationsContainer overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 h-[15.4rem]">
                <div className="articlesContainer">
                    {recommendedPost.map((article, index) => {
                        return (
                            <div key={index} className="articlesContentWrapper flex items-center justify-between cursor-pointer my-[1rem]  ">
                                <div className="articleContent flex-[4]">
                                    <div className="recommendationAuthorContainer flex items-center gap-[.6rem]  ">
                                        <div className="recommendationAuthorProfileImageContainer rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]  ">
                                            <Image src={article.author.image} alt='authorlogo' width={100} height={100} />
                                        </div>

                                        <div className='recommendationAuthorName text-sm ' >{article.author.name}</div>
                                    </div>
                                    <div className="recommendationTitle font-bold ">{article.title}</div>
                                </div>

                                <div className="recommendationThumbnailContainer flex flex-1 items-center justify-center h-[4rem] w-[4rem] overflow-hidden ">
                                    <Image className='recommendationThumbnai' objectFit='cover' src={article.image} height={100} width={100} alt="article image" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Recommendations