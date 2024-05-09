import Link from "next/link";
import Image from "next/image";
import { AiOutlineHome } from 'react-icons/ai';

export default function Custom404() {
  return (
    <div className="flex flex-col ">
      <Image
        className="fixed -z-20 w-[100%] md:w-screen object-cover h-full opacity-100 sm:opacity-100"
        src="/images/footerbg.jpg"
        width='1200'
        height='800'
        alt="CEO"
      />
      <div className="flex flex-col h-full w-full min-h-screen justify-center items-center bg-[#000000c4]">
        <h2 className="text-gray-100">Sorry we can't find what you looking for</h2>
        <h2 className="text-gray-100 text-sm py-2">"متاسفانه صفحه مدنظر  موجود نیست"</h2>

        <Link href="/">
          <div className="flex justify-around items-center border mt-6 rounded-md">
            <h3 className="text-white text-sm px-2 py-4">  صفحه اصلی</h3>
            <AiOutlineHome className="text-white mx-2" />
          </div>
        </Link>
      </div>
    </div>
  );
}
