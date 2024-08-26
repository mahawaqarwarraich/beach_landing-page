import React from 'react'


const Card = ({ src, title, text, href, hideDescription }) => {
    return (
        <>

            <div className='w-[100%] mb-0'>
                <img src={src} alt='beach' className='h-[300px] w-full rounded-t-3xl object-cover' />
                <div className='bg-customPurple/10 h-[200px]  rounded-b-3xl overflow-hidden px-3 pt-0.5 flex flex-col gap-3  items-center justify-between'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-bold text-sm'>{title}</h1>
                        <p className={`text-xs text-left text-gray-500 ${hideDescription ? 'hidden' : 'block'}`}>{text}</p>
                    </div>
                    <img src='/images/arrow-circle.svg' href={href} className='min-w-0 min-h-0 w-10 h-10 cursor-pointer mb-1' alt='circle with arrow inside' />
                </div>
            </div>


        </>
    )
}

export default Card