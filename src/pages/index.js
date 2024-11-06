import Blog from "@/components/Blog";
import Books from "@/components/Books";
import Navigation from "@/components/Navigation";
import BooksContextProvider, { BookContext } from "@/context/BooksContextProvider";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bloj</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
           <Navigation/>
             <BooksContextProvider>
                <Blog/>
                <Books/>
             </BooksContextProvider>
      </main>
    </>
  );
}
