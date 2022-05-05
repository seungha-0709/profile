import styled from "styled-components"
import Experience from "./Experience"

const Container = styled.div`
  width: 100%;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 0;
`

const ContentWrapper = styled.div`
  width: 1200px;
  padding: 40px;
  min-height: 100vh;
  background: #fff;
  margin: 0;
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 20px;
  }
`

const Title = styled.div`
  width: 100%;
  height: 300px;
  margin: 0;
  padding: 40px;
  color: #222;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #222;
  & > div:first-of-type {
    h1 {
      color: #222;
    }
  }
`
const Profile = styled.div`
  background-image: url('kimseungha.jpg');
  width: 220px;
  height: 220px;
  border-radius: 110px;
  background-size: cover;
  background-repeat: no-repeat ;
  @media screen and (max-width: 600px) {
    display: none;
  }
  /* filter: grayscale(100%); */
  
`

const Home = props => {


  return (
    <Container>
      <ContentWrapper>
        <Title>
          <div>
            <h1>김 승 하</h1>
            <p>Web Frontend Developer</p>
            <ul>
              <li>email: sh.kim.x928@gmail.com</li>
            </ul>
          </div>
          <Profile />
        </Title>
        <Experience />
      </ContentWrapper>
    </Container>
  )
}

export default Home