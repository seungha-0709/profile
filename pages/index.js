
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Head from 'next/head'
import Main from "../components/portfolio/Main";
import MainMobile from '../components/portfolio/MainMobile'


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

  return (
    <>
      <Head>
        <title>Kim Seungha, Web Frontend Developer</title>
        <meta property="og:title" content="Kim Seungha, Web Frontend Developer" key="title" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/website.png" />
        <meta property="og:description" content="Kim Seungha, Web Frontend Developer" />
      </Head>
      <div ref={componentRef}>
        {viewport === 'desktop' && <Main />}
        {viewport === 'mobile' && <MainMobile />}
      </div>
    </>
  )
}

export default Portfolio;