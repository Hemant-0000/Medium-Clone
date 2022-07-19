import React, { useContext } from 'react'
import SmallLogo from '../public/static/smallLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import { MediumContext } from '../context/MediumContext'
import sign_in from '../public/static/sign_in.png'


const ReadersNav = () => {

    const { currentUser, handleUserAuth } = useContext(MediumContext)

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

            { currentUser ? <div className='profileImageContainer w-[2.8rem] h-[2.8rem] rounded-full overflow-hidden place-items-center '>
                <img className='profileImage w-[46px] h-[46px]' src={currentUser?.photoURL} alt={currentUser?.displayName} />
            </div>
            :
            <div onClick={handleUserAuth} className='profileImageContainer cursor-pointer w-[2.8rem] h-[2.8rem] overflow-hidden place-items-center '>
                <Image objectFit='cover' className='profileImage' src={sign_in} alt={currentUser?.displayName} />
            </div>
}
        </div>

    )
}

export default ReadersNav