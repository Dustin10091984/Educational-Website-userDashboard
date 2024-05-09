
import { PiStudentFill, PiBookOpenTextFill } from "react-icons/pi";
import { MdOutlineDiversity3 } from "react-icons/md";
import React from "react";
import Link from "next/link";
// import SliderCrourses from './SliderCrourses';
import axios from "axios";
import { useEffect, useState } from "react";

const Courses = ({title}) => {
  const [courseData, setCourceData] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    axios
      .get("https://api.ebsalar.com/api/v1/front/index_course/")
      .then((res) => {
        setCourceData(res.data.results);

        setLoading(false);
      })
      .catch((err) => console.log(err));
    // console.clear();
    // console.log(courseData);
  }, []);

  if (loading) {
    return (
      <div>
        <p>loading</p>
      </div>
    );
  }

  return (
    <div
      id="courses"
      className=" relative px-10 md:px-2 py-20 space-y-4 flex flex-col justify-center items-center max-w-screen  min-h-screen"
    >
      {/* <div className="  absolute   rotate-180  top-0  w-full  opacity-75 -z-10">
        <svg
          width="100%"
          height="10%"
          id="svg"
          viewBox="0 0 1440 690"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <defs>
            <linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%">
              <stop offset="5%" stopColor="#1e1357"></stop>
              <stop offset="95%" stopColor="#eb144c"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 L 0,405 C 95.09230769230771,435.9730769230769 190.18461538461543,466.94615384615383 270,449 C 349.8153846153846,431.05384615384617 414.3538461538461,364.1884615384615 478,321 C 541.6461538461539,277.8115384615385 604.4000000000001,258.30000000000007 696,233 C 787.5999999999999,207.69999999999996 908.0461538461536,176.61153846153846 1000,146 C 1091.9538461538464,115.38846153846154 1155.4153846153847,85.25384615384615 1224,66 C 1292.5846153846153,46.746153846153845 1366.2923076923075,38.37307692307692 1440,30 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.265"
            className="animate-flip-up animate-infinite animate-duration-[10000ms] animate-ease-in-out animate-alternate-reverse path-0"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%">
              <stop offset="5%" stopColor="#1e1357"></stop>
              <stop offset="95%" stopColor="#eb144c"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 L 0,545 C 64.9,532.0192307692307 129.8,519.0384615384614 214,500 C 298.2,480.9615384615385 401.70000000000005,455.86538461538464 480,441 C 558.3,426.13461538461536 611.4000000000001,421.5 679,401 C 746.5999999999999,380.5 828.7,344.13461538461536 926,320 C 1023.3,295.86538461538464 1135.8,283.96153846153845 1224,261 C 1312.2,238.03846153846155 1376.1,204.01923076923077 1440,170 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.4"
            className="animate-flip-up animate-infinite animate-duration-[4000ms] animate-ease-in-out animate-alternate-reverse path-1"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%">
              <stop offset="5%" stopColor="#1e1357"></stop>
              <stop offset="95%" stopColor="#eb144c"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 L 0,685 C 78.63076923076923,685.2089743589744 157.26153846153846,685.4179487179488 226,665 C 294.73846153846154,644.5820512820512 353.5846153846153,603.5371794871795 450,576 C 546.4153846153847,548.4628205128205 680.4,534.4333333333333 758,531 C 835.6,527.5666666666667 856.8153846153846,534.7294871794873 915,498 C 973.1846153846154,461.2705128205128 1068.3384615384616,380.64871794871794 1162,342 C 1255.6615384615384,303.35128205128206 1347.8307692307692,306.675641025641 1440,310 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.53"
            className="animate-flip-up animate-infinite animate-duration-[8000ms] animate-ease-in-out animate-alternate-reverse path-2"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%">
              <stop offset="5%" stopColor="#1e1357"></stop>
              <stop offset="95%" stopColor="#eb144c"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 L 0,825 C 95.83076923076922,834.6551282051282 191.66153846153844,844.3102564102564 277,833 C 362.33846153846156,821.6897435897436 437.1846153846154,789.4141025641026 510,758 C 582.8153846153846,726.5858974358974 653.6,696.0333333333334 720,684 C 786.4,671.9666666666666 848.4153846153846,678.4525641025641 927,647 C 1005.5846153846154,615.5474358974359 1100.7384615384617,546.1564102564103 1189,507 C 1277.2615384615383,467.8435897435897 1358.6307692307691,458.9217948717949 1440,450 L 1440,700 L 0,700 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="1"
            className=" path-3"
          ></path>
        </svg>
      </div> */}
      <div className=" w-full  flex  flex-col px-[4%]  justify-center items-center">
        <p className="py-6 text-xl border-t-2 border-gray-200 w-full text-center text-white">{title}</p>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-10">
          {courseData.map((item) => (
            <div key={item.id} className=" flex flex-row-reverse justify-center py-2 border-2 border-[#a4179682] bg-gradient-to-r from-[#b433ab8e] to-[#38022f77] rounded-xl shadow-2xl items-center">
              <div className="relative ">
                <div className="absolute -top-6 -left-10 h-16 w-16 flex justify-center items-center bg-gradient-to-r from-fuchsia-500 to-pink-500  rounded-xl"></div>

                <div className="absolute flex justify-center items-center -top-10 -left-12 shadow-xl shadow-[#00000099]  backdrop-blur border border-gray-400 bg-[#ffffff13] rounded-xl h-16 w-16">
                  <PiStudentFill className="text-gray-50 text-4xl" />
                </div>
              </div>

              <div
                className=" pl-4 flex w-full justify-center items-center flex-col "
                key={item.id}
              >
                <h2 className="   w-full py-2  text-right pr-20 text-lg sm:text-md text-gray-200 ">
                  {item.title}
                </h2>
                <p className=" pr-20 leading-loose sm:leading-loose h-full w-full pb-4 text-right md:text-lg sm:text-xs text-gray-300 ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* button gradient */}
      <div className="px-8 pt-14 ">
        <Link href="/shop">
          <div className="grid gap-8 items-start animate-bounce justify-center">
            <div className="relative group">
              <div className="absolute shadow-2xl -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                .
              </div>
              <button className="relative px-7 py-4 bg-[#ff00ea57] rounded-2xl leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">
                  <MdOutlineDiversity3 className="text-2xl text-gray-50 mr-2" />
                  <span className="pr-2 sm:hidden text-gray-50">
                    {" "}
                    مشاهده همه
                  </span>
                </span>
                <span className="pl-2 text-yellow-400 group-hover:text-gray-100 transition duration-200">
                  همه دوره ها &rarr;
                </span>
              </button>
            </div>
          </div>
        </Link>
      </div>

      {/* button gradient */}
    </div>
  );
};

export default Courses;
{
  /* <div class="p-10 min-h-screen flex justify-center bg-teal-500">
<div class="mt-20 flex space-x-8">
<div class="space-y-4 group">
<h2 class="font-mono font-semibold text-white">linear</h2>
<div class="h-24 w-24 bg-white rounded-lg shadow-xl transform group-hover:translate-y-96 transition-transform ease-linear duration-1000"></div>
</div>
<div class="space-y-4 group">
<h2 class="font-mono font-semibold text-white">in</h2>
<div class="h-24 w-24 bg-white rounded-lg shadow-xl transform group-hover:translate-y-48 transition-transform ease-in duration-1000"></div>
</div>
<div class="space-y-4 group">
<h2 class="font-mono font-semibold text-white">out</h2>
<div class="h-24 w-24 bg-white rounded-lg shadow-xl transform group-hover:translate-y-48 transition-transform ease-out duration-1000"></div>
</div>
<div class="space-y-4 group">
<h2 class="font-mono font-semibold text-white">in-out</h2>
<div class="h-24 w-24 bg-white rounded-lg shadow-xl transform group-hover:translate-y-48 transition-transform ease-in-out duration-1000"></div>
</div>
</div>
</div> */
}

//  <div className='w-full p-2 gap-2 grid grid-cols-4  rounded-xl bg-[#b3b3b38e] border-4 border-[#fdfdfd6c] shadow-xl'>

//     <div className=' h-80 col-span-2'>
//       <CoursesGrid1/>
//     </div>

//     <div className=' h-80 col-span-2'>
//     <CoursesGrid2/>
//     </div>

//     <div className=' h-80 col-span-2'>
//     <CoursesGrid3/>
//     </div>

//     <div className=' h-80 col-span-2'>
//     <CoursesGrid4/>
//     </div>

// </div>
