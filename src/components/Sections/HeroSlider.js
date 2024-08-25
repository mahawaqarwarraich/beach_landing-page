import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from '../UI/Card';

const carouselVideos = [
    {
        src: '/images/1.jpg',
        type: 'video/mp4',
        title: 'Safe and Secure Space',
        text: 'We take pride in providing a safe and inclusive space for all our users. Our verification process ensures that everyone is genuine while respecting individual privacy.',
        href: '#',
    },
    {
        src: '/images/2.jpg',
        title: 'Title 2',
        text: 'Lorem Ipsum dolor sit amet',
        href: '#',
    },
    {
        src: '/images/3.jpg',
        title: 'Title 3',
        text: 'Lorem Ipsum dolor sit amet',
        href: '#',
    },
];




const HeroSider = () => {

    const [selectedItem, setSelectedItem] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)

    const nextSlide = () => {

        setSelectedItem(prev => {
            console.log(Math.min(2, prev + 1))
            return Math.min(2, prev + 1);
        })
        setAutoPlay(false)
    }

    const prevSlide = () => {
        setSelectedItem(prev => Math.max(0, prev - 1))
    }


    const setCurrSlide = (idx) => {

        setSelectedItem(idx)
    }





    // flex flex-col w-[280px] h-[580px] object-cover mx-4 rounded-t-3xl items-center 



    return (

        <div className='flex flex-col lg:flex-row gap-1.5 mt-10' id='container'>
            <div className='bg-white  pt-4 pb-20 flex items-center justify-center w-full lg:w-fit px-6 h-fit lg:h-[600px] relative' id='left-section'>
                <button onClick={prevSlide} className='w-[10px] [10px]'>

                    <img src='/images/left-arrow.svg' className='mb-20 cursor-pointer  transform hover:-translate-x-1 active:-translate-x-2' onMouseEnter={() => setAutoPlay(false)} alt='left arrow' />
                </button>

                <div className='mt-5 w-60 mx-4'>
                    <Carousel
                        showArrows={false}
                        showThumbs={false}
                        dynamicHeight={false}
                        showStatus={false}
                        className='overflow-hidden rounded-t-3xl rounded-b-3xl'
                        selectedItem={selectedItem}
                        showIndicators={false}
                        autoPlay={autoPlay}
                        stopOnHover={true}
                        infiniteLoop={true}
                        onChange={setCurrSlide}
                        interval={2000}>
                        {
                            carouselVideos.map((video, index) => (
                                <Card key={index} {...video} />
                            ))
                        }

                    </Carousel>
                    <div className='flex gap-1 justify-center mt-4'>
                        {carouselVideos.map((_, idx) => (
                            <div

                                className={`w-1 h-1 bg-customPurple rounded-full  hover:bg-purple-800 cursor-pointer ${selectedItem === idx ? 'bg-purple-800' : ''}`}
                                onClick={() => setCurrSlide(idx)}
                            ></div>
                        ))}

                    </div>
                </div>
                <button onClick={nextSlide} className='w-[10px] [10px]'>

                    <img src='/images/right-arrow.svg' className='mb-20 cursor-pointer transform hover:translate-x-1 active:translate-x-2' onMouseEnter={() => setAutoPlay(false)} alt='right arrow' />
                </button>

            </div>
            <div className='bg-white w-full px-12 pt-4 pb-2 lg:pb-8 h-fit flex flex-col justify-between lg:h-[600px]' id='right-section'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-customPurple text-center text-4xl font-times font-bold'>Title 2 lines</h1>
                    <div className='flex flex-col gap-8 text-justify text-[15px] text-'>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.
                        </p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there.
                        </p>
                    </div>
                </div>
                {/* </div><div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-4'> */}
                <div className='flex gap-4 justify-center items-center mt-4'>
                    {/* <img src='/images/apple-store.png' className='w-[200px] h-[70px] object-contain' alt='app store' /> */}
                    <div className='w-52'>
                        <img src='/images/apple-play.svg' className='w-fit object-contain' alt='app store' />
                    </div>
                    <div className='w-52'>
                        <img src='/images/google-play.svg' className='w-fit object-contain' alt='app store' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSider;
