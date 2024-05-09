"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import ActiveLink from "./LandingPage/ActiveLink";
import {
  TbHomeSearch,
  TbShoppingCartCog,
  TbShoppingCart,
} from "react-icons/tb";

import { RiTeamLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";

const HeaderPublic = () => {
  const [count,setCound]=useState(0)
  const [totalCart, setTotalCart] = useState(0);
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = window.localStorage.getItem("cart");
      const cartData = JSON.parse(storedCart);
      // Calculate the total number of products ordered
      setTotalCart(cartData.reduce((total, item) => total + item.quantity, 0));
      // Perform operations with myData
    }
  });
  useEffect(() => {
    const authToken = Cookies.get("authToken");
    setIsAuthenticated(!!authToken);
  }, []);

  const handleSignup = () => {
    if (isAuthenticated) {
      router.push("/studentBoard");
    } else {
      router.push("/login");
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 flex animate-fade-down animate-once animate-duration-1000 animate-delay-1000 animate-ease-in-out  justify-between  backdrop-blur-xl items-center   h-20 sm:h-14 px-4 sm:px-1">
        <Link href="/">
          <Image
            src="/images/icon-512x512.png"
            alt="ebs"
            width="200"
            height="200"
            className=" pl-2 w-16"
          />
        </Link>

        <div className="flex justify-center pl-4  ">
          <ActiveLink href="/aboutebs">
            <div className="flex justify-center  whitespace-nowrap items-center">
              <p className=" px-2 text-sm md:hidden"> درباره ما</p>
              {/* <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-[#52a2e0] via-[#320482] shadow-[#000000a4] shadow-lg  to-[#0e0222] w-8 h-8"> */}
                <RiTeamLine className="" />
              {/* </div> */}
            </div>
          </ActiveLink>

          <ActiveLink href="/result">
            <div className="flex justify-center whitespace-nowrap border-l-2 md:border-l-0 border-gray-800 items-center">
              <p className=" px-2 text-sm md:hidden"> راهبردها </p>
              {/* <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-[#52a2e0] via-[#320482] shadow-[#000000a4] shadow-lg  to-[#0e0222] w-8 h-8"> */}
                <FaChartLine className="" />
              {/* </div> */}
            </div>
          </ActiveLink>

          <ActiveLink href="/shop">
            <div className="flex justify-center whitespace-nowrap border-l-2 md:border-l-0 border-gray-800  items-center">
              <p className=" px-2 text-sm md:hidden"> فروشگاه</p>
              {/* <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-[#52a2e0] via-[#320482] shadow-[#000000a4] shadow-lg  to-[#0e0222] w-8 h-8"> */}
                <TbShoppingCartCog className="" />
              {/* </div> */}
            </div>
          </ActiveLink>

          <ActiveLink href="/">
            <div className="flex justify-center border-l-2 md:border-l-0 border-gray-800 whitespace-nowrap items-center">
              <p className=" px-2 text-sm md:hidden"> خانه</p>
              {/* <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-[#52a2e0] via-[#320482] shadow-[#000000a4] shadow-lg  to-[#0e0222] w-8 h-8"> */}
                <TbHomeSearch className="" />
              {/* </div> */}
            </div>
          </ActiveLink>
        </div>
        <div className="flex gap-  relative group">
          <Link href="/cart">
            <div className="relative">
              <TbShoppingCart className="text-xl text-[white]" />
              <span className="absolute -top-2 right-[-8px] rounded-[50%]  w-full  flex items-center justify-center text-sm text-pink-600 ">
                {totalCart}
              </span>
            </div>
          </Link>
          <button
            className="text-white text-sm px-2 flex space-x-2 items-center "
            onClick={handleSignup}
          >
            {isAuthenticated ? " داشبورد" : " ورود"}

            <IoIosArrowForward className="text-pink-600 text-xl animate-rotate-x animate-infinite animate-duration-[1600ms] animate-ease-in-out ml-2 " />
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeaderPublic;
