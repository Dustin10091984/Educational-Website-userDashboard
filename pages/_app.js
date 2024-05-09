import '../styles/globals.css'
import Layout from '@/components/Layout'
import { AvatarProvider } from '@/contexts/AvatarContext'
import { useEffect } from 'react'
import { register, unregister } from 'next-offline/runtime'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../redux/store/store'
import { initializeCart } from '@/redux/features/cart/cartSlice'

function MyApp({ Component, pageProps }) {
  // const dispatch = useDispatch()
  useEffect(() => {
    store.dispatch(
      initializeCart(JSON.parse(localStorage.getItem('cart') || '[]'))
    )

    const onServiceWorkerUpdate = () => {
      const answer = window.confirm(
        'A new version of the app is available. Do you want to update?'
      )

      if (answer === true) {
        window.location.reload()
      }
    }

    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing
            if (installingWorker) {
              installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                  if (navigator.serviceWorker.controller) {
                    onServiceWorkerUpdate()
                  } else {
                    console.log('Content is cached for offline use.')
                  }
                }
              }
            }
          }
        })
        .catch((error) => {
          console.error('Error during service worker registration:', error)
        })
    }

    return () => {
      unregister()
    }
  }, [])

  return (
    <Provider store={store}>
      <AvatarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AvatarProvider>
    </Provider>
  )
}

export default MyApp
