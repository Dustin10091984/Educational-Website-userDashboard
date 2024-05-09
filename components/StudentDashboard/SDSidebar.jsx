import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAvatar } from "@/contexts/AvatarContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {
  FaFingerprint,
  FaBookOpenReader,
  FaBookBookmark,
  FaMoneyCheck,
  FaChartLine,
  FaBoxOpen,
} from "react-icons/fa6";
import { FaCommentAlt, FaMedal } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import api from "./api";

const SDSidebar = ({ isOpen, onClose }) => {
  const [sData, setSData] = useState([]);
  const authToken = Cookies.get("authToken");

  const fetchUserProfile = async () => {
    try {
      const response = await api.get("/my_profile/student", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      // Handle the response data (e.g., update state or display user profile)
      setSData(response.data.results);
      console.log("res#######",response)
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);
  const router = useRouter();
  const { avatar, studentName } = useAvatar();
  const SDSidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        SDSidebarRef.current &&
        !SDSidebarRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleLogout = () => {
    Cookies.remove("authToken");

    // Close the sidebar
    onClose();

    router.push("/");
  };

  return (
    <div
      className={`fixed inset-0 overflow-hidden z-50 min-h-screen  bg-[#191818af] transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-y-0 right-0    flex">
        <div
          ref={SDSidebarRef}
          className={`w-[450px] md:w-[300px]   ${
            isOpen
              ? "translate-x-0  transition-transform ease-in-out   transition-duration-2000"
              : "translate-x-full  transition-transform ease-in-out  transition-duration-2000"
          }[]`}
        >
          <div className="border-l-4 shadow-2xl border-[#cdcdcd71] backdrop-blur-2xl h-full bg-[#9567b466] items-center pb-[5%] flex flex-col justify-around">
            <div className="flex flex-col pt-[15%] sm:pt-4 space-y-4 w-full justify-center items-center pb-20 sm:pb-4">
              <Image
                src={sData.avatar ? sData.avatar :"/images/fast3.png"}
                alt=""
                width="600"
                height="600"
                className=" w-44 h-44 border-4 border-gray-50 shadow-xl shadow-[#804685cf] rounded-full object-cover"
              />

              <p className="text-gray-200">
                {`${sData.first_name}  ${sData.last_name}` || "Student Name"}
              </p>
            </div>

            <div className="flex flex-col w-full pt-[15%] sm:pt-4 space-y-2   ">
              <Link href="/studentReq" className="w-full">
                <button
                  className=" flex items-center pr-4 justify-end text-[#ffffff]  border-y-2 border-[#09070732] text-md md:text-sm w-full  whitespace-nowrap  shadow-xl py-2"
                  onClick={onClose}
                >
                  <p className="px-8">پروفایل من </p>
                  <FaFingerprint />
                </button>
              </Link>

              <Link href="/classes" className="w-full">
                <button
                  className=" flex items-center pr-4 justify-end text-[#ffffff]  border-y-2 border-[#09070732] text-md md:text-sm w-full  whitespace-nowrap  shadow-xl py-2"
                  onClick={onClose}
                >
                  <p className="px-8"> کلاس ها</p>
                  <FaBookOpenReader />
                </button>
              </Link>

              <Link href="/courses" className="w-full">
                <button
                  className=" flex items-center pr-4 justify-end text-[#ffffff]  border-y-2 border-[#09070732] text-md md:text-sm w-full  whitespace-nowrap  shadow-xl py-2"
                  onClick={onClose}
                >
                  <p className="px-8"> دوره ها</p>
                  <FaBookBookmark />
                </button>
              </Link>

              <Link href="/performance" className="w-full">
                <button
                  className=" flex items-center pr-4 justify-end text-[#ffffff]  border-y-2 border-[#09070732] text-md md:text-sm w-full  whitespace-nowrap  shadow-xl py-2"
                  onClick={onClose}
                >
                  <p className="px-8"> عملکرد من</p>
                  <FaMedal />
                </button>
              </Link>

              <Link href="/order" className="w-full">
                <button
                  className=" flex items-center pr-4 justify-end text-[#ffffff]  border-y-2 border-[#09070732] text-md md:text-sm w-full  whitespace-nowrap  shadow-xl py-2"
                  onClick={onClose}
                >
                  <p className="px-8"> سفارشات</p>
                  <FaBoxOpen />
                </button>
              </Link>

              <Link href="/finance" className="w-full">
                <button
                  className=" flex items-center pr-4 justify-end text-[#ffffff]  border-y-2 border-[#09070732] text-md md:text-sm w-full  whitespace-nowrap  shadow-xl py-2"
                  onClick={onClose}
                >
                  <p className="px-8"> مالی</p>
                  <FaMoneyCheck />
                </button>
              </Link>

              <Link href="/ticket" className="w-full">
                <button
                  className=" flex items-center pr-4 justify-end text-[#ffffff]  border-y-2 border-[#09070732] text-md md:text-sm w-full  whitespace-nowrap  shadow-xl py-2"
                  onClick={onClose}
                >
                  <p className="px-8"> تیکت</p>
                  <FaCommentAlt />
                </button>
              </Link>

              <button
                className=" flex items-center pr-4 justify-end text-[#ffffff]  border-y-2 border-[#09070732] text-md md:text-sm w-full  whitespace-nowrap  shadow-xl py-2"
                onClick={handleLogout}
              >
                <p className="px-8">خروج</p>
                <RxExit className="text-pink-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDSidebar;

{
  /* <Link href='/test' ></Link> */
}
