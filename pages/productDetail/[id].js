import { useRouter } from 'next/router' // if I put this to navigation it will not work
import axios from 'axios'
import { useEffect, useState } from 'react'
import Bg from '@/components/LandingPage/Bg'
import HeaderPublic from '@/components/HeaderPublic'
import Footer from '@/components/Footer'

const ProductDetailPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState(null)
  const [showMore, setShowMore] = useState(false) // State to manage show/hide full description

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.ebsalar.com/api/v1/front/product/${id}`)
        .then((response) => {
          setProduct(response.data.results)
        })
        .catch((error) => {
          console.error('Error fetching product', error)
        })
    }
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  // Function to determine if the URL is valid for an image
  const isValidHttpUrl = (string) => {
    let url

    try {
      url = new URL(string)
    } catch (_) {
      return false
    }

    return url.protocol === 'http:' || url.protocol === 'https:'
  }

  // Function to truncate the description to the first 5 words
  const truncateDescription = (description) => {
    return description.split(' ').slice(0, 5).join(' ') + '...'
  }

  // Function to toggle the showMore state
  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <div>
    <div  className='flex h-full w-full min-h-screen justify-center items-center'>
      <div className='  max-w-[700px] my-20  mx-auto  '>
        <HeaderPublic/>
        <Bg/>
        <div className='h-64 w-full  backdrop-blur-2xl'>
          {isValidHttpUrl(product.banner) ? (
            // If you have a valid image URL, display the image
            <img
              src={product.banner}
              alt={product.title}
              className='w-full h-full object-cover rounded-t-lg'
            />
          ) : (
            // If not, display a placeholder or keep the area blank
            <div className='flex items-center justify-center h-full'>
              <span className='text-pink-800'>No Image</span>
            </div>
          )}
        </div>
        <div className='p-4 backdrop-blur-md bg-[#ffffff1a]'>
        <div className='flex justify-center py-4 flex-row-reverse sm:flex-col items-center space-x-4'>
          <h5 className='text-md  text-gray-200 w-full text-center'>{product.title}</h5>
           <p className='text-sm text-center w-full text-gray-600'>{product.category}</p>
           <p className=' text-md   whitespace-nowrap text-green-400'>{product.cost}: قیمت</p>
        </div>
          <div className='mt-2 flex  justify-between items-center'>
            <span
              className={`px-2 inline-flex text-xs leading-5  ${
                product.available
                  ? ' text-green-600'
                  : ' text-rose-600'
              }`}
            >
              {product.available ? 'در دسترس' : 'خارج از دسترس'}
            </span>
            <span className='mt-2 text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded'>
              Level: {product.level}
            </span>
            <span className=' mt-2 text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded'>
              Hour: {product.features.hour}
            </span>
            <span className='mt-2 text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded'>
              Session: {product.features.hour}
            </span>
          </div>
          <p className='mt-2 text-sm text-gray-300'>
            {showMore
              ? product.description
              : truncateDescription(product.description)}
            <button className='text-blue-600' onClick={handleShowMore}>
              {showMore ? 'نمایش کمتر' : 'مطالعه بیشتر'}
            </button>
          </p>
        </div>
      </div>

    </div>
        <Footer/>

    </div>
  )
}

export default ProductDetailPage
