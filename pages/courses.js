import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import SDHeader from '@/components/StudentDashboard/SDHeader'
import CourseTable from '@/components/StudentDashboard/Table/CourseTable'
const courses = () => {
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
    <div className=' flex justify-center items-center bg-gray-900 w-full pt-14 min-h-screen itmes-center '>
      <SDHeader />
      <CourseTable />
    </div>
  )
}

export default courses
