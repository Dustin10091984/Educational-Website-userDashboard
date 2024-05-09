import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { IoGiftSharp } from "react-icons/io5";
import { PiStudentFill,PiBookOpenTextFill } from "react-icons/pi";



import 'swiper/css/pagination';

// import './styles.css';


import { Pagination, Autoplay } from 'swiper/modules';


const SliderCrourses = () => {
  return (
  <Swiper
  // slidesPerView={'auto'}
    // width={}
    loop={true}
  slidesPerView={1}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  
  breakpoints={{
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }}
  autoplay={{
    delay: 4500,
    disableOnInteraction: false,
  }}
  modules={[Autoplay,Pagination ]}
  className="mySwiper"
>
      <SwiperSlide className='flex justify-center items-center rounded-2xl max-w-96   '>
        <div className=' flex flex-row-reverse justify-center py-6 border-2 border-[#a4179682] bg-gradient-to-r from-[#b433ab8e] to-[#38022f77] rounded-xl shadow-2xl items-center'>                    
                    
                    <div className="relative ">
                        
                        <div className="absolute -top-6 -left-10 h-16 w-16 flex justify-center items-center bg-gradient-to-r from-blue-400 to-red-600  rounded-xl">
                            <span>.</span>
                        </div>


                        <div className="absolute flex justify-center items-center -top-10 -left-12 shadow-xl shadow-[#00000099]  backdrop-blur border border-gray-400 bg-[#ffffff13] rounded-xl h-16 w-16">
                        <Image src='/images/dna.png' alt='ebs'  width='50'
                          height='50' className='' />
                        </div>
                    
                </div>

                <div className=' pl-4 md:pl-1 flex justify-center items-center flex-col'>
                  <h2 className="   w-full pb-2  text-right pr-14 text-2xl md:text-lg sm:text-md text-gray-200 ">زیست شناسی</h2>
                  <p className=" pr-14 leading-loose sm:leading-loose h-full  text-right md:text-lg sm:text-xs text-gray-300 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                </div>
            </div>
        </SwiperSlide>




        <SwiperSlide className='flex justify-center items-center rounded-2xl max-w-96   '>
        <div className=' flex flex-row-reverse justify-center py-6 border-2 border-[#a4179682] bg-gradient-to-r from-[#b433ab8e] to-[#38022f77] rounded-xl shadow-2xl items-center'>                    
                    
                    <div className="relative ">
                        
                        <div className="absolute -top-6 -left-10 h-16 w-16 flex justify-center items-center bg-gradient-to-r from-blue-400 to-red-600  rounded-xl">
                            <span>.</span>
                        </div>


                        <div className="absolute flex justify-center items-center -top-10 -left-12 shadow-xl shadow-[#00000099]  backdrop-blur border border-gray-400 bg-[#ffffff13] rounded-xl h-16 w-16">
                        <Image src='/images/dna.png' alt='ebs'  width='50'
                          height='50' className='' />
                        </div>
                    
                </div>

                <div className=' pl-4 md:pl-1 flex justify-center items-center flex-col'>
                  <h2 className="   w-full pb-2  text-right pr-14 text-2xl md:text-lg sm:text-md text-gray-200 ">زیست شناسی</h2>
                  <p className=" pr-14 leading-loose sm:leading-loose h-full  text-right md:text-lg sm:text-xs text-gray-300 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className='flex justify-center items-center rounded-2xl max-w-96   '>
        <div className=' flex flex-row-reverse justify-center py-6 border-2 border-[#a4179682] bg-gradient-to-r from-[#b433ab8e] to-[#38022f77] rounded-xl shadow-2xl items-center'>                    
                    
                    <div className="relative ">
                        
                        <div className="absolute -top-6 -left-10 h-16 w-16 flex justify-center items-center bg-gradient-to-r from-blue-400 to-red-600  rounded-xl">
                            <span>.</span>
                        </div>


                        <div className="absolute flex justify-center items-center -top-10 -left-12 shadow-xl shadow-[#00000099]  backdrop-blur border border-gray-400 bg-[#ffffff13] rounded-xl h-16 w-16">
                        <Image src='/images/dna.png' alt='ebs'  width='50'
                          height='50' className='' />
                        </div>
                    
                </div>

                <div className=' pl-4 md:pl-1 flex justify-center items-center flex-col'>
                  <h2 className="   w-full pb-2  text-right pr-14 text-2xl md:text-lg sm:text-md text-gray-200 ">زیست شناسی</h2>
                  <p className=" pr-14 leading-loose sm:leading-loose h-full  text-right md:text-lg sm:text-xs text-gray-300 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                </div>
            </div>
        </SwiperSlide>




        <SwiperSlide className='flex justify-center items-center rounded-2xl max-w-96   '>
        <div className=' flex flex-row-reverse justify-center py-6 border-2 border-[#a4179682] bg-gradient-to-r from-[#b433ab8e] to-[#38022f77] rounded-xl shadow-2xl items-center'>                    
                    
                    <div className="relative ">
                        
                        <div className="absolute -top-6 -left-10 h-16 w-16 flex justify-center items-center bg-gradient-to-r from-blue-400 to-red-600  rounded-xl">
                            <span>.</span>
                        </div>


                        <div className="absolute flex justify-center items-center -top-10 -left-12 shadow-xl shadow-[#00000099]  backdrop-blur border border-gray-400 bg-[#ffffff13] rounded-xl h-16 w-16">
                        <Image src='/images/dna.png' alt='ebs'  width='50'
                          height='50' className='' />
                        </div>
                    
                </div>

                <div className=' pl-4 md:pl-1 flex justify-center items-center flex-col'>
                  <h2 className="   w-full pb-2  text-right pr-14 text-2xl md:text-lg sm:text-md text-gray-200 ">زیست شناسی</h2>
                  <p className=" pr-14 leading-loose sm:leading-loose h-full  text-right md:text-lg sm:text-xs text-gray-300 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                </div>
            </div>
        </SwiperSlide>



        <SwiperSlide className='flex justify-center items-center rounded-2xl max-w-96   '>
        <div className=' flex flex-row-reverse justify-center py-6 border-2 border-[#a4179682] bg-gradient-to-r from-[#b433ab8e] to-[#38022f77] rounded-xl shadow-2xl items-center'>                    
                    
                    <div className="relative ">
                        
                        <div className="absolute -top-6 -left-10 h-16 w-16 flex justify-center items-center bg-gradient-to-r from-blue-400 to-red-600  rounded-xl">
                            <span>.</span>
                        </div>


                        <div className="absolute flex justify-center items-center -top-10 -left-12 shadow-xl shadow-[#00000099]  backdrop-blur border border-gray-400 bg-[#ffffff13] rounded-xl h-16 w-16">
                        <Image src='/images/dna.png' alt='ebs'  width='50'
                          height='50' className='' />
                        </div>
                    
                </div>

                <div className=' pl-4 md:pl-1 flex justify-center items-center flex-col'>
                  <h2 className="   w-full pb-2  text-right pr-14 text-2xl md:text-lg sm:text-md text-gray-200 ">زیست شناسی</h2>
                  <p className=" pr-14 leading-loose sm:leading-loose h-full  text-right md:text-lg sm:text-xs text-gray-300 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                </div>
            </div>
        </SwiperSlide>



        <SwiperSlide className='flex justify-center items-center rounded-2xl max-w-96   '>
        <div className=' flex flex-row-reverse justify-center py-6 border-2 border-[#a4179682] bg-gradient-to-r from-[#b433ab8e] to-[#38022f77] rounded-xl shadow-2xl items-center'>                    
                    
                    <div className="relative ">
                        
                        <div className="absolute -top-6 -left-10 h-16 w-16 flex justify-center items-center bg-gradient-to-r from-blue-400 to-red-600  rounded-xl">
                            <span>.</span>
                        </div>


                        <div className="absolute flex justify-center items-center -top-10 -left-12 shadow-xl shadow-[#00000099]  backdrop-blur border border-gray-400 bg-[#ffffff13] rounded-xl h-16 w-16">
                        <Image src='/images/dna.png' alt='ebs'  width='50'
                          height='50' className='' />
                        </div>
                    
                </div>

                <div className=' pl-4 md:pl-1 flex justify-center items-center flex-col'>
                  <h2 className="   w-full pb-2  text-right pr-14 text-2xl md:text-lg sm:text-md text-gray-200 ">زیست شناسی</h2>
                  <p className=" pr-14 leading-loose sm:leading-loose h-full  text-right md:text-lg sm:text-xs text-gray-300 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className='flex justify-center items-center rounded-2xl max-w-96   '>
        <div className=' flex flex-row-reverse justify-center py-6 border-2 border-[#a4179682] bg-gradient-to-r from-[#b433ab8e] to-[#38022f77] rounded-xl shadow-2xl items-center'>                    
                    
                    <div className="relative ">
                        
                        <div className="absolute -top-6 -left-10 h-16 w-16 flex justify-center items-center bg-gradient-to-r from-blue-400 to-red-600  rounded-xl">
                            <span>.</span>
                        </div>


                        <div className="absolute flex justify-center items-center -top-10 -left-12 shadow-xl shadow-[#00000099]  backdrop-blur border border-gray-400 bg-[#ffffff13] rounded-xl h-16 w-16">
                        <Image src='/images/dna.png' alt='ebs'  width='50'
                          height='50' className='' />
                        </div>
                    
                </div>

                <div className=' pl-4 md:pl-1 flex justify-center items-center flex-col'>
                  <h2 className="   w-full pb-2  text-right pr-14 text-2xl md:text-lg sm:text-md text-gray-200 ">زیست شناسی</h2>
                  <p className=" pr-14 leading-loose sm:leading-loose h-full  text-right md:text-lg sm:text-xs text-gray-300 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                    </p>
                </div>
            </div>
        </SwiperSlide>




   





      </Swiper>
)
}

export default SliderCrourses