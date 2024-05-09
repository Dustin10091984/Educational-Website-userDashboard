import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import SDHeader from '@/components/StudentDashboard/SDHeader'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cookies from 'js-cookie'
import { useAvatar } from '@/contexts/AvatarContext'
// import Bg from '@/components/LandingPage/Bg'
import Image from 'next/image'

const studentReq = () => {
  const { updateAvatar, updateStudentName } = useAvatar()
  const router = useRouter()
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)
  const [nationalIdPreview, setNationalIdPreview] = useState(null)
  const [identityCertificatePreview, setIdentityCertificatePreview] =
    useState(null)
  const [avatarPreview, setAvatarPreview] = useState(null)

  const [nationalIdFile, setNationalIdFile] = useState(null)
  const [identityCertificateFile, setIdentityCertificateFile] = useState(null)
  const [avatarFile, setAvatarFile] = useState(null)
  const [studentData, setStudentData] = useState({
    national_number: '',
    first_name: '',
    last_name: '',
    gender: '',
    landline_phone: '',
    city: '',
    address: '',
    birth_day_solar: '',
    school: '',
    father_job: '',
    mother_job: '',
    father_phone: '',
    mother_phone: '',
    level: 3,
    former: true,
  })
  const [levels, setLevels] = useState({ results: [] })
  const [birthDay, setBirthDay] = useState({
    year: '',
    month: '',
    day: '',
  })

  // New state variables to store the uploaded file URLs
  const [nationalIdUrl, setNationalIdUrl] = useState('')
  const [identityCertificateUrl, setIdentityCertificateUrl] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')

  // year, month, and day options for the Persian calendar
  const years = Array.from({ length: 102 }, (_, i) => 1302 + i) // from 1302 to 1403
  const months = Array.from({ length: 12 }, (_, i) => i + 1) // 1 to 12
  const days = Array.from({ length: 31 }, (_, i) => i + 1) // 1 to 31

  const handleBirthDayChange = (e) => {
    const { name, value } = e.target
    setBirthDay((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Fetch levels from the API when the component mounts
  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await axios.get(
          'https://api.ebsalar.com/api/v1/front/level/'
        )
        setLevels(response.data)
      } catch (error) {
        console.error('Error fetching levels:', error)
      }
    }
    fetchLevels()
  }, [])

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

  const handleLevelChange = (e) => {
    const selectedLevelId = parseInt(e.target.value, 10)
    setStudentData((prevData) => ({
      ...prevData,
      level: selectedLevelId,
    }))
  }

  const handleNationalNumberImageChange = (e) => {
    const file = e.target.files[0]
    handleFileUpload(file, setNationalIdUrl, setNationalIdPreview)
  }

  const handleIdentityCertificateChange = (e) => {
    const file = e.target.files[0]
    handleFileUpload(
      file,
      setIdentityCertificateUrl,
      setIdentityCertificatePreview
    )
  }

  const handleAvatarFileChange = (e) => {
    const file = e.target.files[0]
    handleFileUpload(file, setAvatarUrl, setAvatarPreview)

    const reader = new FileReader()
    reader.onloadend = () => {
      updateAvatar(reader.result) // Updates the avatar in the context
    }
    reader.readAsDataURL(file)
  }
  // function to preview a file
  const previewFile = (file, setPreview) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result)
    }
    reader.readAsDataURL(file)
  }

  // New function to handle file uploads
  const handleFileUpload = async (file, setUrl, setPreview) => {
    // const token = Cookies.get('authToken')
    const token = Cookies.get('authToken')
    if (!token) {
      toast.error('لطفا وارد شوید')
      return
    }

    previewFile(file, setPreview) // This will preview the file locally

    try {
      let formData = new FormData()
      formData.append('file', file)

      const response = await axios.post(
        'https://api.ebsalar.com/api/v1/media/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      // Store the URL in state
      setUrl(response.data.results)
    } catch (error) {
      console.error('Error uploading file:', error)
      toast.error('دوباره آپلود نمایید')
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type } = e.target
    const val =
      type === 'number' && name === 'level' ? parseInt(value, 10) : value
    setStudentData((prevData) => ({
      ...prevData,
      [name]: val,
    }))
    if (name === 'first_name') {
      updateStudentName(value)
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const birthDayString = `${birthDay.year}/${birthDay.month}/${birthDay.day}`
    if (!birthDay.year || !birthDay.month || !birthDay.day) {
      toast.error('لطفا تاریخ تولد خود را کامل وارد نمایید.')
      return
    }
    const token = Cookies.get('authToken')
    if (!token) {
      toast.error('لطفا وارد شوید')
      router.push('/login') // Redirect to login page or handle accordingly
      return
    }
    try {
      const postData = {
        ...studentData,
        national_number_image: nationalIdUrl,
        identityـcertificate: identityCertificateUrl,
        avatar: avatarUrl,
        birth_day_solar: birthDayString,
      }

      const response = await axios.post(
        'https://api.ebsalar.com/api/v1/front/my_request/',
        postData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      // reset image previews
      if (response.status === 200) {
        setNationalIdPreview(null)
        setIdentityCertificatePreview(null)
        setAvatarPreview(null)
        setNationalIdFile(null)
        setIdentityCertificateFile(null)
        setAvatarFile(null)
        // Reset the form fields
        setStudentData({
          national_number: '',
          first_name: '',
          last_name: '',
          gender: '',
          landline_phone: '',
          city: '',
          address: '',
          birth_day_solar: '',
          school: '',
          father_job: '',
          mother_job: '',
          father_phone: '',
          mother_phone: '',
          level: 3,
          former: true,
        })
        toast.success('فرم با موفقیت ارسال شد', {
          onClose: () => {
            router.push('/studentBoard')
          },
          autoClose: 3000,
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('مشکل در ارسال فرم')
    }
  }

  return (
    <div className=' min-h-screen px-[20%]  lg:px-[15%] md:px-[10%] sm:px-[4%]'>
      <ToastContainer />
      <SDHeader />
      {/* bg */}
      {/* <div className='fixed h-full    w-full  z-0 top-0 left-0'>
        <div className=' h-full flex items-center justify-center  px-4'>
          <div className='relative h-full w-full max-w-lg'>
            <div className='absolute top-96 -left-74 z-0  w-[230px] h-[230px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  rounded-full mix-blend-multiply shadow-md shadow-yellow-500  opacity-70 animate-blob'>
              <p></p>
            </div>
            <div className='absolute top-0 -right-4 w-96 h-96 sm:h-64 sm:w-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply  opacity-70 animate-blob animation-delay-2000'>
              <p></p>
            </div>
            <div className='absolute  bottom-10 left-60 w-[160px] h-[160px]  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-purple-500 rounded-full mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000'>
              <p></p>
            </div>
          </div>
        </div>
      </div> */}
{/* <Bg/>   */}
    {/* bg */}

    <Image
            src="/images/bg-d.jpg"
            alt="ebs"
            width="1200"
            height="800"
            className="  fixed top-0 left-0 w-full min-h-screen -z-20"
          />

      <form onSubmit={handleFormSubmit}>
        {/* uploading images section */}

        <div className=' pt-20 h-full  flex   justify-center items-center rounded-md  backdrop-blur-md shadow-2xl shadow-black'>
          <div className='grid w-full gap-4 bg-[#e6dcdc00] p-4  content-center grid-cols-2'>
            <div className='flex flex-col-reverse justify-center items-center col-span-2 mx-h-[650px]   shadow-2xl shadow-black  py-4  rounded-md  '>
              <label
                htmlFor='avatar'
                className='text-gray-50  w-full py-2 text-center text-xs'
              >
                عکس دانش آموز
              </label>
              <input
                className=' mx-auto'
                type='file'
                id='avatar'
                name='avatar'
                onChange={handleAvatarFileChange}
                required
              />
              {avatarPreview && (
                <div className='w-44 h-44 border-4 border-gray-50 shadow-xl shadow-[#804685cf] my-6 overflow-hidden rounded-full'>
                  <img
                    src={avatarPreview}
                    alt='Avatar Preview'
                    className='w-full h-full object-cover  '
                  />
                </div>
              )}
            </div>

            <div className=' flex flex-col-reverse md:col-span-2 justify-center  shadow-2xl shadow-black backdrop-blur-2xl  items-center mx-h-[650px]  rounded-md'>
              <label
                htmlFor='national_number_image'
                className='text-gray-50  w-full py-2 text-center text-xs'
              >
                عکس کارت ملی
              </label>
              <input
                type='file'
                id='national_number_image'
                name='national_number_image'
                onChange={handleNationalNumberImageChange}
                required
              />
              {/* National Number Image preview */}
              {nationalIdPreview && (
                <img
                  src={nationalIdPreview}
                  alt='National ID preview'
                  className='w-20 rounded-md'
                />
              )}
            </div>
            <div className='flex justify-center   flex-col-reverse items-center md:col-span-2 mx-h-[650px] backdrop-blur-2xl  shadow-2xl  shadow-black  rounded-md'>
              <label
                htmlFor='identity_certificate'
                className='text-gray-50  w-full py-2 text-center text-xs '
              >
                عکس شناسنامه
              </label>
              <input
                type='file'
                id='identity_certificate'
                name='identity_certificate'
                onChange={handleIdentityCertificateChange}
                required
              />
              {/* Identity Certificate preview */}
              {identityCertificatePreview && (
                <img
                  src={identityCertificatePreview}
                  alt='Identity Certificate preview'
                  className='w-20 rounded-md'
                />
              )}
            </div>
          </div>
        </div>

        {/* uploading images section */}

        {/* --------------- */}
        <div className='h-full z-50 w-full mt-[30px] rounded-md  bg-[#ffffff00] backdrop-blur-2xl shadow-xl shadow-black p-4'>
          {/* <div className=' grid  grid-cols-1 w-full gap-2'> */}
          <input
            className='border-b-2 text-gray-100 placeholder-gray-100 border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 px-3 py-2 w-full'
            dir='rtl'
            // type='text'
            type='number'
            name='national_number'
            onChange={handleInputChange}
            placeholder=' کد ملی دانش آموز'
            pattern='\d{10}'
            title='National number must be exactly 10 digits.'
            required
          />

          <input
            className='border-b-2 text-gray-100 placeholder-gray-100 border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 px-3 py-2 w-full'
            dir='rtl'
            type='text'
            name='first_name'
            onChange={handleInputChange}
            placeholder='نام'
            required
          />

          <input
            className='border-b-2 text-gray-100 placeholder-gray-100 border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 px-3 py-2 w-full'
            dir='rtl'
            type='text'
            name='last_name'
            onChange={handleInputChange}
            placeholder='نام خانوادگی'
            required
          />

          <input
            className='border-b-2 text-gray-100 placeholder-gray-100 border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 px-3 py-2 w-full'
            dir='rtl'
            // type="text"
            type='number'
            name='landline_phone'
            onChange={handleInputChange}
            placeholder='شماره تلفن ثابت'
            pattern='0\d{10}'
            title='Phone number should start with 0 for city code and be 11 digits in total.'
            required
          />

          <input
            className='border-b-2 text-gray-100 placeholder-gray-100 border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 px-3 py-2 w-full'
            dir='rtl'
            type='text'
            name='city'
            onChange={handleInputChange}
            placeholder='شهر محل اقامت'
            required
          />

          <input
            className='border-b-2 text-gray-100 placeholder-gray-100 border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 px-3 py-2 w-full'
            dir='rtl'
            type='text'
            name='address'
            onChange={handleInputChange}
            placeholder='آدرس دقیق منزل'
            required
          />

          <div className='p-2 flex flex-row-reverse justify-center  items-center py-2'>
            <label className='text-white px-2'>تاریخ تولد</label>
            <div className='flex space-x-2'>
              <select
                name='year'
                value={birthDay.year}
                onChange={handleBirthDayChange}
                className='rounded-sm px-2'
                required
              >
                <option value=''>سال</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select
                name='month'
                value={birthDay.month}
                onChange={handleBirthDayChange}
                className='rounded-sm px-2'
                required
              >
                <option value=''>ماه</option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name='day'
                value={birthDay.day}
                onChange={handleBirthDayChange}
                className='rounded-sm px-2'
                required
              >
                <option value=''>روز</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <input
            className='border-b-2 text-gray-100 placeholder-gray-100 border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 px-3 py-2 w-full'
            dir='rtl'
            type='text'
            name='school'
            onChange={handleInputChange}
            placeholder='مدرسه در حال تحصیل'
            required
          />

          <input
            className='border-b-2 text-gray-100 placeholder-gray-100 border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 px-3 py-2 w-full'
            dir='rtl'
            type='text'
            name='father_job'
            onChange={handleInputChange}
            placeholder='شغل پدر یا سرپرست'
            required
          />

          <input
            className='border-b-2 text-gray-100 placeholder-gray-100 border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 px-3 py-2 w-full'
            dir='rtl'
            type='text'
            name='mother_job'
            onChange={handleInputChange}
            placeholder=' شغل مادر یا سرپرست'
            required
          />

          <input
            className='border-b-2 text-gray-100 placeholder-gray-100 border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 px-3 py-2 w-full'
            dir='rtl'
            // type='text'
            type='number'
            name='father_phone'
            onChange={handleInputChange}
            placeholder='شماره تماس  پدر یا سرپرست'
            pattern='0\d{10}'
            title='Phone number should start with 0 and be 11 digits in total.'
            required
          />

          <input
            className='border-b-2 text-gray-100 placeholder-gray-100 border-gray-600 bg-transparent focus:outline-none focus:border-purple-500 px-3 py-2 w-full'
            dir='rtl'
            // type='text'
            type='number'
            name='mother_phone'
            onChange={handleInputChange}
            placeholder='شماره تماس  مادر یا سرپرست'
            pattern='0\d{10}'
            title='Phone number should start with 0 and be 11 digits in total.'
            required
          />

          <div className='p-2 w-full flex justify-center space-x-2 '>
            <select
              id='level'
              name='level'
              value={studentData.level}
              onChange={handleLevelChange}
              className='rounded-sm'
              required
            >
              {levels.results.map((level) => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </select>
            <label htmlFor='level' className='text-gray-200'>
              پایه خود را انتخاب نمایید
            </label>
          </div>

          {/* Former input (checkbox) */}
          {/* <div className='py-2 w-full flex justify-center space-x-4'>
            <label className='text-gray-200 '>قبلا دانش آموز ما بودید؟</label>
            <input
              type='checkbox'
              name='former'
              onChange={(e) =>
                setStudentData({ ...studentData, former: e.target.checked })
              }
            />
          </div> */}
          {/* Other fields start */}

          {/* Gender input (radio buttons) */}
          <div className=' flex flex-row-reverse   col-span-2 md:col-span-1 justify-center items-center  py-2'>
            <label className='text-black px-4'> </label>

            <div>
              <label htmlFor='male' className='text-gray-200  px-2'>
                پسر هستم
              </label>
              <input
                type='radio'
                id='male'
                name='gender'
                value='m'
                onChange={handleInputChange}
                required
              />
            </div>
            <div className=''>
              <label htmlFor='female' className='text-gray-200 px-2'>
                دختر هستم
              </label>
              <input
                type='radio'
                id='female'
                name='gender'
                value='f'
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* </div> */}
          {/* </div> */}
          <button
            type='submit'
            className='shadow-md z-50 text-gray-50 shadow-[#000000d3] px-7 py-4 bg-gradient-to-r from-[#110712] via-[#4d0b68df] to-[hsl(294,60%,7%)] 
  rounded-2xl my-6  w-full'
          >
            ارسال
          </button>
        </div>
      </form>
    </div>
  )
}

export default studentReq
