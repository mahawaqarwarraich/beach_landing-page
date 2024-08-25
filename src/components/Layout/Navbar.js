import React, { useState } from 'react'


// w-[180px] h-[50px]

const Navbar = () => {
  const [isMobileMenuClose, setIsMobileMenuClose] = useState(true)

  const toggleMobileMenu = () => {
    setIsMobileMenuClose(!isMobileMenuClose)
  }

  return (
    <>
      <div className='bg-white pl-8 pr-6 py-2  text-3xl font-serif text-gray-400 ml-auto font-medium'>
        <div className='flex items-center justify-between'>
          <img id='logo' src='/images/google.svg' alt='google logo' className='w-[150px] h-[50px]' />
          <div id='hamburger' className='w-[50px] h-[40px] border p-2 rounded-md cursor-pointer lg:hidden' onClick={toggleMobileMenu}>
            <img src='/images/hamburger.svg' alt='hamburger icon' />
          </div>
          <div id='desktopMenu' className='space-x-5 flex justify-end hidden lg:block text-lg font-times'>
            <a className='cursor-pointertext-customPurple' href='/home'>Home</a>
            <a className='cursor-pointer hover:text-customPurple' href='/home'>Other</a>
            <a className='cursor-pointer hover:text-customPurple' href='/career'>Career</a>
            <a className='cursor-pointer hover:text-customPurple' href='/support'>Support</a>
            <a className='cursor-pointer hover:text-customPurple' href='/support'>Challenges</a>
            <a className='cursor-pointer hover:text-customPurple' href='/support'>Test</a>
          </div>
        </div>
        <div id='mobileMenu' className={`flex flex-col text-lg  gap-1  ${isMobileMenuClose ? 'hidden' : 'block'}`}>
          <a className='cursor-pointer hover:text-customPurple text-customPurple' href='/home'>Home</a>
          <a className='cursor-pointer hover:text-customPurple' href='/home'>Other</a>
          <a className='cursor-pointer hover:text-customPurple' href='/career'>Career</a>
          <a className='cursor-pointer hover:text-customPurple' href='/support'>Support</a>
          <a className='cursor-pointer hover:text-customPurple' href='/support'>Challenges</a>
          <a className='cursor-pointer hover:text-customPurple' href='/support'>Test</a>
        </div>
      </div>
    </>
  )
}

export default Navbar