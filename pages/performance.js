import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import SDHeader from '@/components/StudentDashboard/SDHeader'
import BarClassN from '@/components/StudentDashboard/Charts/BarClassN'
import LinePerformance from '@/components/StudentDashboard/Charts/LinePerformance'
import Accessibility from '@/components/StudentDashboard/Charts/OtherChart/Accessibility'
import BestPractices from '@/components/StudentDashboard/Charts/OtherChart/BestPractices'
import Performance from '@/components/StudentDashboard/Charts/OtherChart/Performance'
import Performance2 from '@/components/StudentDashboard/Charts/OtherChart/Performance2'
import Desend from '@/components/StudentDashboard/Charts/OtherChart/Desend'
// import BarCourses from '@/components/StudentDashboard/Charts/BarCourses';

const performance = () => {
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

  return (
    <div className=' flex justify-center items-center bg-black pt-14 w-full  min-h-screen itmes-center '>
      <SDHeader />
      <div className='grid grid-cols-2 md:grid-cols-1 w-full h-full'>
        <div>
          <div className='grid grid-cols-2'>
            <Accessibility />
            <BestPractices />
            <Performance />
            <Performance2 />
          </div>
        </div>

        <div>
          <Desend />
        </div>

        <div>
          <BarClassN />
        </div>

        <div>
          <LinePerformance />
        </div>
      </div>
    </div>
  )
}

export default performance
