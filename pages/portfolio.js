
import { useEffect } from 'react'
import Head from 'next/head'
import Main from "../components/portfolio/Main";


const Portfolio = props => {



  return (
    <>
      <Head>
        {/* <link
          rel="preload"
          href="/fonts/AvertaStdPE-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/AvertaStdPE-Black.otf"
          as="font"
          crossOrigin=""
        /> */}
      </Head>

      <Main />
    </>
  )
}

export default Portfolio;