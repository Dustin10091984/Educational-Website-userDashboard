import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import GallerySlider from "./GallerySlider";

import Link from "next/link";
import { BsFillRocketFill, BsFillJournalBookmarkFill } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";

const Institutes = () => {
  const [sliderData, setSliderData] = useState([]);
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [headersData, setHeadersData] = useState([]);
  // Filtering out the announcements based on the announcement flag
  const trueAnnouncements = headersData.filter((header) => header.announcement);
  const falseAnnouncements = headersData.filter(
    (header) => !header.announcement
  );

  useEffect(() => {
    const authToken = Cookies.get("authToken");
    setIsAuthenticated(!!authToken);
  }, [isAuthenticated]);

  const handleSignup = () => {
    if (isAuthenticated) {
      router.push("/studentBoard");
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    // const accessToken = Cookies.get('authToken')
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.ebsalar.com/api/v1/front/header/"
          // {
          //   headers: {
          //     Authorization: `Bearer ${accessToken}`,
          //   },
          // }
        );
        setHeadersData(response.data.results);
      } catch (error) {
        console.log("Error fetching slider data");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // const accessToken = Cookies.get('authToken')
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.ebsalar.com/api/v1/front/slider/"
          // {
          //   headers: {
          //     Authorization: `Bearer ${accessToken}`,
          //   },
          // }
        );
        setSliderData(response.data.results);
      } catch (error) {
        console.log("Error fetching slider data");
      }
    };
    fetchData();
  }, []);

  return (
    <div
      id="institutes"
      className=" relative flex  md:flex-col-reverse  md:py-32  justify-around px-[10%] sm:px-10 items-center w-full min-h-screen   z-10"
    >
      <div className="bg-[#810b0b11] backdrop-blur-md w-1/3 md:w-full h-[650px] rounded-lg">
        <Tabs dir="rtl">
          <TabList className="flex  border-b-4 text-gray-400 border-white p-1">
            <Tab className="border-white cursor-pointer  focus:outline-none p-2 flex justify-center items-center whitespace-nowrap transition-all">
              اطلاعیه ها
            </Tab>
            <Tab className="border-white text-gray-400 cursor-pointer focus:outline-none p-2 flex justify-center items-center whitespace-nowrap transition-all">
              جدیدترین های هفته
            </Tab>
          </TabList>
          <TabPanel className="flex max-h-[650px] overflow-y-scroll flex-col justify-start scrollbar-hide items-start">
            {trueAnnouncements.map((header, index) => (
              <Link key={index} href={`${header.link ? header.link:"#"}`}>

                <div

                  className="w-full border-b-2 border-gray-400 p-2"
                >
                  <h3 className="text-md text-pink-400 py-1">{header.title}</h3>
                  <p className="text-sm text-gray-200 py-1">
                    {header.description}
                  </p>
                </div>
              </Link>
            ))}
          </TabPanel>
          <TabPanel className="flex max-h-[650px] overflow-y-scroll flex-col justify-start scrollbar-hide items-start">
            {falseAnnouncements.map((header, index) => (
              <Link href={`${header.link ? header.link:"#"}`}>
                <div
                  key={index}
                  className="w-full border-b-2 border-gray-400 p-2"
                >
                  <h3 className="text-md text-pink-400 py-1">{header.title}</h3>
                  <p className="text-sm text-gray-200 py-1">
                    {header.description}
                  </p>
                </div>
              </Link>
            ))}
          </TabPanel>
        </Tabs>
      </div>

      <div className="h-[650px] flex justify-center   w-2/3 md:w-full">
        <GallerySlider sliderData={sliderData} />
        {/* <h1 className='text-gray-50 animate-fade animate-duration-[2000ms] animate-ease-in-out text-center pt-[5%] sm:pt-0 text-2xl md:text-xl font-bold mb-6'>
          مؤسسه علم برتر سالار
        </h1> */}

        {/* <p className='sm:text-xs animate-fade animate-duration-[3000ms] animate-ease-in-out pb-6 text-md text-gray-200 '>
          بروزترین متدهای آموزشی | جامع ترین دوره های کنکور
        </p> */}
        {/* button gradient */}

        {/* <button
          className='shadow-xl animate-fade-left animate-once animate-duration-1000 animate-ease-in-out shadow-[#bd5b5b49] px-7 py-4 bg-gradient-to-r from-[#aa36a577] to-[#9566ec71]  backdrop-blur-xl
                     rounded-2xl border-2 border-[#9566ec] text-gray-50  flex items-center  '
          onClick={handleSignup}
        >
          {isAuthenticated ? ' داشبورد' : ' ورود'}
          <BsFillRocketFill className='text-2xl ml-4 text-white animate-bounce animate-infinite animate-duration-1000 animate-ease-linear' />
        </button> */}

        {/* button gradient */}
        {/* <div className='px-8 py-4'>
          <Link href='aboutebs'>
            <button
              className='shadow-xl animate-fade-right animate-once animate-duration-1000 animate-ease-in-out shadow-[#bd5b5b49] px-7 py-4 bg-gradient-to-r from-[#55bbdd77] to-[#9566ec71]  backdrop-blur-xl
                     rounded-2xl border-2 border-[#9566ec] flex items-center  '
            >
              <BsFillJournalBookmarkFill className='text-2xl text-pink-100 ' />
              <p className='px-4 text-gray-50'> درباره ما</p>
            </button>
          </Link>
        </div> */}
      </div>
      {/* <div className="  absolute   bottom-0  w-full    opacity-75 -z-10">
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
            fillOpacity="0"
            //  className="animate-flip-up animate-infinite animate-duration-[10000ms] animate-ease-in-out animate-alternate-reverse path-0"></path><defs><linearGradient id="gradient" x1="34%" y1="3%" x2="66%" y2="97%"><stop offset="5%" stopColor="#1e1357"></stop><stop offset="95%" stopColor="#eb144c"></stop></linearGradient></defs><path d="M 0,700 L 0,545 C 64.9,532.0192307692307 129.8,519.0384615384614 214,500 C 298.2,480.9615384615385 401.70000000000005,455.86538461538464 480,441 C 558.3,426.13461538461536 611.4000000000001,421.5 679,401 C 746.5999999999999,380.5 828.7,344.13461538461536 926,320 C 1023.3,295.86538461538464 1135.8,283.96153846153845 1224,261 C 1312.2,238.03846153846155 1376.1,204.01923076923077 1440,170 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4"
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
    </div>
    // </div>
  );
};

export default Institutes;
