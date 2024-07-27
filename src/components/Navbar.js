import React, {useState} from 'react'


// w-[180px] h-[50px]

const Navbar = () => {
  const [isMobileMenuClose, setIsMobileMenuClose] = useState(true)

  const toggleMobileMenu = () => {
    setIsMobileMenuClose(!isMobileMenuClose)
  }

  return (
    <>
    <div className='bg-white pl-8 pr-6 py-4  text-3xl font-serif text-gray-400 ml-auto font-medium'>
      <div className='flex items-center justify-between'>
        

      <img id='logo' src='/images/google.svg' className='w-[180px] h-[50px]'/>
     
      <div id='hamburger' className='w-[50px] h-[40px] border p-2 rounded-md cursor-pointer md:hidden' onClick={toggleMobileMenu}>
        <img src='/images/hamburger.svg'/>

      </div>
      <div id='desktopMenu' className='space-x-5 flex justify-end hidden md:block'>
        <a className='cursor-pointer hover:text-customPurple'>Home</a>
        <a className='cursor-pointer hover:text-customPurple'>Career</a>
        <a className='cursor-pointer hover:text-customPurple'>Support</a>

      </div>
      </div>

      <div id='mobileMenu' className={`flex flex-col gap-4 mt-5 md:hidden ${isMobileMenuClose ? 'hidden' : 'block'}`}>
        <a className='cursor-pointer hover:text-customPurple'>Home</a>
        <a className='cursor-pointer hover:text-customPurple'>Career</a>
        <a className='cursor-pointer hover:text-customPurple'>Support</a>
      </div>
    </div>

    <script>
      document.getElementById()
    </script>
    </>
  )
}

export default Navbar