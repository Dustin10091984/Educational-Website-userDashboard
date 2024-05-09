
import React from 'react'
import Image from 'next/image'

const Bg = () => {
  return (
<div className=' w-full'>
<Image
            src="/images/bg-m.jpg"
            alt="ebs"
            width="1200"
            height="800"
            className="  fixed top-0 left-0 w-full min-h-screen -z-20"
          />
  <div className='fixed min-h-screen    w-full  -z-10 top-0 left-0'>
    <div className=" h-full animate-jump-out animate-once animate-ease-linear animate-reverse animate-duration-1000 flex z-0 items-center justify-center  px-4">
      <div className="relative h-full w-full max-w-lg">
        <div className="absolute top-96 -left-74 z-0  w-[230px] h-[230px] bg-gradient-to-r from-[#ead266] via-[#b85433] to-[#e11515]  rounded-full mix-blend-multiply  shadow-md shadow-yellow-500  opacity-70 animate-blob"><span></span></div>
        <div className="absolute top-0 -right-4 w-96 h-96 sm:h-64 sm:w-64 bg-gradient-to-r from-[#52a2e0] via-[#320482]  to-[#0e0222] rounded-full mix-blend-multiply  opacity-70 animate-blob animation-delay-2000"><span></span></div>
        <div className="absolute  top-[665px] right-40 h-36 w-36 bg-gradient-to-r from-[#ae79ae97] via-[#880a8885]  to-[#360c508b] rounded-full mix-blend-multiply  opacity-70 animate-blob animation-delay-4000"><span></span></div>

        <div className="absolute  top-[580px] -left-96 z-0  animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in-out w-[330px] h-[330px] bg-gradient-to-r from-[#ead266] via-[#b85433] to-[#980505]  rounded-full mix-blend-multiply  shadow-md shadow-yellow-500  opacity-25 "><span></span></div>

   
     </div>
    </div>

  </div>

</div>



  )
}

export default Bg