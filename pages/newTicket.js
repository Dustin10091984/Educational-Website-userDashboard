import SDHeader from '@/components/StudentDashboard/SDHeader'
import { registerTicketOnsite } from '@/redux/features/tickets/ticketsSlice'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const newTicket = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [ticketData, setTicketData] = useState({
    title: '',
    message: '',
    department: 5,
    file: '',
  })
  const [fileImage, setFileImage] = useState(null)
  const [fileImageUrl, setFileImageUrl] = useState('')
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    const fetchDepartments = async () => {
      //   Get the access token
      const accessToken = Cookies.get('authToken')
      if (!accessToken) {
        toast.error('Authentication token not found. Please log in.')
        return
      }
      try {
        const response = await axios.get(
          'https://api.ebsalar.com/api/v1/front/department/',
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        setDepartments(response.data.results)
      } catch (error) {
        console.log('Error fetching departments:', error)
      }
    }
    fetchDepartments()
  }, [])

  const handleFileImageChange = async (e) => {
    const file = e.target.files[0]
    if (file) {
      setFileImage(file)
      // Preview the image
      const reader = new FileReader()
      reader.onloadend = () => {
        setFileImageUrl(reader.result)
      }
      reader.readAsDataURL(file)

      // Prepare the form data to upload
      const formData = new FormData()
      formData.append('file', file)

      // Get the access token
      const accessToken = Cookies.get('authToken')
      if (!accessToken) {
        toast.error('Authentication token not found. Please log in.')
        return
      }

      try {
        const uploadResponse = await axios.post(
          'https://api.ebsalar.com/api/v1/media/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        toast.success('image uploaded successfully')
        if (uploadResponse.data && uploadResponse.data.results) {
          setTicketData({
            ...ticketData,
            file: uploadResponse.data.results,
          })
        }
      } catch (error) {
        console.error('Error uploading file:', error)
        toast.error('Failed to upload file image.')
      }
    }
  }

  const handleDepartmentChange = (e) => {
    const { name, value } = e.target
    setTicketData((prevData) => ({
      ...prevData,
      [name]: parseInt(value, 10),
    }))
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    setTicketData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Prepare the ticket data for submission
    const newTicketData = {
      title: ticketData.title,
      message: ticketData.message,
      department: ticketData.department,
      file: ticketData.file,
    }
    // Dispatch the registerTicketOnsite action
    dispatch(registerTicketOnsite(newTicketData))
      .unwrap()
      .then((newTicketData) => {
        toast.success('tickets details updated successfully.', {
          onClose: () => {
            setTimeout(() => {
              router.push('/ticket')
            }, 2000)
          },
          autoClose: 2000,
        })
      })
      .catch((error) => {
        toast.error(`Registration failed: ${error.message || 'Error occurred'}`)
      })
  }

  return (
    <div className=' flex flex-col justify-center items-center bg-gray-800 w-full p-20 md:p-6 min-h-screen itmes-center '>
      <SDHeader />
      <div className='flex flex-col mx-auto mt-10 justify-center items-center w-[480px] border shadow-lg rounded-lg hover:scale-105 duration-300 bg-white p-2'>
        <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-lg '
        >
          {/* file input */}
          <div className='mb-4 flex  md:col-span-1'>
            <label
              className='block text-gray-700 text-sm font-bold -mr-10 -mb-7'
              htmlFor='file'
            >
              ضمیمه فایل
            </label>
            <div className='grid grid-cols-2 items-end gap-4 ml-14'>
              <input
                id='file'
                type='file'
                name='file'
                onChange={handleFileImageChange}
                className='col-span-1 shadow appearance-none border rounded py-2 pl-10 pr-1 w-[360px]  text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              {fileImageUrl && (
                <img
                  src={fileImageUrl}
                  alt='file Preview'
                  className='w-20 h-20 ml-28 rounded-md'
                />
              )}
            </div>
          </div>
          {/* Title input */}
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              موضوع
            </label>
            <input
              id='title'
              type='text'
              name='title'
              value={ticketData.title}
              onChange={handleInputChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          {/* Message input */}
          <div className='mb-4'>
            <label
              htmlFor='message'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              متن پیغام
            </label>
            <textarea
              name='message'
              value={ticketData.message}
              onChange={handleInputChange}
              className='h-24 py-1 px-3 w-full border-2  rounded focus:outline-none focus:border-blue-600 resize-none'
            ></textarea>
          </div>
          {/* Department Select input */}
          <div className='mb-4 md:col-span-1'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              دپارتمان
            </label>
            <select
              name='department'
              value={ticketData.department}
              onChange={handleDepartmentChange}
              className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            >
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
          {/* Save Changes Button */}
          <div className='mb-4 md:col-span-1 flex justify-start'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default newTicket
