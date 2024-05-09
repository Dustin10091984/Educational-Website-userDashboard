import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// import { FiMail,FiPhoneForwarded } from "react-icons/fi";
// import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEtagResponse } from "next/dist/server/send-payload";

const Footer = () => {
  const[successSend,setSuccessSend]=useState(false)
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [lengthError, setLengthError] = useState(false);
  const Year = new Date().getFullYear();



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 11) {
      setLengthError(true);
      console.log("Phone number must be 11 digits long");
      toast.error("شماره تماس صحیح وارد کنید")
      return;
    }else{
        setLengthError(false)
    }
    try {
      const response = await axios.post(
        "https://api.ebsalar.com/api/v1/front/contact_us/",
        {
          connection_way: phoneNumber,
          message: message,
        }
      );
      console.log(response)
     setSuccessSend(true)
     toast.success("پیام با موفقیت ارسال شد")
     setMessage("")
     setPhoneNumber("")

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="  h-full">
      <ToastContainer />
      <div
        id="footer"
        className="   flex flex-col  justify-end items-center   w-full"
      >
        {/* <Image src='/images/wave.svg' alt='ebs'  width='1600'
                                height='100' className='  h-full object-cover w-full opacity-45 shadow-xl shadow-amber-700 ' /> */}
        <div className=" w-full  flex justify-center items-start bg-[#ffffff21]   px-2  backdrop-saturate-125">
          <div className="grid grid-cols-6 py-14 justify-center md:grid-cols-1 gap-6 ">
            <div className="flex justify-center space-y-4 pl-2  col-span-2  items-center ">
              <form
                className="w-96 sm:w-72    relative"
                onSubmit={handleSubmit}
              >
                <input
                  className= {`text-gray-900 pr-2 placeholder-gray-400 border-gray-200 ${lengthError ? "bg-red-600":"bg-[#ffffff39]"} rounded-t-xl focus:outline-none focus:border-purple-500 border-b text-sm py-2 w-full`}
                  dir="rtl"
                  // type='text'
                  type="number"
                  name="national_number"
                  // onChange={handleInputChange}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="شماره تماس"
                  required
                />

                <textarea
                  type="text"
                  placeholder=" پیام"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#ffffff39] backdrop-blur-xl placeholder:text-gray-100 text-gray-100  pr-2 py-4 text-right text-sm h-40 rounded-b-xl focus:outline-none
                        focus:shadow-2xl "
                ></textarea>
                <button
                  type="Submit"
                  className=" w-full shadow-xl px-7 py-4 mt-4  shadow-[#8a03277f] bg-gradient-to-r from-[#7b2a6f71] to-[#8a0327]  backdrop-blur-xl  rounded-xl text-gray-200 text-sm"
                >
                  ارسال
                </button>
              </form>
            </div>

            <div className="flex justify-center  col-span-3   items-center">
              <div className="grid gap-2 justify-center w-96 sm:w-72 h-64   grid-cols-3 ">
                <div className="flex justify-center items-center rounded-md bg-[#ffffff39] backdrop-blur-xl shadow-2xl">
                  <p className="text-gray-200">نماد </p>
                </div>

                <div className="flex justify-center items-center w-full  row-span-2 rounded-md shadow-2xl bg-[#ffffff39] backdrop-blur-xl">
                  <p className="text-gray-200">نماد </p>
                </div>

                <div className="flex justify-center items-center  rounded-md bg-[#ffffff39] shadow-2xl backdrop-blur-xl">
                  <p className="text-gray-200">نماد </p>
                </div>

                <div className="flex justify-center items-center rounded-md bg-[#ffffff39] shadow-2xl backdrop-blur-xl">
                  <p className="text-gray-200">نماد </p>
                </div>

                <div className="flex justify-center items-center rounded-md bg-[#ffffff39] shadow-2xl backdrop-blur-xl">
                  <p className="text-gray-200">نماد </p>
                </div>
              </div>
            </div>

            <div className="md:pl-12 w-full">
              <div className=" grid grid-cols-2  gap-4 h-full  w-full items-center  ">
                <a
                  className="text-gray-200 hover:text-pink-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out"
                  href=""
                >
                  <FaGithub className="text-xl text-center  w-full text-gray-200" />
                </a>
                <a
                  className="text-gray-200 hover:text-pink-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out"
                  href=""
                >
                  <FaLinkedinIn className="text-xl text-center  w-full text-gray-200" />
                </a>
                <a
                  className="text-gray-200 hover:text-pink-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out"
                  href=""
                >
                  <FaTwitter className="text-xl text-center  w-full text-gray-200" />
                </a>
                <a
                  className="text-gray-200 hover:text-pink-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out"
                  href=""
                >
                  <FaInstagram className="text-xl text-center  w-full text-gray-200" />
                </a>



              <button className='text-gray-200'>Policy</button>


              <button className='text-gray-200'>Policy</button>

              </div>
            </div>




          </div>
        </div>

        <div className="flex items-center px-10 justify-between w-full py-4">
          <p className="text-gray-500 whitespace-nowrap sm:hidden text-sm">
            044 0000 0000
          </p>
          <Link href='https://onlineceo.org/' target="blank" className='w-full' >
          <h6 className="text-center text-gray-500 text-sm w-full ">
            &copy; Power By CEO Cummunity {Year}
          </h6>
       
       </Link>
          <p className="text-gray-200 sm:hidden whitespace-nowrap text-sm">
            EBS StartUP
          </p>
        </div>
      </div>

      {/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg"
   className=""><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#1e1357"></stop><stop offset="95%" stopColor="#8ED1FC"></stop></linearGradient></defs><path d="M 0,500 L 0,0 C 83.55980861244021,31.071770334928225 167.11961722488041,62.14354066985645 265,85 C 362.8803827751196,107.85645933014355 475.08133971291863,122.4976076555024 574,120 C 672.9186602870814,117.5023923444976 758.555023923445,97.86602870813397 855,84 C 951.444976076555,70.13397129186603 1058.6985645933014,62.038277511961724 1158,49 C 1257.3014354066986,35.961722488038276 1348.6507177033493,17.980861244019138 1440,0 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.4"
   className="animate-flip-up animate-infinite animate-duration-[8000ms] animate-ease-linear animate-alternate  "></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#1e1357"></stop><stop offset="95%" stopColor="#8ED1FC"></stop></linearGradient></defs><path d="M 0,500 L 0,0 C 114.4976076555024,78.00956937799045 228.9952153110048,156.0191387559809 335,182 C 441.0047846889952,207.9808612440191 538.5167464114832,181.93301435406698 618,190 C 697.4832535885168,198.06698564593302 758.9377990430623,240.24880382775115 857,260 C 955.0622009569377,279.75119617224885 1089.7320574162677,277.07177033492826 1193,230 C 1296.2679425837323,182.92822966507177 1368.1339712918661,91.46411483253588 1440,0 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53"
   className=" opacity-45 animate-flip-up animate-infinite animate-duration-[8000ms] animate-ease-linear animate-alternate animate-fill-backwards  path-1"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#1e1357"></stop><stop offset="95%" stopColor="#8ED1FC"></stop></linearGradient></defs><path d="M 0,500 L 0,0 C 112.60287081339715,150.08612440191388 225.2057416267943,300.17224880382776 303,360 C 380.7942583732057,419.82775119617224 423.77990430622015,389.3971291866029 528,362 C 632.2200956937799,334.6028708133971 797.6746411483253,310.2392344497608 900,336 C 1002.3253588516747,361.7607655502392 1041.5215311004786,437.6459330143541 1121,390 C 1200.4784688995214,342.3540669856459 1320.2392344497607,171.17703349282294 1440,0 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1"
   className=" opacity-45"></path></svg>          */}

      {/* <div className="  absolute   bottom-0  w-full  opacity-70 -z-10">
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
    </div>
  );
};

export default Footer;
