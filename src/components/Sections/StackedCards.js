import { React, useState, useEffect } from 'react'
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
    }
];



const StackedCards = () => {

    const [expandedCardIndex, setExpandedCardIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleMouseEnter = (index) => {
        console.log('index:', index)
        if (expandedCardIndex !== index) {
            setExpandedCardIndex(index);
            setIsTransitioning(!isTransitioning);
        }

    }

    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
            }, 700);

            return () => clearTimeout(timer);
        }
    }, [expandedCardIndex, isTransitioning]);

    return (
        <>
            <div className='text-center'>

                <h1 className='text-4xl font-times text-customPurple font-bold mb-10'>Title</h1>

                <div className='flex space-x-6 mb-4'>



                    {
                        carouselVideos.map((video, index) => (
                            <div key={index} className={` transition-all duration-700 ease-in-out ${expandedCardIndex === index ? 'w-[500px]' : 'w-60'}`} onMouseEnter={() => handleMouseEnter(index)}>
                                <Card  {...video} hideDescription={isTransitioning && expandedCardIndex === index} />

                            </div>


                        ))
                    }


                </div>

            </div>


        </>
    )
}

export default StackedCards