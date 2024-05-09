import React, { useEffect, useState } from 'react'
import SDHeader from '@/components/StudentDashboard/SDHeader'
import moment from 'moment-jalaali'
import { useRouter } from 'next/navigation'
import Courses from '@/components/LandingPage/Courses'
import Image from 'next/image'

import Cookies from 'js-cookie'
import HeroDevice from '@/components/LandingPage/HeroDevice'


const studentBoard = (props) => {
  const router = useRouter()
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  // Should be logged in to get access to this page - starts here
  useEffect(() => {
    const authToken = Cookies.get('authToken')
    if (!authToken) {
      router.push('/login')
    } else {
      setIsCheckingAuth(false)
    }
  }, [router])

  if (isCheckingAuth) {
    return null
  }
  // Should be logged in to get access to this page - finishes here

  const currentDate = moment().format('jYYYY/jMM/jDD')

  return (
    <div className=' min-h-screen z-10'>
    
      <SDHeader />


    
      

      <Image
            src="/images/bg-d.jpg"
            alt="ebs"
            width="1200"
            height="800"
            className="  fixed top-0 left-0 w-full min-h-screen -z-20"
          />

      <div className='flex px-[5%] z-50 justify-center items-center w-full  '>
       
       <HeroDevice />

      </div>

<Courses/>
    </div>
  )
}

export default studentBoard
