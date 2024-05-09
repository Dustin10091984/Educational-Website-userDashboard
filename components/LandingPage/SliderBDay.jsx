import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { IoGiftSharp } from "react-icons/io5";
import { PiStudentFill,PiBookOpenTextFill } from "react-icons/pi";

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import axios from 'axios'
// import './styles.css';


import {EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


const SliderBDay = () => {
  const[sData,setSData]=useState([])
  const[isLoading,setIsLoading]=useState(true)

useEffect(()=>{
  axios.get("https://api.ebsalar.com/api/v1/front/birth_day_students/").then(res=>{
    setSData(res.data.results)
    setIsLoading(false)
  }).catch(
    err=>console.log(err)
  )
},[])

while(sData.length<4){
  sData.push({
    "id": 1,
      "student": {
        "first_name": "",
        "last_name": "",
        "avatar": ""
      }
  })

}
// if(isLoading){
//   return(
//     <div>LOADING ...</div>
//   )
// }


  return (
  <Swiper
  // slidesPerView={'auto'}
    // width={}
  effect={'coverflow'}
  loop={true}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={4}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  spaceBetween={10}
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
  autoplay={{
    delay: 8500,
    disableOnInteraction: false,
  }}
  modules={[Autoplay,Pagination,EffectCoverflow ]}
  className="mySwiper"
>
{sData.map((item)=>(
  <SwiperSlide className=' rounded-2xl   w-full  ' key={item.id} >
          <div className=' w-full   flex  justify-center items-center flex-col bg-[#ffffffb8]  rounded-2xl py-2  h-full'>
            <div className=' w-72  py-16 md:py-4   flex space-y-6 justify-center items-center flex-col'>
              <Image src='/images/gift.gif' alt='ebs'  width='200'
               height='200' className=' z-50  absolute bottom-1/2' />
            <Image src={item.student.avatar ? item.student.avatar:"/images/student.jpg"} alt='ebs'  width='600'
                        height='600' className=' w-44 h-44 border-4 border-[#5f1f30ab] shadow-xl shadow-[#804685cf] rounded-full' />
            <p className='text-gray-50 pt-2'>{item.student.first_name ? item.student.first_name :"mostafa"} {item.student.last_name ? item.student.last_name:"torkamani" } </p>
             <p className="  text-center md:text-lg sm:text-xs text-gray-800 leading-loose  ">Happy Birthday</p>


   {/* -------------------------button gradient */}
               <div className="px-2 py-3">
                    <button className="shadow-xl shadow-[#8a03277f] px-7 py-4 bg-gradient-to-r from-[#7b2a6f71] to-[#8a0327]
                     rounded-2xl  flex items-center divide-x divide-gray-600">

                      <p className="pl-2 text-gray-300">   تبریک</p>
                    </button>
                </div>
                </div>


    {/* button gradient */}
          </div>
        </SwiperSlide>
))}





      </Swiper>
)
}

export default SliderBDay