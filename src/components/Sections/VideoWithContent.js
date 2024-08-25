import React from 'react';

const VideoWithContent = ({ videoSrc, title, description, link }) => {
  return (
    <div id='video-background-container' className='relative text-center z-10'>
      <video id='video-background' className='h-[80vh] w-[100%] object-cover ' autoPlay muted loop>
        <source src={videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div id='content-overlay' className='absolute text-white font-times top-0 left-0 bg-black/50 w-full h-full flex flex-col items-center justify-center px-5'>
        <div className='flex flex-col gap-3 items-center mb-6'>
          <h1 className='font-bold text-3xl sm:text-5xl'>{title}</h1>
          <p className='text-sm sm:text-xl'>{description}</p>
        </div>
        <a href={link} className='bg-gray-500/90 rounded-md hover:bg-gray-400/70 w-fit px-5 py-0.5 transition-colors duration-100 ease text-sm sm:text-lg'>Learn More</a>
      </div>
    </div>
  );
};

export default VideoWithContent;
