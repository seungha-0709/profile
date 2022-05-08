import { useState } from "react"
import styled from "styled-components"
import Main from "../portfolio/Main"
import Home from "../Home";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Container = styled.div`
  width: calc(100% - 100px);
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  margin: 0 auto;
  iframe {
    border: 1px solid transparent;
  }
`

const Prev = styled.button`
  width:50px;
  height:100vh;
  background: rgba(20, 20, 20, 0.3);
  position: absolute;
  bottom: 0px;
  left: 0px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Next = styled.button`
  width:50px;
  height:100vh;
  background: rgba(20, 20, 20, 0.3);  
  position: absolute;
  bottom: 0px;
  right: 0px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Slide1 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide1.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide2 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide2.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide3 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide3.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide4 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide4.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide5 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide5.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide6 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide6.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide7 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide7.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide8 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide9.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide9 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide10.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide10 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide11.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide11 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide12.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide12 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide13.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide13 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide14.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide14 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide15.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Slide15 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/presentation/slide15.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const Presentation = props => {
  const [page, setPage] = useState(0)

  const handlePageUp = () => {
    if (page !== 17) {
      setPage(page + 1)
    }
  }

  const handlePageDown = () => {
    if (page !== 0) {
      setPage(page - 1)
    }
  }

  return (
    <>
      <Container>
        {page === 0 && <Slide1 />}
        {page === 1 && <Main />}
        {page === 2 && <Home />}
        {page === 3 && (
          <iframe src="https://www.erpper.com/" width="100%" height="100%" />
        )}
        {page === 4 && <Slide2 />}
        {page === 5 && <Slide3 />}
        {page === 6 && <Slide4 />}
        {page === 7 && <Slide5 />}
        {page === 8 && <Slide6 />}
        {page === 9 && <Slide7 />}
        {page === 10 && (
          <iframe src="https://mycolors-rho.vercel.app/" width="100%" height="100%" />
        )}
        {page === 11 && <Slide8 />}
        {page === 12 && <Slide9 />}
        {page === 13 && <Slide10 />}
        {page === 14 && <Slide11 />}
        {page === 15 && <Slide12 />}
        {page === 16 && <Slide13 />}
        {page === 17 && <Slide14 />}
      </Container>
      <Prev onClick={handlePageDown}><ArrowBackIosNewIcon style={{ fontSize: '2rem', color: '#fff' }} /></Prev>
      <Next onClick={handlePageUp}><ArrowForwardIosIcon style={{ fontSize: '2rem', color: '#fff' }} /></Next>
    </>

  )
}

export default Presentation;