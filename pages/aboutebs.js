import React from 'react'
import HeaderPublic from '@/components/HeaderPublic'
import Link from 'next/link'
import Image from 'next/image'

const aboutebs = () => {
  return (
    <div className=' w-full z-10  min-h-screen '>
         <Image
            src="/images/bg-d.jpg"
            alt="ebs"
            width="1200"
            height="800"
            className="  fixed top-0 left-0 w-full min-h-screen -z-20"
          />
      <HeaderPublic />

      <div className='flex justify-center items-center w-full  min-h-screen'>
        <div className='grid grid-cols-4  md:grid-col-1 z-20 gap-6 md:gap-1 p-[10%] md:p-0 '>
          {/* grid1 */}
         <Link href="/gallery">
         <div className='animate-ping animate-once animate-duration-1000 animate-ease-in-out animate-reverse  '>
            <div className='   w-[300px] h-[300px] sm:h-44 sm:w-44 animate-blob animate-delay-1000 bg-gradient-to-r from-[#ae79ae97] via-[#880a8885]  to-[#360c508b] rounded-full mix-blend-multiply filter opacity-70   z-40  '>
              <div className='flex flex-col justify-center items-center w-full h-full'>
                <p className='text-white text-xl font-bold'> EBS Gallery</p>
                <p className='text-white text-sm font-bold'>گالری موسسه</p>
              </div>
            </div>
          </div>
         </Link>
          {/* grid1 */}

          {/* grid2 */}

          <div className='flex justify-center items-center w-full col-span-2 md:col-span-1 pt-40 animate-ping animate-once animate-duration-1000 animate-ease-in-out animate-reverse '>
            <Link href='/history'>
              <div className='   w-[400px] h-[400px] sm:h-24 sm:w-24 animate-jump animate-infinite animate-duration-[6000ms] animate-delay-1000 bg-gradient-to-r from-[#52a2e0] via-[#320482]  to-[#0e0222] rounded-full mix-blend-multiply filter opacity-70   z-40  '>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                  <p className='text-white text-md font-bold'>History</p>
                  <p className='text-white text-xs font-bold'>تاریخچه</p>
                </div>
              </div>
            </Link>
          </div>

          {/* grid2 */}

          {/* grid3 */}
          <div className='animate-ping animate-once animate-duration-1000 animate-ease-in-out animate-reverse  '>
            <Link href='/result'>
              <div className='   w-[300px] h-[300px] sm:h-28 sm:w-28 animate-bounce animate-infinite animate-duration-[3000ms] animate-ease-in-out bg-gradient-to-r from-[#ead266] via-[#b85433] to-[#e11515] rounded-full mix-blend-multiply filter opacity-70   z-40  '>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                  <p className='text-white text-xl font-bold'> Result</p>
                  <p className='text-white text-sm font-bold'>نتایج</p>
                </div>
              </div>
            </Link>
          </div>
          {/* grid3 */}
        </div>
      </div>
    </div>
  )
}

export default aboutebs
