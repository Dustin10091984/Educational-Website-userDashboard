import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import SDHeader from '@/components/StudentDashboard/SDHeader'

const finance = () => {
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
    <div className=' flex justify-center items-center bg-orange-300 w-full  min-h-screen itmes-center '>
      <SDHeader />
      <p>finance</p>
    </div>
  )
}

export default finance
