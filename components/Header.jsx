import React from 'react'
import Image from 'next/image'
import logo from '../public/static/logo.png'

const Header = () => {
  return (
    <header className='wrapper flex justify-center gap-10 p-5 bg-[#FCC017]  ' >
        <div className='content max-w-7xl flex-1 flex justify-between gap-10  '>
            <div className='logoContainer flex items-center h-[40px] w-[200px] '>
                <Image className='logo cursor-pointer' objectFit='contain' src={logo} alt='logo' />
            </div>
            <div className='bannerNav flex items-center space-x-5 ' >
                <div className='cursor-pointer' >Our Story</div>
                <div className='cursor-pointer' >Membership</div>
                <div className='cursor-pointer' >Sign In</div>
                <button className='accentedButton bg-black text-white py-2 px-4 rounded-full ' >Get Started</button>
            </div>
        </div>
    </header>
  )
}

export default Header