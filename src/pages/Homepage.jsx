import React from 'react'

import VideoWithContent from '../components/Sections/VideoWithContent';
import HeroSider from '../components/Sections/HeroSlider';
import ChallengesAndSolutions from '../components/Sections/ChallengesAndSolutions';
import FeatureCards from '../components/Sections/FeatureCards';
import StackedCards from '../components/Sections/StackedCards';
import InfoCards from '../components/Sections/InfoCards';
import SceneText from '../components/Sections/SceneText';

const Homepage = () => {
  return (
    <div id='home' className=''>
        <VideoWithContent
        videoSrc='/videos/meeting.mp4'
        title='Welcome to our site'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        link='https://www.google.com'   
        />
        <img src='/images/purple-line.svg' alt='purple brush stroke' className='-rotate-180 -mt-2'/>
        <div className='px-8'>
        <HeroSider/>
        </div>
        <img src='/images/purple-line.svg' alt='purple brush stroke' className='mt-2 mb-8'/>
        <div className='px-8'>
        <ChallengesAndSolutions/>
        </div>
        <img src='/images/purple-line.svg' alt='purple brush stroke' className='mt-8 mb-8'/>
       <div className='px-8'>
        <FeatureCards/>
        </div>
        <img src='/images/purple-line.svg' alt='purple brush stroke' className='mt-8 mb-8'/>
        <div className='px-8'>
        <StackedCards/>
        </div>
        <img src='/images/purple-line.svg' alt='purple brush stroke' className='mt-8 mb-8'/>
        <div className='px-8'>
       <InfoCards/>
        </div>
        <img src='/images/purple-line.svg' alt='purple brush stroke' className='mt-8 mb-8'/>
        <div className='px-8'>
       <SceneText/>
        </div>
        <img src='/images/purple-line.svg' alt='purple brush stroke' className='mt-8 mb-8'/>
    </div>
  )
}

export default Homepage