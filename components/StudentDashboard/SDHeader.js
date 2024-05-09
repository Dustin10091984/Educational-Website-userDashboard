import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { CgMenuRight } from "react-icons/cg";
import SDSidebar from './SDSidebar';
import ActiveLink from '../LandingPage/ActiveLink';
import { RiTeamLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import {
  TbHomeSearch,
  TbShoppingCartCog,
  TbShoppingCart,
} from "react-icons/tb";
import { LuMail } from "react-icons/lu";
const SDHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
      };
    
      const handleClose = () => {
        setIsOpen(false);
      };
  return (
    <div>

  <div className='fixed top-0 left-0 right-0 z-10  
      backdrop-blur-xl items-center shadow-xl  max-w-auto h-16 sm:h-14 px-4'>   
     
      <div className='flex   justify-between items-center'>

     <Link href='/studentBoard'>
      <Image src='/images/icon-512x512.png' alt='ebs' width='200'
        height='200' className=' w-16' />
     
     </Link>





     <div className="flex justify-center   ">
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





      <div className='  flex justify-center  items-center space-x-1 '>
     <Link href='/ticket '>
      
       <div className=' '>
          <LuMail className=' text-[#ffffff] text-2xl  '/>
          {/* <span className=' absolute top-0 right-18 rounded-full  animate-ping animate-infinite animate-duration-[2000ms] animate-ease-linear animate-alternate animate-fill-backwards  w-2 h-2 bg-rose-600'></span> */}
      </div>
      </Link>
    
       {/* <div className='w-6 h-6 border rounded-full'>
        
      </div> */}
      

        <button onClick={handleOpen} className='p-1  '>
         <CgMenuRight className='text-[#fff] text-2xl   '/>
        </button>
           <SDSidebar isOpen={isOpen} onClose={handleClose} />
     </div>





      </div>

   </div>

    </div>
  )
}

export default SDHeader