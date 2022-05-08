import styled from 'styled-components'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Container = styled.div`
  width: 100%;
  background: #111;
  min-height: 100vh;
  font-family: Averta Std PE;
  color: #fff;
  line-height: 1.4rem;
`

const Top = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  line-height: 4rem;
  letter-spacing: 0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  height: 150px;
  background: #D12386;
  font-size: 5rem;
  font-weight: 900;
  position: relative;
  em {
    color: #111;
    font-style: normal;
  }
  &::after {
    content: '';
    position: absolute;
    background: #111;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    animation: 1000ms ease-in forwards topmoving;
    @keyframes topmoving {
      from {
        width: 100%;
      }
      to {
        width: 0;
      }
    }
  }
  
`

const Side = styled.div`
  width: 100%;
  height: 100px;
  color: #fff;
  font-size: 1rem;
  padding: 20px;
  letter-spacing: 3px;
  & > div:first-of-type {
    height: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    padding-bottom: 5px;
    border-bottom: 1px solid #fff;
    margin-bottom: 10px;
    opacity: 0;
    animation: 500ms ease-in forwards 0.4s introtop;
    @keyframes introtop {
      from {
        opacity: 0;
        transform: translateY(20px)
      }
      to {
        opacity: 1;
        transform: translateY(0)
      }
    }
  }

  & > div:last-of-type {
    height: 50%;
    display: flex;
    align-items: flex-start;
    border-top: 1px solid #D12386;
    padding-top: 5px;
    justify-content: flex-end;
    color: #D12386;
    opacity: 0;
    animation: 500ms ease-in forwards 0.6s introbottom;
    @keyframes introbottom {
      from {
        opacity: 0;
        transform: translateY(-20px)
      }
      to {
        opacity: 1;
        transform: translateY(0)
      }
    }
  }
`

const Div1 = styled.div`
  padding: 20px;
  letter-spacing: 0.1rem;
  font-weight: 300;
  opacity: 0;
  animation: 1000ms ease-in forwards Div1;
  @keyframes Div1 {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Div2 = styled.div`
  padding: 20px;
  letter-spacing: 0.1rem;
  font-weight: 300;
  opacity: 1;
  background: #222;
  p {
    opacity: 0;
    margin-top: 0;
    margin-bottom: 10px;
    animation: 1000ms ease-in forwards 0.2s Div2;
    @keyframes Div2 {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`

const Div = styled.div`
  padding: 40px 20px 20px 20px;
  width: 100%;
  letter-spacing: 0.1rem;
  font-weight: 300;
  margin: 0;
`

const Section = styled.section`
  padding: 40px 20px 20px 20px;
  width: 100%;
  letter-spacing: 0.1rem;
  font-weight: 300;
  margin: 0;
  p {
    opacity: 0;
  }
  h2 {
    opacity: 0;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 10px 0;
    opacity: 0;
  }
  ul {
    padding-left: 20px;
    opacity: 0;
  }
  ol {
    padding-left: 20px;
    list-style: circle;
    opacity: 0;
  }
  li { 
    margin-bottom: 10px;
  }
  &.scroll {
    & > h2, h3, p, ul, ol, img {
      animation: 500ms ease-in forwards 0.4s scrollUp;
      @keyframes scrollUp {
        from {
          opacity: 0;
          transform: translateY(20px)
        }
        to {
          opacity: 1;
          transform: translateY(0)
        }
      }
    }
  }
`

const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 1.7rem;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  color: #fff;
  margin: 0 0 30px 0;
  em {
    font-style: normal;
    color: #D12386
  }
`

const ContactNav = styled.nav`
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  background: #D12386;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  ul {
    justify-self: center;
    align-self: center;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 40px;
    width: 100px;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      margin: 0px;
      padding: 0px;
      width: 30px;
      color: #fff;
      height: 30px;
      border-radius: 15px;
      box-sizing:border-box ;
      cursor: pointer;
      &:hover {
        border: 0;
        background: #111;
      }
    }
  }
`

const MainMobile = props => {

  const [isScrollUp, setIsScrollUp] = useState(null)

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const scrollUp = () => {
      for (const el of sections) {
        if (!el.classList.contains('scroll')) {
          if (window.innerHeight > el.getBoundingClientRect().top) {
            el.classList.add('scroll');
          }
        }
      }
    }

    document.addEventListener('scroll', scrollUp)
  })

  return (
    <Container>
      <ContactNav>
        <ul>
          <li onClick={() => router.push('https://github.com/seungha-0709')}><GitHubIcon /></li>
          <li onClick={() => router.push('mailto:sh.kim.x928@gmail.com')}><AlternateEmailIcon /></li>
          <li onClick={() => router.push('https://www.linkedin.com/in/seungha-kim-142ba3228')}><LinkedInIcon /></li>
        </ul>
      </ContactNav>
      <Top> <em>H</em>ello<em>.</em></Top>
      <Side>
        <div>
          creative, enthusiastic</div>
        <div>frontend developer</div>
      </Side>

      <Div>
        <h2>Kim Seungha.</h2>
      </Div>
      <Div1>
        An analytical, innovative, experienced web frontend developer with excellent knowledge of web application development concepts with the ability to work collaboratively with IT and non-technical members of the development team.
      </Div1>

      <Div2>
        <p>Strong work principle and integrity with the development in ERP, accounting, and finance-related areas that deal with specific amounts, believe that accuracy and meticulousness in development are absolutely essential to secure users&apos; trust and improve the quality-of-service experience.</p>
        <p>Continual studies and self-development expected to gain deep knowledge about the web, covering both client/backend.</p>
      </Div2>

      <Section id="tech-skill" style={{ background: '#D12386' }}>
        <Subtitle><span style={{ color: '#fff' }}>Technical</span> <span style={{ color: '#111' }}>Skill</span></Subtitle>
        <p style={{ fontWeight: 500 }}>HTML5, CSS3, JavaScript, SCSS, <br />
          React, Vue.js, Next.js, Recoil, MobX, <br />
          GraphQL(Apollo-client), RethinkDB(NoSQL), Figma, Storybook</p>
      </Section>

      <Section>
        <Subtitle>Professional <em>Experience</em></Subtitle>
        <img src="/logo-white.svg" alt="erpper" width="80" /><br />
        <h3>Software Engineer<br />(Web Frontend Developer), Development Team</h3>
        <p>Currently contribute as a software engineer of the development team at Erpper Korea, a leading IT solution company. Refer to the below “Work Summary” for a detailed job description, tasks, and projects.</p>
      </Section>

      <Section>
        <Subtitle><em>Work</em> Summary</Subtitle>
        <h3>Erpper ERP Frontend Development</h3>
        <ul>
          <li>Headed the page development for account subject management, Jan. 2021</li>
          <ol>
            <li>Customized the react-beautiful-dnd library. </li>
            <li>Handled the development so that the order of each account subject and account group can be freely arranged by mouse drag and drop. </li>
          </ol>
          <li>Development of an automatic slip processing service screen for electronic tax invoices and electronic invoices, Feb. 2021</li>
          <li>Constructed spreadsheet screen through the customization of react-virtualization/ag-grid demo version library. </li>
          <li>Identified and resolved bugs and other issues related to frontend, May 2021 - Aug. 2021</li>
          <ol>
            <li>In pop-up and modal-centric services where data is updated through MobX, resolved the issue where updated is not reflected to other modals.  </li>
            <li>Limited the draggable area of pop-ups and modals inside the browser (customizing the react-draggable library) to prevent the problem of pop-ups and modals disappearing from the screen due to a user&apos;s mistake in dragging. </li>
            <li>Added and modified VAT automatic calculation function when entering purchase and sales numbers into a ledger. </li>
            <li>All other bugs related to the screen are resolved before the opening of the actual service, including input activation/disabling, CSS, and design modification under certain conditions. </li>
            <li>Removed anti-patterns and modified legacy code, such as unnecessary status values unrelated to rendering or managing props as status values from subcomponents and changed existing HOC-based React code to Hook-based. </li>
          </ol>
          <li>Headed the comparison of tax invoice data and development of service screen for entering tax invoice approval number, Sept. 2021</li>
        </ul>
        <h3>Erpper ERP Decimal Arithmetic Improvement Project</h3>
        <ul>
          <li>Modified the calculation part of the formula, which was based on the number type, to be a string-based calculation using the BigNumber.js library due to errors. </li>
          <li>Played a key role in the large-scale operation that modified the entire file constituting the program, and a team of three including myself works collaboratively to successfully complete the project. </li>
          <li>Modified the computational logic of the entire frontend-related part, and the GraphQL schema-related part of the backend part.</li>
        </ul>
        <h3>Aicy Report Frontend Development Projects</h3>
        <ul>
          <li>Took charge of SWC, Next.js, recoil-based client development environment configuration. </li>
          <li>Played a major role in the logic development that shows overall financial conditions, such as the statement of financial status and profit and loss statement, and 15 types of management analysis indicators such as cost analysis, employee productivity, and financial ratio through the parsed ledger data for each account (backend part, library used: Decimal.js).</li>
          <li>Headed the overall frontend development for Aicy services. </li>
          <li>Handled the design of UI components to be used across websites using libraries, such as Mui style overriding and react-number-format. </li>
          <li>Utilized CSS Grid, Flex, animation, and others for the development and publishing of Aicy company’s homepage. </li>
        </ul>
      </Section>

      <Section>
        <Subtitle>Miscellaneous<br />Work Experiences</Subtitle>
        <ul>
          <li>Served as a key part of the TEvalueWise team, including taking charge of PR, marketing, sales, and customer service, Jul. 2019 - Feb. 2020. </li>
          <li>Board of Audit and Inspection(Korean Government), National Level 7 Auditor, Feb. 2017 - Mar. 2019</li>
        </ul>
      </Section>

      <Section>
        <Subtitle>Education</Subtitle>
        <p>Ewha Womans University	<br /><span style={{ textAlign: 'right' }}>Mar. 2009 - Feb. 2014</span><br />
          Majored in Education. Minored in Business Administration. GPA: 4.13/4.50
        </p>
      </Section>

    </Container>
  )
}

export default MainMobile