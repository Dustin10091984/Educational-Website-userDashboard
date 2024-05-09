import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiStudentFill,PiBookOpenTextFill } from "react-icons/pi";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const CoursesSlider2 = () => {
  return (
  <Swiper
  slidesPerView={3}
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
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }}
  modules={[Pagination]}
  className="mySwiper"
>
<SwiperSlide>


<div className='w-[400px]'>
    <div className=' flex w-[400px]   flex-row-reverse justify-center py-2 border-2 border-[#a4179682] bg-gradient-to-r from-[#b433ab8e] to-[#38022f77] rounded-xl shadow-2xl items-center'>                    
                        
                        <div className="relative w-[400px]">
                            
                            <div className="absolute -top-6 -left-10 h-16 w-16 flex justify-center items-center bg-gradient-to-r from-fuchsia-500 to-pink-500  rounded-xl">
                                
                            </div>


                            <div className="absolute flex justify-center items-center -top-10 -left-12 shadow-xl shadow-[#00000099]  backdrop-blur border border-gray-400 bg-[#ffffff13] rounded-xl h-16 w-16">
                            <PiStudentFill className='text-gray-50 text-4xl'/>
                            </div>
                        
                    </div>

                    <div className=' pl-4 flex justify-center items-center flex-col '>
                      <h2 className="   w-full py-2  text-right pr-20 text-2xl md:text-lg sm:text-md text-gray-200 ">شیمی</h2>
                      <p className=" pr-20 leading-loose sm:leading-loose h-full pb-4 text-right md:text-lg sm:text-xs text-gray-300 ">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                        </p>
                    </div>
    </div>

  </div>

</SwiperSlide>





      </Swiper>
)
}

export default CoursesSlider2