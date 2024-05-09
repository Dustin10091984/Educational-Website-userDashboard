'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaCircleNotch } from 'react-icons/fa6'

export default function Login() {
  const router = useRouter()
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState(Array(5).fill(''))
  const [otpRequested, setOtpRequested] = useState(false)
  const [isRequestingOtp, setIsRequestingOtp] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  // Redirect to home if already logged in
  useEffect(() => {
    const authToken = Cookies.get('authToken')
    if (authToken) {
      router.replace('/')
    } else {
      setIsCheckingAuth(false)
    }
  }, [router])

  if (isCheckingAuth) {
    return null
  }

  // This function will be called when the user requests an OTP
  const requestOtp = async (e) => {
    e.preventDefault()
    if (!mobile.startsWith('0') || mobile.length !== 11) {
      alert('شماره موبایل شما باید با 0 شروع و دارای 11 رقم باشد')
      return
    }
    setIsRequestingOtp(true)
    try {
      const response = await axios.post(
        'https://api.ebsalar.com/api/v1/login_register/',
        {
          phone_number: mobile,
        }
      )

      console.log('OTP requested successfully:', response.data)

      toast.success(`${response.data.results}`)
      setOtpRequested(true)
    } catch (error) {
      console.error(
        'Error requesting OTP:',
        error.response?.data || error.message
      )
      alert('Failed to send OTP. Please try again.')
    }
    setIsRequestingOtp(false)
  }

  // enabling long press of the delete button as well as delete by every digit starts here
  const clearOtp = () => {
    setOtp(Array(5).fill(''))
  }
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        const newOtp = [...otp]
        newOtp[index - 1] = ''
        setOtp(newOtp)
        setTimeout(() => document.getElementById(`otp-${index - 1}`).focus(), 0)
      } else {
        const newOtp = [...otp]
        newOtp[index] = ''
        setOtp(newOtp)
      }
    } else if (e.key === 'Backspace' && e.repeat) {
      e.preventDefault()
      setTimeout(clearOtp, 500)
    }
  }
  // enabling long press of the delete button as well as delete by every digit finishes here

  // normalized persian digits starts here
  const normalizeDigits = (str) => {
    const digitMap = {
      '۰': '0',
      '۱': '1',
      '۲': '2',
      '۳': '3',
      '۴': '4',
      '۵': '5',
      '۶': '6',
      '۷': '7',
      '۸': '8',
      '۹': '9',
      '٠': '0',
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9',
    }
    return str.replace(/[۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩]/g, (char) => digitMap[char])
  }
  // normalized persian digits finishes here

  // This function will be called when the user submits the OTP for verification
  const verifyOtp = async (e) => {
    e.preventDefault()
    const enteredOtp = otp.map(normalizeDigits).join('')
    console.log('Verifying OTP:', enteredOtp)

    try {
      const response = await axios.post(
        'https://api.ebsalar.com/api/v1/verify_login_register/',
        {
          phone_number: mobile,
          password: enteredOtp,
        }
      )

      console.log('OTP verification response:', response.data)

      if (response.status === 200) {
        Cookies.set('authToken', response.data.access, { expires: 20 })
        // OTP verification successful
        router.push('/')
      } else {
        // OTP verification failed
        alert('Incorrect OTP, please try again.')
      }
    } catch (error) {
      console.error(
        'Error verifying OTP:',
        error.response?.data || error.message
      )
      alert('Failed to verify OTP. Please try again.')
    }
  }

  const handleOtpChange = (element, index) => {
    const newOtp = [...otp]
    newOtp[index] = normalizeDigits(element.value)
    setOtp(newOtp)
    if (element.nextSibling && element.value) {
      element.nextSibling.focus()
    }
  }

  return (
    <div
      className='bg-[#000000] -z-50'
      // className='flex h-screen'
      // style={{
      //   backgroundImage: "url('/login.jpg')",
      //   backgroundSize: 'cover',
      // }}
    >
      <ToastContainer />
      {/* bg */}
      <div className='fixed h-full   w-full  z-0 top-0 left-0'>
        <div className=' h-full flex items-center justify-center  px-4'>
          <div className='relative h-full w-full max-w-lg'>
            <div className='absolute top-96 -left-74 z-0  w-[230px] h-[230px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  rounded-full mix-blend-multiply shadow-md shadow-yellow-500  opacity-70 animate-blob'>
              <p></p>
            </div>
            <div className='absolute top-0 -right-4 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply  opacity-70 animate-blob animation-delay-2000'>
              <p></p>
            </div>
            <div className='absolute  bottom-10 left-60 w-[160px] h-[160px]  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-purple-500 rounded-full mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000'>
              <p></p>
            </div>

            <div className='m-8 relative space-y-4'></div>
          </div>
        </div>
      </div>

      {/* bg */}
      <div className=' flex z-50 justify-center w-full min-h-screen items-center'>
        <div
          className='bg-[#e6dcdc20] pt-8 h-[650px]  w-[350px] border-4 border-[#ffffff5f]  
        flex flex-col justify-start space-y-8 items-center backdrop-blur-md shadow-2xl shadow-gray-900 rounded-2xl '
        >
          <Link href='/'>
            <Image
              src='/images/icon-512x512.png'
              alt='ebs'
              width='200'
              height='200'
              className=' w-36 filter drop-shadow-lg shadow-black'
            />
          </Link>
          <p className='text-gray-200 py-4 whitespace-nowrap w-full text-center'>
            ‍ Welcome to EBS Community{' '}
          </p>

          {!otpRequested ? (
            <form onSubmit={requestOtp} className='space-y-4'>
              <div>
                <label
                  htmlFor='mobile'
                  className='block text-sm font-medium text-center py-2 text-white'
                >
                  شماره تلفن همراه
                </label>
                <input
                  id='mobile'
                  type='tel'
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder='09########## '
                  required
                  pattern='^0\d{10}$'
                  title='شماره تلفن با صفر شروع شده و ۱۱ رقمی باید باشد'
                  className='mt-1 block w-full bg-transparent border-b shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-slate-200'
                />
              </div>
              <button
                type='submit'
                style={{ backgroundColor: 'rgb(46, 170, 154)' }}
                // className=' w-full  p-2 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex justify-around items-center'
                // new class starts here
                className={`w-full p-2 rounded-xl text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex justify-around items-center ${
                  !isRequestingOtp && !otpRequested
                    ? 'active:bg-pink-600 active:scale-95 transition duration-150'
                    : 'opacity-50'
                }`}
                // new class finishes here
                disabled={isRequestingOtp || otpRequested} // Disable the button when requesting
              >
                {isRequestingOtp && (
                  <FaCircleNotch className='text-white animate-spin' />
                )}
                ارسال
              </button>
            </form>
          ) : (
            <form onSubmit={verifyOtp} className='space-y-4'>
              <div className='space-x-2'>
                <label
                  htmlFor='mobile'
                  className='block text-sm text-center font-medium text-white mb-2 ml-2'
                >
                  کد دریافتی را وارد کنید
                </label>
                {otp.map((value, index) => (
                  <input
                    id={`otp-${index}`}
                    key={index}
                    type='text'
                    maxLength='1'
                    value={value}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className='w-12 h-12 animate-flip-up animate-once animate-ease-in text-center text-2xl bg-red border-2 border-gray-300 rounded outline-none transition duration-200'
                    pattern='\d*'
                    required
                  />
                ))}
              </div>
              <button
                type='submit'
                // style={{ backgroundColor: 'rgb(46, 170, 154)' }}
                className='w-full  text-white p-2 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  mt-4'
              >
                تایید
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
