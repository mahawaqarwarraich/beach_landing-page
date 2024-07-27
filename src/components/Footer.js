import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-black p-14 '>
       <div className='text-white flex flex-col items-center gap-5'>
        <h1 className='text-2xl'>Follow us</h1>
        <div className='text-white underline text-lg space-x-4'>
            <a className='cursor-pointer'>Youtube</a>
            <a className='cursor-pointer'>Instagram</a>
            <a className='cursor-pointer'>LinkedIn</a>
        </div>
        <p>Copyright &copy;, Headline Hub</p>
       </div>
    </div>
    
    </>
  )
}

export default Footer