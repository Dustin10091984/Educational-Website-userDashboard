import { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { IoIosSend } from 'react-icons/io'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RxAvatar } from 'react-icons/rx'
import { FaStar } from 'react-icons/fa'

const ticketDetails = () => {
  const router = useRouter()
  const { ticketId } = router.query
  const [tickets, setTickets] = useState(null)
  const [error, setError] = useState()
  const [newMessage, setNewMessage] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileUrl, setFileUrl] = useState('')
  const [rating, setRating] = useState(0)

  const fileInputRef = useRef(null)

  useEffect(() => {
    const accessToken = Cookies.get('authToken')
    if (!accessToken) {
      router.push('/login')
    }
  }, [])

  useEffect(() => {
    const accessToken = Cookies.get('authToken')
    const fetchData = async () => {
      // Ensure we have a ticketId and accessToken before making the call
      if (ticketId && accessToken) {
        try {
          const response = await axios.get(
            `https://api.ebsalar.com/api/v1/front/ticket/messages/${ticketId}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          setTickets(response.data.results)
        } catch (error) {
          setError('Error fetching tickets details')
        }
      }
    }

    // Call fetchData when ticketId and accessToken are available
    if (ticketId && accessToken) {
      fetchData()
    }
  }, [ticketId, newMessage, fileUrl])

  // Function to handle file upload
  const handleFileUpload = async (file) => {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const accessToken = Cookies.get('authToken')
      const response = await axios.post(
        'https://api.ebsalar.com/api/v1/media/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      const fileData = response.data.results
      // Handle the response here, set the URL state
      setFileUrl(fileData)
      toast.success('File uploaded successfully.')
    } catch (error) {
      console.error('Error uploading file:', error)
      toast.error('Error uploading file.')
    }
  }

  if (error) return <div>{error}</div>
  if (!tickets) return <div>Loading...</div>

  const renderChatMessages = () => {
    // Helper function to format the solar date and time
    const formatDateSolar = (dateTimeSolarString) => {
      if (!dateTimeSolarString) return '---'
      const [date, time] = dateTimeSolarString.split(' ')
      const trimmedTime = time.substring(0, 5)
      return `${date} ${trimmedTime}`
    }

    return tickets.map((ticket, index) => (
      <div key={index} className='flex flex-col'>
        {ticket.staff ? (
          // Staff message or file link
          <div className='flex justify-end'>
            <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 items-end'>
              <div className='flex flex-row'>
                <div className=' mt-6 mr-2 font-bold'>{ticket.staff}</div>
                <div className='flex items-center justify-center h-14 w-14 mt-1 rounded-full bg-blue-500 text-white font-bold'>
                  <RxAvatar className=' size-16 ' />
                </div>
              </div>
              <div>
                {ticket.message && (
                  <span className='px-4 py-2 mb-6 rounded-lg inline-block rounded-br-none bg-blue-600 text-white'>
                    {ticket.message}
                  </span>
                )}
                {ticket.file && (
                  <a
                    href={ticket.file}
                    download
                    className='px-4 py-2 ml-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white underline'
                  >
                    Download File
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Student message
          <div className='flex justify-start'>
            <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 items-start'>
              <div className='flex flex-row'>
                <div className='flex items-center justify-center h-14 w-14 mt-1 rounded-full bg-gray-500 text-white font-bold'>
                  <RxAvatar className='size-16 ' />
                </div>
                <div className=' mt-6 ml-2 font-bold'>{ticket.student}</div>
              </div>
              <div>
                <span className='px-4 py-2 rounded-lg inline-block rounded-bl-non'>
                  {ticket.message && (
                    <span className='px-4 py-2 mb-6 rounded-lg inline-block rounded-br-none bg-gray-300 text-gray-600'>
                      {ticket.message}
                    </span>
                  )}
                  {ticket.file && (
                    <a
                      href={ticket.file}
                      download
                      className='px-4 py-2 ml-2 rounded-lg inline-block rounded-br-none bg-gray-300 text-gray-600 underline'
                    >
                      Download File
                    </a>
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className='text-xs text-gray-500 text-center mt-1'>
          {formatDateSolar(ticket.date_time_solar)}
        </div>
      </div>
    ))
  }

  // Function to send the rating to the server
  const sendRating = async (ratingValue) => {
    try {
      const accessToken = Cookies.get('authToken')
      const response = await axios.patch(
        `https://api.ebsalar.com/api/v1/front/ticket/${ticketId}/`,
        { stars: ratingValue },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      )
      toast.success('Rating submitted successfully.')
    } catch (error) {
      console.error('Error submitting rating:', error)
      toast.error('Error submitting rating.')
    }
  }

  // Render the star rating component
  const renderStarRating = () => {
    return (
      <div className='flex justify-center items-center my-4'>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1
          return (
            <label key={ratingValue}>
              <input
                type='radio'
                name='rating'
                value={ratingValue}
                onClick={() => {
                  setRating(ratingValue)
                  sendRating(ratingValue)
                }}
                style={{ display: 'none' }}
              />
              <FaStar
                size={24}
                color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                style={{
                  cursor: 'pointer',
                  transition: 'color 200ms',
                }}
              />
            </label>
          )
        })}
      </div>
    )
  }

  // Function to handle message send with PUT request
  const handleSendMessage = async () => {
    if (!newMessage && !fileUrl) {
      toast.error('Please enter a message or attach a file.')
      return
    }

    try {
      const accessToken = Cookies.get('authToken')
      const formData = new FormData()
      formData.append('message', newMessage)
      if (fileUrl) {
        formData.append('file', fileUrl)
      }
      formData.append('ticket', ticketId)

      const response = await axios.put(
        'https://api.ebsalar.com/api/v1/front/ticket/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      setTickets([...tickets, response.data])
      console.log('Response data:', response)
      setNewMessage('')
      setSelectedFile(null)
      setFileUrl('')
      fileInputRef.current.value = '' // Reset the file input
      toast.success('Message sent successfully.')
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Error sending message.')
    }
  }

  return (
    <div className='flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen'>
      <ToastContainer />
      <div
        id='messages'
        className='flex-grow overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch p-3'
      >
        {renderChatMessages()}
      </div>
      <div className='p-3 flex items-center justify-between'>
        <input
          type='text'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder='Write a message...'
          className='flex-grow p-2 rounded border'
        />
        <input
          type='file'
          onChange={(e) => {
            const file = e.target.files[0]
            if (file) {
              handleFileUpload(file)
            }
          }}
          id='attach-file'
          ref={fileInputRef}
          className='ml-2'
        />
        <button onClick={handleSendMessage} className='p-2 mx-2'>
          <IoIosSend />
        </button>
      </div>
      <div class='flex items-center justify-center mt-5'>
        <p class='mr-2 text-lg font-bold'>How helpful were us?</p>
        <div class='flex items-center'>{renderStarRating()}</div>
      </div>
    </div>
  )
}

export default ticketDetails
