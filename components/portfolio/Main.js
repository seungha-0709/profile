import { useState, useEffect } from "react"
import styled from "styled-components"
import Button from "./Button"
import { useRouter } from "next/router"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
  background: #111;
  /* border: 100px solid #111; */
  /* box-sizing: border-box; */
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 1fr);
  font-family: Averta Std PE, sans-serif;
`

// const Floating = styled.div`

//   animation: 2s ease-in-out infinite alternate moving;
//   @keyframes moving {
//     from {
//       transform: translate(0, 0);
//     }
//     to {
//       transform: translate(0, 11px);
//     }
//   }
// `

const Hello = styled.h1.attrs(props => ({
}))`
  font-size: 15rem;
  font-weight: 900;
  grid-column: 7 / span 4;
  grid-row: 3 / span 2;
  color: #fff;
  margin: 0;
  align-self: flex-end;
  line-height: 14rem;
  position: relative;
  em {
    color: #D12386;
    font-style: normal;
  }
  &::before {
    content: '';
    width: 600px;
    height: 100%;
    background-color: #111;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${props => props.section === 0 ? '1000ms ease-out forwards hello' : '1000ms ease-out forwards helloend'};
    @keyframes hello {
      from {
        width: 100%;
      }
      to {
        width: 0px;
      }
    }
    @keyframes helloend {
      from {
        width: 0;
      }
      to {
        width: 600px;
      }
    }
  }
`
const HelloIntro = styled.div.attrs(props => ({
}))`
  font-size: 3rem;
  font-weight: 500;
  grid-column: 7 / span 4;
  grid-row: 5 / span 1;
  color: #fff;
  margin: 0 0 0 20px;
  align-self: flex-start;
  width: ${props => props.section === 0 ? '0%' : '100%'};
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  animation: ${props => props.section === 0 ? '1000ms ease-out forwards 0.2s hellointro' : '1000ms ease-out forwards 0.2s hellointroend'};
    @keyframes hellointro {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    @keyframes hellointroend {
      from {
        width: 100%;
      }
      to {
        width: 0;
      }
    }
`

const Objective = styled.div.attrs(props => ({
}))`
  grid-column: 2 / span 5;
  grid-row: 6 / span 2;
  font-weight: 300;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  color: #fff;
  opacity:  ${props => props.section === 0 ? 0 : 1};
    animation: ${props => props.section === 0 ? '500ms ease-in forwards 0.3s objective' : '500ms ease-in forwards 0.6s objectiveend'};
    @keyframes objective {
      from {
        opacity: 0;
        transform: translateY(-20px)
      }
      to {
        opacity: 1;
        transform: translateY(0)
      }
    }
    @keyframes objectiveend {
      from {
        opacity: 1;
        transform: translateY(0);
        
      }
      to {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
`

const SlideNav = styled.nav`
  width: 100%;
  height: 100%;
  grid-column: 1 / span 1 ;
  grid-row: 4 / span 2;
  display:flex;
  justify-content: flex-end;
  ul {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 40px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    li {
      margin: 0px;
      padding: 0px;
      width: 24px;
      height: 24px;
      border-radius: 12px;
      border: 1px solid #fff;
      box-sizing:border-box ;
      cursor: pointer;
      &:hover {
        border: 0;
        background: #D12386;
      }
    }
  }
  @media screen and (min-width: 1920px) {
    justify-content: center;
  }
`

const Side = styled.div.attrs(props => ({
}))`
  grid-column: 2 / span 5;
  grid-row: 4 / span 2;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 1.5rem;
  letter-spacing: 5px;
  & > div:first-of-type {
    height: 50%;
    /* background: #aaa; */
    display: flex;
    align-items: flex-end;
    padding-bottom: 5px;
    border-bottom: 1px solid #fff;
    margin-bottom: 10px;
    opacity: ${props => props.section === 0 ? 0 : 1};
    animation: ${props => props.section === 0 ? '500ms ease-in forwards 0.4s introtop' : '500ms ease-in forwards 0.4s introtopend'};
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
  @keyframes introtopend {
      from {
        opacity: 1;
        transform: translateY(0)
      }
      to {
        opacity: 0;
        transform: translateY(20px) 
      }
    }
  & > div:last-of-type {
    height: 50%;
    /* background: #ccc; */
    display: flex;
    align-items: flex-start;
    border-top: 1px solid #D12386;
    padding-top: 5px;
    justify-content: flex-end;
    color: #D12386;
    opacity:  ${props => props.section === 0 ? 0 : 1};
    animation: ${props => props.section === 0 ? '500ms ease-in forwards 0.6s introbottom' : '500ms ease-in forwards 0.6s introbottomend'};
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
    @keyframes introbottomend {
      from {
        opacity: 1;
        transform: translateY(0);
        
      }
      to {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
  }
`
const SubTitle1 = styled.h1.attrs(props => ({
}))`
  display: ${props => props.section !== 1 ? 'none' : 'block'};
  grid-column: 2 / span 8;
  grid-row: 3 / span 1;
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  line-height: 3rem;
  letter-spacing: 0.2rem;
  align-self: center;
  opacity:  ${props => props.section === 1 ? 0 : 1};
  em {
    font-style: normal;
    color: #D12386;
  }
  animation: ${props => props.section === 1 ? '500ms ease-in forwards 0.8s subtitle' : 'none'};
  @keyframes subtitle {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }
  @keyframes subtitleend {
    from {
      opacity: 1;
      transform: translateY(0px);
    }
    to {
      opacity: 0;
      transform: translateY(20px)
    }
  }
`

const SubTitle2 = styled.h1.attrs(props => ({
}))`
  display: ${props => props.section !== 2 ? 'none' : 'block'};
  grid-column: 5 / span 7;
  grid-row: 2 / span 1;
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  line-height: 3rem;
  letter-spacing: 0.2rem;
  align-self: center;
  opacity:  ${props => props.section === 2 ? 0 : 1};
  em {
    font-style: normal;
    color: #D12386;
  }
  animation: ${props => props.section === 2 ? '500ms ease-in forwards 0.8s subtitle2' : 'none'};
  @keyframes subtitle2 {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }
  @keyframes subtitle2end {
    from {
      opacity: 1;
      transform: translateY(0px);
    }
    to {
      opacity: 0;
      transform: translateY(20px)
    }
  }
`
const Colorbox0 = styled.div.attrs(props => ({
}))`
  grid-column: 12 / span 1;
  grid-row: 1 / span 12;
  width: 0;
  height: 100vh;
  background: #D12386;
  animation: ${props => props.section === 0 ? '1000ms ease-in-out forwards 0.2s colorbox0' : '1000ms ease-in forwards colorbox0end'};
  @keyframes colorbox0 {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes colorbox0end {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
`

const Colorbox1 = styled.div.attrs(props => ({
}))`
  /* display: ${props => props.section !== 1 ? 'none' : 'block'}; */
  grid-column: 10 / span 3;
  grid-row: 3 / span 4;
  width: 100%;
  height: 100%;
  background: #D12386;
  position: relative;
  &::before {
    content: '';
    display: block;
    z-index: 10;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #111;
    animation: ${props => props.section === 1 ? '500ms ease-in forwards 0.2s colorbox1' : 'none'};
    @keyframes colorbox1 {
      from {
        width: 100%;
      }
      to {
        width: 0
      }
    }
    @keyframes colorbox1end {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  }
  
`

const Colorbox2 = styled.div.attrs(props => ({
}))`
  display: ${props => props.section !== 2 ? 'none' : 'block'};
  grid-column: 2 / span 3;
  grid-row: 1 / span 12;
  width: 100%;
  height: 0;
  background: #D12386;
  animation: ${props => props.section === 2 ? '500ms ease-in forwards 0.6s colorbox2' : '500ms ease-in forwards 1s colorbox2end'};
  @keyframes colorbox2 {
    from {
      height: 0;
    }
    to {
      height: 100vh;
    }
  }
  @keyframes colorbox2end {
    from {
      height: 100vh;
    }
    to {
      height: 0;
    }
  }
  
`

const Colorbox3 = styled.div.attrs(props => ({
}))`
  display: ${props => props.section !== 3 ? 'none' : 'block'};
  grid-column: 1 / span 10;
  grid-row: 7 / span 11;
  width: 0;
  height: 400px;
  background: #D12386;
  animation: ${props => props.section === 3 ? '1000ms ease-in forwards 0.6s colorbox3' : '1000ms ease-in forwards 1s colorbox3end'};
  @keyframes colorbox3 {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes colorbox3end {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
  
`

const TechSkill = styled.div.attrs(props => ({
}))`
  grid-column: 2 / span 5;
  grid-row: 4 / span 3;
  /* display: ${props => props.section !== 1 ? 'none' : 'block'}; */
  transition: all 1s;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  font-weight: 400;
  color: #f8f8f8;
  opacity:  ${props => props.section === 1 ? 0 : 1};
  animation: ${props => props.section === 1 ? '500ms ease-in forwards 1s teckskill' : '500ms ease-in forwards 1s teckskillend'};
  @keyframes teckskill {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }
  @keyframes teckskillend {
    from {
      opacity: 1;
      transform: translateY(0px);
    }
    to {
      opacity: 0;
      transform: translateY(20px)
    }
  }
`

const WorkSummary = styled.div.attrs(props => ({
}))`
  color: #fff;
  grid-column: 5 / span 7;
  grid-row: 3 / span 5;
  position: relative;
  z-index: 10;
  opacity:  ${props => props.section === 2 ? 0 : 1};
  animation: ${props => props.section === 2 ? '1000ms ease-in forwards 0.8s worksummary' : 'none'};
  @keyframes worksummary {
    from {
      opacity: 0;
      transform: translateY(-20px)
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }
`

const Main = props => {

  const router = useRouter()
  const [section, setSection] = useState(null)

  useEffect(() => {
    setSection(0)
  }, [])

  return (
    <div className="container">
      <Container>
        <SlideNav>
          <ul>
            <li onClick={() => setSection(0)}></li>
            <li onClick={() => setSection(1)}></li>
            <li onClick={() => setSection(2)}></li>
            <li onClick={() => setSection(3)}></li>
          </ul>
        </SlideNav>


        <Side section={section}>
          <div>creative, enthusiastic</div>
          <div>frontend developer</div>
        </Side>
        <Hello section={section}><em>H</em>ello<em>.</em></Hello>
        <HelloIntro section={section}>
          I am Kim Seungha.
          <Button style={{ marginTop: 40 }}>My Resume</Button>
        </HelloIntro>
        <Objective section={section}>
          An analytical, innovative, experienced web frontend developer with excellent knowledge of web application development concepts with the ability to work collaboratively with IT and non-technical members of the development team.
        </Objective>
        <Colorbox0 section={section} />

        {section === 1 && <SubTitle1 section={section}><em>Technical</em> Skill</SubTitle1>}
        {section === 1 && <TechSkill section={section}>
          HTML5, CSS3, JavaScript, SCSS, React, Vue.js, Next.js, Recoil, MobX, GraphQL(Apollo-client), RethinkDB(NoSQL), Figma, Storybook

        </TechSkill>}

        {section === 1 && <SubTitle1 style={{ gridRow: '5 / span 1' }} section={section}>Professional <em>Experience</em></SubTitle1>}
        {section === 1 && <TechSkill style={{ gridRow: '6 / span 3' }} section={section}>

          <p><strong>Software Engineer(Web Frontend Developer), Development Team</strong></p>
          <p>Currently contribute as a software engineer of the development team at Erpper Korea, a leading IT solution company. Refer to the below “Work Summary” for a detailed job description, tasks, and projects. </p>


        </TechSkill>}

        {section === 1 && <Colorbox1 section={section} />}

        {section === 2 && <Colorbox2 section={section} />}
        {section === 2 && <SubTitle2 section={section}><em>Work</em> Summary</SubTitle2>}
        {section === 2 && <WorkSummary section={section}>
          <h3>Erpper ERP Frontend Development</h3>
          <ul>
            <li>Headed the page development for account subject management, Jan. 2021</li>
            <ul>
              <li>Customized the react-beautiful-dnd library. </li>
              <li>Handled the development so that the order of each account subject and account group can be freely arranged by mouse drag and drop. </li>
              <li>Go to demo</li>
            </ul>
            <li>Development of an automatic slip processing service screen for electronic tax invoices and electronic invoices, Feb. 2021</li>
            <li>Constructed spreadsheet screen through the customization of react-virtualization/ag-grid demo version library. </li>
            <li>Identified and resolved bugs and other issues related to frontend, May 2021 - Aug. 2021</li>
            <ul>
              <li>n pop-up and modal-centric services where data is updated through MobX, resolved the issue where updated is not reflected to other modals.  </li>
              <li>Limited the draggable area of pop-ups and modals inside the browser (customizing the react-draggable library) to prevent the problem of pop-ups and modals disappearing from the screen due to a user's mistake in dragging. </li>
              <li>Added and modified VAT automatic calculation function when entering purchase and sales numbers into a ledger. </li>
              <li>All other bugs related to the screen are resolved before the opening of the actual service, including input activation/disabling, CSS, and design modification under certain conditions. </li>
              <li>Removed anti-patterns and modified legacy code, such as unnecessary status values unrelated to rendering or managing props as status values from subcomponents and changed existing HOC-based React code to Hook-based. </li>
              <li>Headed the comparison of tax invoice data and development of service screen for entering tax invoice approval number, Sept. 2021</li>
            </ul>
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
        </WorkSummary>}


        {section === 3 && <Colorbox3 section={section} />}

      </Container>
    </div>
  )
}

export default Main