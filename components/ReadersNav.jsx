import React from 'react'
import SmallLogo from '../public/static/smallLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import qazi from '../public/static/qazi.jpg'


const ReadersNav = () => {
    return (
        <div className="wrapper h-screen w-[5rem] flex flex-col justify-between items-center p-[1rem] ">

            <Link href={'/'}>
                <div className='logoContainer cursor-pointer  '>
                    <Image className=' ' src={SmallLogo} alt="small logo" />
                </div>
            </Link>

            <div className='iconsContainer flex flex-1 flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]  ' >
                <HiOutlineHome className='cursor-pointer' />
                <FiBell className='cursor-pointer' />
                <BiBookmarks className='cursor-pointer' />
                <RiArticleLine className='cursor-pointer' />
                <div className="divider border-b "></div>
                <BsPencilSquare className='cursor-pointer' />

            </div>

            <div className='profileImageContainer w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center '>
                    <Image className='profileImage' objectFit='cover' src={qazi} alt='userImage' />
            </div>

        </div>

    )
}

export default ReadersNav