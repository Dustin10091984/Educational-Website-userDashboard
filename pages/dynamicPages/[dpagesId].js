import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const dynamicPages = () => {
  const router = useRouter()
  const { id } = router.query
  const [submenus, setSubmenus] = useState([])
  const [error, setError] = useState()

  // useEffect(() => {
  //   const accessToken = Cookies.get('authToken')
  //   if (!accessToken) {
  //     toast.error('Please log in to continue.')
  //     router.push('/login')
  //   }
  // }, [router])

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return

      try {
        const response = await axios.get(
          `https://api.ebsalar.com/api/v1/front/sub_menu/${id}`
        )
        setSubmenus(response.data.results)
      } catch (err) {
        setError('Error fetching submenus details')
        console.log('hiiiiii')
        console.log(err.message)

        toast.error(err.message)
      }
    }

    if (router.isReady) {
      fetchData()
    }
  }, [id])

  const renderSubmenus = () => {
    return submenus.map((submenu, index) => (
      <div key={index}>
        <ul>
          <li>{submenu.name}</li>
        </ul>
      </div>
    ))
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!submenus.length) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen'>
      <ToastContainer />
      <div
        id='name'
        className='flex-grow overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch p-3'
      >
        {renderSubmenus()}
      </div>
    </div>
  )
}

export default dynamicPages
