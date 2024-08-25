import { useState } from 'react';

const FlipCard = ({
    title = "Title",
    description = "this is description",
    imgSrc
}) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
    // w-[394px] h-[350px] 

    return (
        <div className='w-full max-w-3/4 h-[350px] mt-1 perspective bg-transparent cursor-pointer group'>
            <div className={`relative preserve-3d w-full h-full duration-1000 ${isFlipped ? "my-rotate-y-180" : ""}`} onClick={handleFlip}>
                <div className='w-full h-full absolute border-2 bg-white rounded-sm border-gray-400   flex flex-col items-center pt-2 px-10 gap-6'>
                    <img src={imgSrc} className='w-40 h-40' alt='dummy pic' />
                    <h1 className='text-3xl font-times text-customPurple'>Front</h1>
                </div>
                <div id='back-side' className='w-full h-full absolute my-rotate-y-180 backface-hidden border-2 bg-white rounded-sm border-gray-400  flex flex-col items-center pt-2 cursor-pointer px-16 gap-6'>
                    <h1 className='text-3xl font-times text-customPurple'>Back</h1>
                    <p className='text-xs text-center'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
