import React, { useEffect, useState } from 'react'
import SDHeader from '@/components/StudentDashboard/SDHeader'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import TicketTable from '@/components/StudentDashboard/Table/TicketTable'

const ticket = () => {
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

  const handleNewTicket = () => {
    router.push('/newTicket')
  }
  return (
    <div className=' flex flex-col justify-center items-center bg-gray-800 w-full p-20 md:p-6 min-h-screen itmes-center '>
      <SDHeader />
      <div className='w-full justify-start items-center py-4'>
        <button className=' text-blue-400' onClick={handleNewTicket}>
          تیکت جدید
        </button>
      </div>
      <TicketTable />
    </div>
  )
}

export default ticket
