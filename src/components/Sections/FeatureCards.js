import React from 'react'
import FlipCard from '../UI/FlipCard';

const cards = [
    {
        title: 'Title 1',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: '/images/dummy-graphic.jpg'
    },
    {
        title: 'Title 2',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: '/images/dummy-graphic.jpg'
    },
    {
        title: 'Title 3',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: '/images/dummy-graphic.jpg'
    },
    {
        title: 'Title 4',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: '/images/dummy-graphic.jpg'
    },
    {
        title: 'Title 5',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: '/images/dummy-graphic.jpg'
    },
    {
        title: 'Title 6',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste, quos ut eaque reiciendis architecto necessitatibus id velit dolores ea molestias, excepturi provident doloremque quia sit quas deleniti sapiente ab.',
        imgSrc: '/images/dummy-graphic.jpg'
    },
];


const FeatureCards = () => {

    return (
        <section>
            <h1 className='text-center text-4xl font-bold text-customPurple font-times mb-10'>Title</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-2'>
                {
                    cards.map(({ title, description, imgSrc }, idx) => {
                        return (
                            <FlipCard key={idx} title={title} description={description} imgSrc={imgSrc} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default FeatureCards