// import '../styles/globals.css'
import GlobalStyle from '../styles/globalstyle'
import fluid from '../components/utils/fluid'
import { useEffect } from 'react'

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     fluid.init()
//   }, [])
//   return (
//     <>
//       <GlobalStyle/>
//       <Component {...pageProps} />
//     </>
//   )
// }

// export default MyApp

import styled from 'styled-components'

const MyAppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    fluid.init()
  }, [])
  return (
    <MyAppStyled>
      <GlobalStyle/>
      <Component {...pageProps} />
    </MyAppStyled>
  );
}

export default MyApp
