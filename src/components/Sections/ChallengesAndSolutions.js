import React, { useState } from 'react'


const ChallengesAndSolutions = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayBtnClick = () => {
        setIsPlaying(true);
        const video = document.getElementById('video');
        video.play();
        video.controls = true;

    }

    return (
        <>
            <div id='container' className='flex md:flex-row flex-col-reverse'>
                <div id='left-section' className='flex bg-white md:w-[55%] h-[400px] items-center px-1 w-full'>
                    {/* <div id='solution' className='border border-customPurple px-3 py-1 -rotate-90 -ml-8'>
                        <h1 className='text-customPurple text-2xl  font-times font-semibold'>Solution</h1>
                    </div> */}
                    <div id='challenges' className='border border-customPurple px-3 py-1 -rotate-90 -ml-8 h-6 sm:h-10 w-[136px]'>
                        <h1 className='text-customPurple sm:text-2xl text-lg font-times font-semibold -mt-2 sm:mt-0'>Solutions</h1>
                    </div>
                    <div id='google' className='flex flex-col gap-2 -translate-x-6'>
                        <img src='/images/upper-half.svg' alt='upper half circle' />
                        <img src='/images/google.svg' alt='google logo' className='w-[120px] h-fit' />
                        <img src='/images/lower-half.svg' alt='lower half circle' />
                    </div>
                    <div id='numbered-section' className='flex h-[390px] -ml-12 w-[500px] relative z-9 mr-8 sm:mr-2'>
                        <img src='/images/arc.svg' alt='arc' className='' />
                        <div id='numbered-steps' className='flex flex-col gap-1.5 -ml-8 w-[92%]'>
                            <div id='step' className='flex items-center -ml-10'>
                                <div id='number' className='w-[50px] h-[50px] bg-customPurple text-white rounded-full font-sans text-4xl font-semibold flex justify-center items-center'>1</div>
                                <div id='text' className='h-fit flex items-center py-2 px-4 -ml-3 font-times text-xl shadow-customShadow w-full'>Text...</div>
                            </div>
                            <div id='step' className='flex items-center -ml-4'>
                                <div id='number' className='w-[50px] h-[50px] bg-customPurple text-white rounded-full font-sans text-4xl font-semibold flex justify-center items-center'>2</div>
                                <div id='text' className='h-fit flex items-center py-2 px-4  -ml-3 font-times text-xl shadow-customShadow w-full'>Text...</div>
                            </div>
                            <div id='step' className='flex items-center -ml-1'>
                                <div id='number' className='w-[50px] h-[50px] bg-customPurple text-white rounded-full font-sans text-4xl font-semibold flex justify-center items-center'>3</div>
                                <div id='text' className='h-fit flex items-center py-2 px-4   -ml-3 font-times text-xl shadow-customShadow w-full'>Text...</div>
                            </div>
                            <div id='step' className='flex  items-center ml-0.5 '>
                                <div id='number' className='w-[50px] h-[50px] bg-customPurple text-white rounded-full font-sans text-4xl font-semibold flex justify-center items-center'>4</div>
                                <div id='text' className='h-fit flex items-center py-2 px-4 -ml-3 font-times text-xl shadow-customShadow w-full'>Text...</div>
                            </div>
                            <div id='step' className='flex items-center -ml-1 '>
                                <div id='number' className='w-[50px] h-[50px] bg-customPurple text-white rounded-full font-sans text-4xl font-semibold flex justify-center items-center'>5</div>
                                <div id='text' className='h-fit flex items-center py-2 px-4   -ml-3 font-times text-xl shadow-customShadow w-full'>Text...</div>
                            </div>
                            <div id='step' className='flex items-center -ml-4 '>
                                <div id='number' className='w-[50px] h-[50px] bg-customPurple text-white rounded-full font-sans text-4xl font-semibold flex justify-center items-center'>6</div>
                                <div id='text' className='h-fit flex items-center py-2 px-4   -ml-3 font-times text-xl shadow-customShadow w-full'>Text...</div>
                            </div>
                            <div id='step' className='flex  items-center -ml-10'>
                                <div id='number' className='w-[50px] h-[50px] bg-customPurple text-white rounded-full font-sans text-4xl font-semibold flex justify-center items-center'>7</div>
                                <div id='text' className='h-fit flex items-center py-2 px-4 -ml-3 font-times text-xl shadow-customShadow w-full'>Text...</div>
                            </div>
                        </div>
                    </div>
                    <div id='challenges' className='flex flex-col w-fit relative items-center justify-center'>
                        <img src='/images/arrow.svg' alt='upper arrow' className='h-24 mb-12 ml-10 absolute -translate-x-4 -translate-y-24' />
                        <div id='challenges' className='border border-customPurple px-3 py-1 rotate-90 -mr-20 absolute -translate-y-1 -translate-x-11 ml-2 h-6 sm:h-10 w-[136px]'>
                            <h1 className='text-customPurple sm:text-2xl text-lg font-times font-semibold sm:mt-0 sm:ml-0 -mt-2 ml-3'>Challenges</h1>
                        </div>
                        <img src='/images/arrow.svg' alt='lower arrow' className='h-24 rotate-180 mt-16 ml-10 -translate-x-4 translate-y-20' />
                    </div>
                </div>
                <div id='right-section' className='w-full  flex flex-col items-center gap-4 p-10  mb-6 md:mb-0'>
                    <h3 className='text-center text-3xl text-customPurple font-times font-semibold'>Title</h3>
                    <div className='relative'>
                        <video id='video' src='https://www.w3schools.com/html/mov_bbb.mp4' className='min-w-10 w-[450px] object-contain' />
                        <button className={`w-[55px] h-[55px]  border-white rounded-full border-4 text-white text-5xl flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:content-[''] before:text-[1.5rem] before:text-white ${isPlaying ? 'hidden' : 'block'}`} onClick={handlePlayBtnClick} >
                            <img src='/images/play.svg' alt='play button' className='w-6 h-6' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChallengesAndSolutions