'use client'
import Cookies from 'js-cookie'
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ApprovedPayment = () => {
  const router = useRouter()
  const [approveMessage, setApproveMessage] = useState('')

  useEffect(() => {
    // Extract query parameters from the URL
    const { Authority, Status } = router.query

    // Send them to the backend API
    if (Authority && Status) {
      verifyPayment(Authority, Status)
    }
  }, [router])

  const verifyPayment = async (Authority, Status) => {
    // Define the API endpoint
    const apiEndpoint = 'https://api.ebsalar.com/api/v1/front/verify_payment/'

    // Parameters to be sent to the backend
    const params = new URLSearchParams({ Authority, Status })

    // Make the API call
    try {
      const response = await fetch(`${apiEndpoint}?${params}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          // Add other headers such as Authorization if needed
          Authorization: `Bearer ${Cookies.get('authToken')}`,
        },
      })

      const responseData = await response.json()

      if (response.ok) {
        // Handle the successful verification
        console.log(responseData)
        toast.success(responseData.results)
        setApproveMessage(responseData.results)
        // You may want to redirect or perform other actions here
      } else {
        // Handle errors
        console.error(responseData.results)
        toast.error(responseData.results)
        setApproveMessage(responseData.results)
      }
    } catch (error) {
      console.error('Error while verifying payment:', error)
      // Handle network errors
    }
  }

  const goToHome = () => {
    router.push('/')
  }

  return (
    <div className='flex flex-col items-center justify-center w-60 h-[400px]  mt-10 mx-auto'>
      <ToastContainer />
      <h1 className='text-blue-800 text-xl'>{approveMessage}</h1>
      <div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded mt-4'
          onClick={goToHome}
        >
          Home
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
          Orders
        </button>
      </div>
    </div>
  )
}

export default ApprovedPayment
