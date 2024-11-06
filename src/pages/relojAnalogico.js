import Navigation from '@/components/Navigation'
import RelojEf from '@/components/Rolex'
import ServiceBooks from '@/components/ServiceBooks'
import BooksContextProvider from '@/context/BooksContextProvider'
import Head from 'next/head'

const relojAnalogico = () => {
  return (
    <>
      <Head>
        <title>Reloj Analógico</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BooksContextProvider>
        <Navigation/>
        <ServiceBooks/>
      </BooksContextProvider>
      <RelojEf/>
    </>
  )
}

export default relojAnalogico;