import Head from 'next/head'
import Header from '../components/header/Header'
import Main from '../components/main/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanban Task Management Web App</title>
      </Head>
      <Header/>
      <Main/>
    </>
    
  )
}
