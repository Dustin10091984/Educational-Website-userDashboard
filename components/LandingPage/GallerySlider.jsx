import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { IoGiftSharp } from 'react-icons/io5'
import { PiStudentFill, PiBookOpenTextFill } from 'react-icons/pi'

import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import './styles.css';

import { Navigation, Pagination } from 'swiper/modules'

// Helper function to extract text from JSON
const getTextFromJson = (json) => {
  try {
    const rawContent = JSON.parse(json)
    return rawContent.blocks.map((block) => block.text).join(' ')
  } catch (e) {
    console.error("Couldn't parse the JSON:", e)
    return ''
  }
}

const GallerySlider = ({ sliderData }) => {
 
  return (
    <Swiper
      // effect={'coverflow'}
      loop={true}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      navigation={true}
      // coverflowEffect={{
      //   rotate: 20,
      //   stretch: 0,
      //   depth: 50,
      //   modifier: 1,
      //   slideShadows: true,
      // }}
      spaceBetween={10}
      pagination={{ clickable: true }}
      // breakpoints={{
      //   300: {
      //     slidesPerView: 1,
      //     spaceBetween: 20,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 40,
      //   },
      //   1024: {
      //     slidesPerView: 3,
      //     spaceBetween: 50,
      //   },
      // }}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      {sliderData.map(
        (slider, index) => {
          // Use the helper function to get text from JSON
          // const descriptionText = getTextFromJson(slider.description)
          // (
          return (
            <SwiperSlide
              key={index}
              className='    rounded-md'
            >
              <div className='w-full  h-full relative '>
                {slider.file && slider.file.match(/\.(mp4|webm)$/) ? (
                  <video
                    className='w-full h-full object-contain shadow-2xl shadow-black rounded-t-2xl'
                    controls
                  >
                    <source src={slider.file} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                ) : slider.file &&


                slider.file.match(/\.(jpeg|jpg|png|gif)$/) ? (
                  <img
                    src={slider.file}
                    alt={slider.title}
                    className='w-full h-full p-4  object-contain '
                  />
                ) : null}
              </div>
              <p className='w-full py-6 mt-4 text-center text-gray-200'>
                {slider.title}
              </p>
              <p className='w-full text-sm pb-10 px-2 text-center text-gray-300'>
                {/* {descriptionText} */}
                {slider.description}
              </p>
            </SwiperSlide>
          )
        }
        // )
      )}
    </Swiper>
  )
}

export default GallerySlider