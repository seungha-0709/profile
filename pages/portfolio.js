
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Head from 'next/head'
import Main from "../components/portfolio/Main";
import MainMobile from '../components/portfolio/MainMobile'
import MainKorean from '../components/portfolio/MainKorean'


const Portfolio = props => {

  const [viewport, setViewport] = useState()
  const componentRef = useRef()

  const handleResize = () => {
    setViewWidth(componentRef.current.clientWidth);
  };

  const [viewWidth, setViewWidth] = useState(0);

  useLayoutEffect(() => {
    const element = componentRef.current;
    if (!element) {
      return;
    }
    handleResize();
    let resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(element);
    return () => {
      if (!resizeObserver) {
        return;
      }
      resizeObserver.disconnect();
      resizeObserver = null;
    };

  }, [componentRef.current]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    viewWidth >= 1200 ? setViewport('desktop') : setViewport('mobile')
  }, [viewWidth])

  console.log(viewport)

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
      <div ref={componentRef}>
        {/* {viewport === 'desktop' && <Main />}
        {viewport === 'mobile' && <MainMobile />} */}
        <MainKorean />
      </div>
    </>
  )
}

export default Portfolio;