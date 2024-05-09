import React from "react";
import { Collapse } from "react-collapse";
import Image from "next/image";
import Link from "next/link";
import { BiChevronsDown, BiChevronsUp } from "react-icons/bi";

const Acordian = ({
  open,
  btnlink,
  btnLable,
  toggle,
  img,
  alt,
  title,
  desc,
}) => {
  return (
    <div className="w-full  h-[100%] border-2 border-[#a4179682] backdrop-blur-xl bg-[#c357a442]  rounded-xl shadow-2xl my-4  ">
      <div
        className="  w-full py-6   flex mb-3  justify-between items-center  crusor-pointer"
        onClick={toggle}
      >
        <div className="text-2xl ">
          {open ? (
            <BiChevronsUp className="text-white" />
          ) : (
            <BiChevronsDown className="text-white" />
          )}
        </div>
        <h1 className=" text-white pr-5 w-full text-right"> {title} </h1>
      </div>
      <Collapse isOpened={open} className="h-full w-full">
        <div
          className="flex   w-full justify-around
            py-10 items-center flex-col-reverse"
        >
          <div className=" w-full flex flex-row-reverse md:flex-col justify-center items-center px-6 pb-10">
            <p className="my-[10%] px-[10%] md:px-0   text-right text-gray-200 text-md   leading-8">
              {desc}
            </p>

            {/* <div className='flex flex-row justify-center pb-10 w-full'>
                     <Link href={btnlink} >

                        <h1 className='text-gray-50 border px-5 py-2 rounded-md
                        whitespace-nowrap mr-5'>{btnLable}</h1>
                      </Link>

                    </div> */}

            <div className="w-full  flex justify-center items-center">
              <Image
                src={img}
                alt={alt}
                width="650"
                height="600"
                className="sm:px-4 w-[60%]  max-h-[500px]  object-contain "
              />
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Acordian;
