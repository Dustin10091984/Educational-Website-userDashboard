import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoGiftSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";

const StudentSlider = () => {
  const [topStudent, setTopStudent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.ebsalar.com/api/v1/front/top_students/")
      .then((res) => {
        setTopStudent(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  
  if (isLoading) {
    return <div>loading ...</div>;
  }
  return (
    <>
      <Swiper
        centeredSlides={true}
        // effect={'cards'}
        // grabCursor={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {topStudent.map((item) => (
          <SwiperSlide className=" rounded-2xl w-full px-4  " key={item.id} >
            <div className=" w-full  backdrop-blur-xl flex  justify-center items-center flex-col bg-[#ffffffb8]  rounded-2xl py-2  h-full">
              <div className=" w-72  py-16 md:py-4   flex space-y-6 justify-center items-center flex-col">
                <Image
                  src={"/images/gift.gif"}
                  alt="ebs"
                  width="200"
                  height="200"
                  className=" z-50  absolute bottom-1/2"
                />
                <Image
                  src={item.student.avatar}
                  alt="ebs"
                  width="600"
                  height="600"
                  className=" w-44 h-44 border-4 border-[#5f1f30ab] shadow-xl shadow-[#804685cf] rounded-full"
                />
                <div className='h-44 overflow-y-scroll flex justify-center items-center flex-col scrollbar-hide '>

                <p className="text-gray-50 whitespace-nowrap pt-2"> {item.student.last_name} {item.student.first_name}</p>
                <p className="  text-center text-sm md:text-sm text-gray-800 leading-loose  ">
                  {item.description}
                </p>
              </div>
                {/* -------------------------button gradient */}
                {/* <div className="px-2 py-3">
                  <button
                    className="shadow-xl shadow-[#8a03277f] px-7 py-4 bg-gradient-to-r from-[#7b2a6f71] to-[#8a0327]  backdrop-blur-xl
                     rounded-2xl  flex items-center divide-x divide-gray-600"
                  >
                    <IoGiftSharp className="text-2xl text-white mr-2" />
                    <p className="pl-2 text-gray-300"> تبریک</p>
                  </button>
                </div> */}
              </div>

              {/* button gradient */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default StudentSlider;
