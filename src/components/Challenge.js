import React, { useState } from 'react'



const Challenge = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    const handleIsPlayButton = () => {
        setIsPlaying(true);
        const video = document.getElementById('video')
        video.play();
        video.controls = true;
    }



    return (
        <div className='grid grid-cols-2'>
            <div id='challenges block' className='flex h-[450px] bg-emerald-400 items-center'>
                <div id='solution' className='w-8 h-32 border-gray-500 border-2 flex'>
                    <h2 className='-rotate-90 font-serif text-customPurple font-semibold ml-7 '>Solution</h2>
                </div>
                <div id='google' className='flex flex-col items-center justify-center gap-2'>
                    <img src='/images/upper-half.svg' alt='upper half circle' className='w-28' />
                    <img src='/images/google.svg' alt='google pic' className='w-[130px] h-[40px]' />
                    <img src='/images/lower-half.svg' alt='lower half circle' className='w-28' />
                </div>
                <div id='text boxes' className='flex'>
                    <img src='/images/numbers.svg' alt='numbers line' className='h-[500px] w-[100px]' />
                </div>
                <div id='challenges'>
                    <div id='challenge' className='w-8 h-32 border-gray-500 border-2 '>
                        <h2 className='rotate-90 font-serif text-customPurple font-semibold mt-5'>Challenges</h2>
                    </div>
                </div>
            </div>
            <div id='video block' className='w-[] h-[500px] bg-red-400'>
                <h1>Title</h1>
            </div>
        </div>
    )
}

export default Challenge