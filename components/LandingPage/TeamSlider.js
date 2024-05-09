// import React, { Component } from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function TeamSlider() {
  const [tournoment, setTournoment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.ebsalar.com/api/v1/front/tournament/")
      .then((res) =>{ setTournoment(res.data.results)
    setIsLoading(false)})
      .catch((err) => console.log(err));
      
  },[]);
  const settings = {
    slidesToShow: 3,
    autoplay: false,
    // slidesToScroll: 1,
    arrows: true,
    // vertical: true,
    speed: 500,
    // autoplaySpeed: 3500,
    lazyLoad: true,
    swipeToSlide: true,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 1100,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //   },
      // },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if(isLoading){
    return(<div> loading ...</div>)
  }
  return (
    <div className="slider-container px-4  min-h-full py-8  w-full">
      <Slider {...settings}>
        {
          tournoment.map((item)=>(
            <div key={item.id} className="w-full  h-full min-h-full">

            <div className=" relative  w-full    flex  justify-center items-center flex-col  rounded-2xl   h-full">
              <div className="border border-gray-700 text-center  h-full  relative overflow-hidden w-96 sm:w-72 backdrop-blur-xl bg-[#c357a442]    rounded-2xl  flex space-y-4 justify-center items-center flex-col">
              {item.file && item.file.match(/\.(mp4|webm)$/) ? (
                  <video
                    className='w-full h-full object-contain shadow-2xl shadow-black rounded-t-2xl'
                    controls
                  >
                    <source src={item.file} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                ) : item.file &&


                item.file.match(/\.(jpeg|jpg|png|gif)$/) ? (
                  <img
                    src={item.file}
                    alt={item.title}
                    className='w-full h-full   object-contain '
                  />
                ) : null}
                <div className='h-44 overflow-y-scrol backdrop-blur-md  bg-[#00000018] absolute bottom-0 left-0 w-full scrollbar-hide '>
                  <p className="w-full text-lg  text-gray-100  py-4">{item.title}</p>
                  <p className=" w-full h-full px-4 pb-4 leading-6 text-center  text-sm text-gray-200 ">
                    {item.description}
                  </p>

                </div>

                {/* -------------------------button gradient */}
                {/* <div className="px-2 py-3">
                    <button className=" h-full px-7 py-4 bg-gradient-to-r from-[#7b2a6f71] to-[#8a0327]  backdrop-blur-xl
                     rounded-2xl  flex items-center divide-x divide-gray-600">

                      <p className="pl-2 text-gray-300"> ثبت نام </p>
                    </button>
                    </div> */}
              </div>

              {/* button gradient */}
            </div>
          </div>
          ))
        }

      </Slider>
    </div>
  );
}

export default TeamSlider;
