import React from 'react'
import Image from 'next/image'
import TeamSlider from './TeamSlider';
import Faq from './Faq';

const AboutEBS = ({FaqTitle,MarkTitle}) => {
  return (
    <div id='about' className='px-10 md:px-2  flex flex-col justify-center items-center  w-full min-h-screen   '>
        <p className=' text-gray-50 text-xl w-full border-t-2 border-gray-500 text-center py-2 sm:text-sm '>{MarkTitle}</p>
        <TeamSlider/>
        <Faq title={FaqTitle} />

    </div>
  )
}

export default AboutEBS