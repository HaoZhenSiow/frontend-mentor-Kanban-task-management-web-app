import Head from 'next/head'
import EmptyBoard from '../components/EmptyBoard'
import Header from '../components/header/Header'

export default function Home() {
  return (
    <>
      <Header/>
      <Head>
        <title>Kanban Task Management Web App</title>
      </Head>
      <EmptyBoard/>
    </>
    
  )
}
