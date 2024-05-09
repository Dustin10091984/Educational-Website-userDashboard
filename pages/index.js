"use client";
import Link from "next/link";
import { TbShoppingCartCog } from "react-icons/tb";

import { BiSolidHomeAlt2, BiMessageAltDots } from "react-icons/bi";
import {
  PiStudentFill,
  PiBookOpenTextFill,
  PiArrowFatLineUpLight,
} from "react-icons/pi";
import dynamic from "next/dynamic";
import HeaderPublic from "@/components/HeaderPublic";
import Bg from "@/components/LandingPage/Bg";

import axios from 'axios'
import { useEffect, useState } from "react";
// import SliderCrourses from "@/components/LandingPage/SliderCrourses";
// import Gallery from "@/components/LandingPage/Gallery";

const Institutes = dynamic(() =>
  import("../components/LandingPage/Institutes")
);
// const Gallery = dynamic(() => import("../components/LandingPage/Gallery"));
const Students = dynamic(() => import("../components/LandingPage/Students"));
// const StudentBDay = dynamic(() =>
//   import("../components/LandingPage/StudentBDay")
// );
const Courses = dynamic(() => import("../components/LandingPage/Courses"));
const AboutEBS = dynamic(() => import("../components/LandingPage/AboutEBS"));
const Footer = dynamic(() => import("../components/Footer"));

const HomePage = () => {
  const [titleData, setTitleData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.ebsalar.com/api/v1/front/index_titles/")
      .then((res) => {
        setTitleData(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="">
      <div className="min-h-screen w-full  fixed top-0 left-0 bg-black -z-20">
        .
      </div>

      <Bg />
      <HeaderPublic />

      {/* ------------------------------------<Nav>------------------------ */}
      <nav
        className="fixed animate-fade-left animate-once animate-duration-300 animate-delay-[1500ms] animate-ease-linear right-0 top-[40vh] py-4 p-1 xl:p-2
        z-50  "
      >
        <div className="flex flex-col justify-center items-center space-y-4">
          <a
            href="#institutes"
            className="text-2xl md:text-xl bg-gradient-to-r from-[#52a2e0] via-[#320482] shadow-[#000000a4] shadow-lg  to-[#0e0222] w-8 h-8 text-gray-300 rounded-full flex justify-center items-center"
          >
            <PiArrowFatLineUpLight className=" text-gray-100 text-sm" />
          </a>

          {/* <Link href='/shop'  className='text-2xl md:text-xl bg-gradient-to-r from-[#52a2e0] via-[#320482] shadow-[#000000a4] shadow-lg  to-[#0e0222] w-8 h-8 text-gray-300 rounded-full flex justify-center items-center'>
             <TbShoppingCartCog className='text-gray-100 text-sm'/>
            </Link> */}
          <a
            href="#courses"
            className="text-2xl md:text-xl bg-gradient-to-r from-[#52a2e0] via-[#320482] shadow-[#000000a4] shadow-lg  to-[#0e0222] w-8 h-8 text-gray-300 rounded-full flex justify-center items-center"
          >
            <PiBookOpenTextFill className="text-gray-100 text-sm" />
          </a>
          <a
            href="#students"
            className="text-2xl md:text-xl bg-gradient-to-r from-[#52a2e0] via-[#320482] shadow-[#000000a4] shadow-lg  to-[#0e0222] w-8 h-8 text-gray-300 rounded-full flex justify-center items-center"
          >
            <PiStudentFill className="text-gray-100 text-sm " />
          </a>
          <a
            href="#about"
            className="text-2xl md:text-xl bg-gradient-to-r from-[#52a2e0] via-[#320482] shadow-[#000000a4] shadow-lg  to-[#0e0222] w-8 h-8 text-gray-300 rounded-full flex justify-center items-center"
          >
            <BiMessageAltDots className="text-gray-100 text-sm" />
          </a>

          <a
            href="#footer"
            className="text-2xl md:text-xl bg-gradient-to-r from-[#52a2e0] via-[#320482] shadow-[#000000a4] shadow-lg  to-[#0e0222] w-8 h-8 text-gray-300 rounded-full flex justify-center items-center"
          >
            <PiArrowFatLineUpLight className="text-gray-100 rotate-180 text-sm " />
          </a>
        </div>
      </nav>

      {/* ------------------------------------</Nav>------------------------ */}

      <Institutes />
      {/* <Gallery/> */}
      <Courses title={titleData.title1} />
      <AboutEBS FaqTitle={titleData.title3} MarkTitle={titleData.title2}  />
      <Students title={titleData.title4} />
      {/* <StudentBDay/>          */}

      {/* <SliderCrourses/> */}

      <Footer />
    </div>
  );
};

export default HomePage;
