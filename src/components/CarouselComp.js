import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselComp = () => {

  const [selectedItem, setSelectedItem] = useState(0)

  const nextSlide = () => {
    setSelectedItem(prev => Math.min(2, prev + 1))
  }

  const prevSlide = () => {
    setSelectedItem(prev => Math.max(0, prev - 1))
  }

  const setFirstItem = () => {
    setSelectedItem(0)
  }

  const setSecondItem = () => {
    setSelectedItem(1)
  }

  const setThirdItem = () => {
    setSelectedItem(2)
  }

  const showIndicators = () => {
    return (
      <>

      </>
    )
  }

  return (
    <div className='w-screen bg-gray-200 px-6'>
      <div className='flex gap-2'>
        <div className='bg-white px-9 flex items-center'>
        <img src='/images/left-arrow.svg' className='w-[20px] h-[20px] mb-20 cursor-pointer' onClick={prevSlide}/>
        <div className='flex flex-col w-[300px] mx-4 mt-4 rounded-t-3xl items-center'>
        <Carousel

            showArrows={false}
            showThumbs={false}
            dynamicHeight={true}
            showStatus={false}
            className=' rounded-t-3xl overflow-hidden h-[100px] h-fit '
            selectedItem={selectedItem}
            showIndicators={false}
          
           
          
          >
            <div>
              <img src="/images/check.jpg" />
            
            </div>
            <div>
              <img src="/images/2.jpg" />
             
            </div>
            <div>
              <img src="/images/3.jpg" /> 
             
            </div>          
          </Carousel>
          <div className='bg-gray-200  h-fit rounded-b-3xl px-3 pt-2 flex flex-col gap-4 text-center items-center'>
           
              <h1 className='font-semibold text-xl'>Safe and Secure Space</h1>
              <p className='text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.All the Lorem Ipsum generators.
    
              </p>
              <img src='/images/arrow-circle.svg' className='w-10 h-10 cursor-pointer'/>
              
            
             </div>
             <div className='flex space-x-3 mt-5 mb-12 items-center'>
              {
               selectedItem === 0 ? (
                <img src='/images/outlined-circle.svg' className='w-2 h-2'/>
               ) : (
                <div className='bg-customPurple w-1 h-1 rounded-full cursor-pointer' onClick={setFirstItem}></div>
               )
              }
               {
               selectedItem === 1 ? (
                <img src='/images/outlined-circle.svg' className='w-2 h-2'/>
               ) : (
                <div className='bg-customPurple w-1 h-1 rounded-full cursor-pointer' onClick={setSecondItem}></div>
               )
              }
               {
               selectedItem === 2 ? (
                <img src='/images/outlined-circle.svg' className='w-2 h-2'/>
               ) : (
                <div className='bg-customPurple w-1 h-1 rounded-full cursor-pointer' onClick={setThirdItem}></div>
               )
              }
              
              
             </div>

        

     
        

          </div>
          <img src='/images/right-arrow.svg' className='w-[20px] h-[20px] mb-20 cursor-pointer' onClick={nextSlide}/>
        </div>
        <div className='bg-white w-full px-4 pt-4 pb-16'>
          <div>
            <h1 className='text-customPurple font-serif text-center text-3xl'>Title 2 lines</h1>
            <p className='font-bold text-lg'> Body text - 3 paragraphs</p>
          <div className='flex gap-4 justify-center mt-64'>
      
            <img src='/images/apple-store.png' className='w-[200px] h-[70px] object-contain'/>
            <img src='/images/apple-store.png' className='w-[200px] h-[70px] object-contain'/>
            
          </div>

          </div>
        
        </div>
      </div>
    </div>
  );
};

export default CarouselComp;
