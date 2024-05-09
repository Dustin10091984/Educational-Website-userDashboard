import React from 'react'
import HeroChart from './HeroChart';
import HeroBarChart from './HeroBarChart'
import {  FaBookOpenReader } from "react-icons/fa6";


import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { PiBooksDuotone } from "react-icons/pi";
import { TbReport, TbFolderOpen } from "react-icons/tb";
const HeroDevice = () => {
  return (
    <div className='w-full   animate-fade-up animate-once animate-duration-4000 animate-ease-out animate-delay-400   backdrop-blur-md shadow-2xl rounded-xl '>
      <p className='text-sm text-teal-50 md:leading-6 pt-20 md:text-xs text-right py-3'> این اطلاعات بصورت دمو قرار داده شده است و بعد از احراز هویت به اطلاعات شما تغییر پیدا می کند و فعال می گردد</p>
        <div className='p-4 w-full h-full bg-[#d1cecea9]  rounded-xl '>
           <div className=' flex md:flex-col md:space-x-0 md:space-y-4 w-full space-x-3 justify-center rounded-md'>
            <div className='w-1/2 md:w-full border shadow-2xl rounded-md py-2'>
            <HeroChart/>
            </div>
            <div className='w-1/2 md:w-full border shadow-2xl rounded-md py-2'>
            <HeroBarChart/>
            </div>


           </div>
            <div className=' flex justify-center md:flex-col py-6  items-center w-full'>
            
                <div className=' rounded-md h-full w-full p-4 grid grid-cols-3 sm:grid-cols-2 gap-6 sm:gap-6 md:p-2 place-items-center'>

                <Link href='/classes' className='w-full'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='p-6 md:p-2    cursor-pointer rounded-full border-gray-50 border-2 shadow-[#c768cae9] shadow  bg-pink-600'> 
                        <div className='h-14 w-14    flex justify-center  items-center rounded-full'>
                        <PiBooksDuotone className='text-gray-200 text-3xl' />
                        </div>
                    </div>

                    <p className='text-xs py-2'>کلاسها</p>
                </div>
                </Link>


                <Link href='/courses' className='w-full'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='p-6 md:p-2    cursor-pointer rounded-full border-gray-50 border-2 shadow-[#c768cae9] shadow  bg-pink-600'> 
                        <div className='h-14 w-14    flex justify-center  items-center rounded-full'>
                        <PiBooksDuotone className='text-gray-200 text-3xl' />
                        </div>
                    </div>

                    <p className='text-xs py-2'>دوره ها</p>
                </div>
                </Link>

                <Link href='/performance' className='w-full'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='p-6 md:p-2    cursor-pointer rounded-full border-gray-50 border-2 shadow-[#c768cae9] shadow  bg-pink-600'> 
                        <div className='h-14 w-14    flex justify-center  items-center rounded-full'>
                        <PiBooksDuotone className='text-gray-200 text-3xl' />
                        </div>
                    </div>

                    <p className='text-xs py-2'> عملکرد من</p>
                </div>
                </Link>


       

                <Link href='/classes' className='w-full'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='p-6 md:p-2    cursor-pointer rounded-full border-gray-50 border-2 shadow-[#c768cae9] shadow  bg-pink-600'> 
                        <div className='h-14 w-14    flex justify-center  items-center rounded-full'>
                        <FaBookOpenReader  className='text-gray-200 text-3xl' />
                        </div>
                    </div>

                    <p className='text-xs py-2'>کلاسها</p>
                </div>
                </Link>

                <div className='flex flex-col justify-center items-center'>
                    <div className='p-6 md:p-2 cursor-pointer  rounded-full border-gray-50 border-2 shadow-[#c768cae9] shadow  bg-pink-600'> 
                        <div className='h-14 w-14    flex justify-center  items-center rounded-full'>
                        <TbReport className='text-gray-200 text-3xl' />
                        </div>
                    </div>

                    <p className='text-xs py-2'>گزارش ها</p>
                </div>

              
                <div className='flex flex-col justify-center items-center'>
                    <div className='p-6 md:p-2 cursor-pointer  rounded-full border-gray-50 border-2 shadow-[#c768cae9] shadow  bg-pink-600'> 
                        <div className='h-14 w-14    flex justify-center  items-center rounded-full'>
                        <TbFolderOpen className='text-gray-200 text-3xl' />
                        </div>
                    </div>

                    <p className='text-xs py-2'>فایل ها</p>
                </div>



                </div>
            </div>
    
        </div>
             
    </div>
  )
}

export default HeroDevice