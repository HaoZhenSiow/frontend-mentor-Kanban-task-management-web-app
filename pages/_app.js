// import '../styles/globals.css'
import GlobalStyle from '../styles/globalstyle'
import DarkMode from '../styles/darkmode'
import fluid from '../components/utils/fluid'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    fluid.init()
  }, [])
  return (
    <>
      <GlobalStyle/>
      <DarkMode/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
