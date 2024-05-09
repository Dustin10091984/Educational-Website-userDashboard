import React from 'react'
import Bg from '@/components/LandingPage/Bg'
import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'
import HeaderPublic from '@/components/HeaderPublic'
import IncrementingNumber from '@/components/About/IncrementingNumber'

const result = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-black -z-10 '>
      <HeaderPublic />
      <div className='z-0 '>
        <Bg />
      </div>
      <div className=''>
        <div
          className='  animate-fade-up animate-once animate-duration-1000 animate-ease-linear animate-normal p-2 w-[950px] h-[650px] md:w-[550px] sm:w-[350px] bg-[#e6dcdc16]
          backdrop-blur-xl shadow-2xl rounded-2xl'
        >
          <div className='flex flex-col justify-around items-center w-full h-full '>
            <div className='flex items-center justify-around w-full py-2 border-b-2 border-gray-900'>
              <IncrementingNumber />
              <p
                className='text-gray-50 pr-2 text-xl md:text-sm
                        text-center whitespace-nowrap'
              >
                قبولی دانشگاه‌های سراسری
              </p>
            </div>

            <div className='flex items-center justify-around w-full py-2 border-b-2 border-gray-900'>
              <IncrementingNumber />
              <p
                className='text-gray-50 pr-2 text-xl md:text-sm
                        text-center whitespace-nowrap'
              >
                قبولی دانشگاه‌های سراسری
              </p>
            </div>

            <div className='flex items-center justify-around w-full py-2 border-b-2 border-gray-900'>
              <IncrementingNumber />
              <p
                className='text-gray-50 pr-2 text-xl md:text-sm
                        text-center whitespace-nowrap'
              >
                قبولی دانشگاه‌های سراسری
              </p>
            </div>

            <div className='flex items-center justify-around w-full py-2 border-b-2 border-gray-900'>
              <IncrementingNumber />
              <p
                className='text-gray-50 pr-2 text-xl md:text-sm
                        text-center whitespace-nowrap'
              >
                قبولی دانشگاه‌های سراسری
              </p>
            </div>

            <div className='flex items-center justify-around w-full py-2 border-b-2 border-gray-900'>
              <IncrementingNumber />
              <p
                className='text-gray-50 pr-2 text-xl md:text-sm
                        text-center whitespace-nowrap'
              >
                قبولی دانشگاه‌های سراسری
              </p>
            </div>

            <div className='flex items-center justify-around w-full py-2 border-b-2 border-gray-900'>
              <IncrementingNumber />
              <p
                className='text-gray-50 pr-2 text-xl md:text-sm
                        text-center whitespace-nowrap'
              >
                قبولی دانشگاه‌های سراسری
              </p>
            </div>

            <div className='flex items-center justify-around w-full py-2 border-b-2 border-gray-900'>
              <IncrementingNumber />
              <p
                className='text-gray-50 pr-2 text-xl md:text-sm
                        text-center whitespace-nowrap'
              >
                قبولی دانشگاه‌های سراسری
              </p>
            </div>

            <div className='flex items-center justify-around w-full py-2 '>
              <IncrementingNumber />
              <p
                className='text-gray-50 pr-2 text-xl md:text-sm
                        text-center whitespace-nowrap'
              >
                قبولی دانشگاه‌های سراسری
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className='fixed  bottom-4 w-full text-center font-bold opacity-75  text-purple-900'>
        {' '}
        28<br></br> سال تجربه
      </p>
      <Link href='/aboutebs'>
        <FaArrowLeftLong className='fixed bottom-4 left-4 text-gray-300' />
      </Link>
    </div>
  )
}

export default result
