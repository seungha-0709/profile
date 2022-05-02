import Head from 'next/head'
import Home from "../components/Home";

const Main = props => {

  return (
    <>
      <Head>
        <title>Kim Seungha, Web Frontend Developer</title>
        <meta property="og:title" content="Kim Seungha, Web Frontend Developer" key="title" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/kimseungha.jpg" />
        <meta property="og:description" content="웹 프런트엔드 개발자 김승하입니다." />
      </Head>
      <Home />
    </>
  )
}

export default Main