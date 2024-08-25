import { React } from 'react';

const SceneText = () => {


    return (
        <div className='flex flex-col-reverse md:flex-row gap-4 h-fit justify-center items-center'>



            <video id='video-background' className='w-full lg:w-1/2 h-[420px] object-cover' autoPlay muted loop>
                <source src='/videos/beach.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>



            <div className='w-full lg:w-1/2 bg-white h-[420px] pt-5 px-3 '>
                <h1 className='text-3xl  text-customPurple font-bold font-times text-center mb-5'>Title</h1>
                <p className='font-times leading-tight text-gray-500 text-xs'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ratione cupiditate odit, et ducimus reiciendis quibusdam? Est reprehenderit, natus ea, laborum eos doloribus nam sapiente accusamus tempore quaerat totam eligendi?</p>
            </div>
        </div >
    );
};

export default SceneText;
