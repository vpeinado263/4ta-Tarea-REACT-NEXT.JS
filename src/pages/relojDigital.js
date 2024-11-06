import Navigation from "@/components/Navigation"
import RelojEffect from "@/components/RelojEffect"
import ServiceBooks from "@/components/ServiceBooks"
import BooksContextProvider from "@/context/BooksContextProvider"
import Head from "next/head"


const relojDigital = () => {
  return (
    <>
       <Head>
        <title>Reloj Digital</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       </Head>

       <BooksContextProvider>
        <Navigation/>
        <RelojEffect/>
        <ServiceBooks/>
      </BooksContextProvider>

      <body className="bodyDigital">
     
      </body>
      
      
    </>
  )
}

export default relojDigital
