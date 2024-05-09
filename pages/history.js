import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import HeaderPublic from "@/components/HeaderPublic";
import { useRouter } from "next/navigation";
import Bg from "@/components/LandingPage/Bg";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
const history = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.ebsalar.com/api/v1/front/about_us/")
      .then((res) => {
          setHistoryData(res.data.results[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" w-full min-h-screen  ">
      <HeaderPublic/>
      <Bg />
      <div className="flex justify-center items-center pt-20 w-full min-h-screen">
        <div
          className="  animate-fade-up animate-once animate-duration-1000 animate-ease-linear animate-normal p-2 w-[950px] min-h-screen  md:w-[550px] sm:w-[350px] bg-[#e6dcdc16]
          backdrop-blur-xl shadow-2xl rounded-2xl"
        >
          <div className="p-2 animate-fade-up animate-once animate-duration-[2000ms] animate-ease-in-out min-h-screen overflow-y-scroll   scrollbar-hide ">
            <img
              src={historyData.file ? historyData.file : "/images/cell.png"}
              alt=""
              className=" w-full  rounded-t-xl object-contain"
            />

            {/*         title
            <h4 className="text-white m-4 font-bold">Scroll Container</h4>
             */}
            <p className="text-gray-200 w-full px-[5%] text-right py-4">{historyData.description}</p>
          </div>
        </div>
      </div>
      <Link href="/aboutebs">
        <FaArrowLeftLong className="fixed bottom-4 left-4 text-gray-300" />
      </Link>
    </div>
  );
};

export default history;
