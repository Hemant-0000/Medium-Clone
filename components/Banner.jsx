import React from 'react'
import Image from 'next/image'
import banner from '../public/static/banner.png'

const Banner = () => {
    return (
        <div className='h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black '>
            <div className='content max-w-7xl space-x-14 flex items-center justify-between ' >

                <div className='space-y-5  '>
                    <h1 className='max-w-xl text-[6rem] font-serif ' >Stay Curious.</h1>
                    <h3 className='text-2xl' >Discover stories, thinking, and expertise from writers on any topic.</h3>
                    <button className='bg-black text-white py-2 px-4 rounded-full '>
                        Start Reading
                    </button>
                </div>

                <div className='hidden md:inline-flex flex-1 '>
                    <Image width={500} height={400} src={banner} objectFit='contain' alt='banner image' />
                </div>

            </div>
        </div>
    )
}

export default Banner