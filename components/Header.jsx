import React, { useContext, useState } from 'react'
import Image from 'next/image'
import logo from '../public/static/logo.png'
import { MediumContext } from '../context/MediumContext'

const Header = () => {
  const { handleUserAuth, currentUser, signOutUser } = useContext(MediumContext)
  const [signOut, setSignOut] = useState(false)
  console.log(currentUser)
  return (
    <header className='wrapper flex justify-center gap-10 p-5 bg-[#FCC017]  ' >
      <div className='content max-w-7xl flex-1 flex justify-between gap-10  '>
        <div className='logoContainer flex items-center h-[40px] w-[200px] '>
          <Image className='logo cursor-pointer' objectFit='contain' src={logo} alt='logo' />
        </div>
        {currentUser ? (
          <div className='bannerNav flex items-center space-x-5 relative ' >
            <div className='cursor-pointer' >Our Story</div>
            <div className='cursor-pointer' >Membership</div>
            <div className='cursor-pointer bg-black text-white py-2 px-4 rounded-full' >Write</div>
            <button className='accentedButton bg-black text-white py-2 px-4 rounded-full ' >Get Unlimited Access</button>

            <div onClick={() => setSignOut(!signOut)} className='logoContainer rounded-full border-black border-[1px] border-solid overflow-hidden object-cover  cursor-pointer  '>
              <img className='image w-[46px] h-[46px]' src={currentUser.photoURL} alt={currentUser.displayName} />
            </div>

            {signOut && <div className='cursor-pointer z-10 font-semibold hover:bg-[#d5d1d1] absolute right-[-15px] rounded-md top-[50px] p-[10px] bg-[#f2eaea] text-black ' onClick={() => setSignOut(false)}>
              <div onClick={signOutUser}  >
                Sign Out
              </div>
            </div>}


          </div>
        ) : (
          <div className='bannerNav flex items-center space-x-5 ' >
            <div className='cursor-pointer' >Our Story</div>
            <div className='cursor-pointer' >Membership</div>
            <div onClick={handleUserAuth} className='cursor-pointer' >Sign In</div>
            <button className='accentedButton bg-black text-white py-2 px-4 rounded-full ' >Get Started</button>
          </div>
        )
        }
      </div>
    </header>
  )
}

export default Header