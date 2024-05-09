import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
 import HeaderPublic from "@/components/HeaderPublic";
//  import TeamSlider from "@/components/LandingPage/TeamSlider";
const data = [
  {
    id: 1,
    file: "/videos/slider01.mp4",
    desc: "description",
  },
  {
    id: 2,
    file: "/images/cell.jpg",
    desc: "description",
  },
  {
    id: 3,
    file: "/images/chart.jpg",
    desc: "description",
  },
  {
    id: 4,
    file: "/images/phy.jpeg",
    desc: "description",
  },
  {
    id: 5,
    file: "/images/student.jpg",
    desc: "description",
  },
  {
    id: 6,
    file: "/images/student.jpg",
    desc: "description",
  },
  {
    id: 7,
    file: "/images/student.jpg",
    desc: "description",
  },
  {
    id: 8,
    file: "/images/student.jpg",
    desc: "description",
  },
];
export default function gallery() {
  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.ebsalar.com/api/v1/front/gallery_files/")
      .then((res) => {
        setGalleryData(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full min-h-screen justify-center items-center flex flex-col">
      <HeaderPublic/>

      <Image
            src="/images/bg-d.jpg"
            alt="ebs"
            width="1200"
            height="800"
            className="  fixed top-0 left-0 w-full min-h-screen -z-20"
          />
        {/* <TeamSlider/> */}

      {/* <a className=" text-center mt-5 font-[700]  text-[80px] [text-shadow:-2px_1px_6px_rgba(174,_14,_174,_1),_-20px_20px_25px_rgba(10,_169,_26,_0.95),_9px_-17px_22px_rgba(32,_181,_255,_0.86),_12px_0px_6px_rgba(239,_255,_20,_0.97)]- cursor-default tracking-[20px] [transition:all_0.5s_ease-in-out]  ">
        GALLERY
      </a> */}
      <div className="grid grid-cols-5 p-[5%] md:grid-cols-2 sm:grid-cols-1 gap-6  w-full ">
        {galleryData.map((item) => (
          <div
            className="animate-fade-up border  animate-ease-in cursor-pointer w-full  gap-4 grid    hover:[box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_15px] [transition:all_0.8s_ease-in-out]      "
            key={item.id}
          >
            <div className="w-full">
              {item.file && item.file.match(/\.(mp4|webm)$/) ? (
                <video
                  className="w-full h-full object-cover  rounded-t-[5px]"
                  controls
                >
                  <source src={item.file} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : item.file && item.file.match(/\.(jpeg|jpg|png|gif)$/) ? (
                <img
                  src={item.file}
                  alt={item.title}
                  className="w-full h-full object-cover   "
                />
              ) : null}
            </div>
            <div className='px-4 w-full '>
              <p className="text-xl pt-4 w-full text-center " >{item.title ? item.title : "title"}</p>
              <p className=" text-md py-4 w-full text-center">
                {item.description ? item.description : "default description"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
