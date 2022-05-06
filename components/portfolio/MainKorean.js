import { useState, useEffect } from "react"
import styled from "styled-components"
import Button from "./Button"
import Link from "next/link"
import { useRouter } from "next/router"
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  color: #fff;
  font-family: Spoqa Han Sans;
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

const Qualification = styled.div.attrs(props => ({
}))`
  grid-column: 2 /span 8;
  grid-row: 2 / span 2;
  color: #999;
  font-weight: 300;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  font-family: Spoqa Han Sans;
  opacity:  ${props => props.section === 1 ? 0 : 1};
  animation: ${props => props.section === 1 ? '500ms ease-in forwards 0.3s qualification' : 'none'};
  @keyframes qualification {
    from {
      opacity: 0;
      transform: translateY(20px)
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
      transform: translateY(20px);
    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin-bottom: 10px;
      padding: 0;
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
    list-style: none;
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
  font-size: 3rem;
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
  font-family: Spoqa Han Sans;
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
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  line-height: 1.5;
  grid-column: 5 / span 6;
  grid-row: 3 / span 4;
  overflow-y: scroll;
  position: relative;
  z-index: 10;
  padding-bottom: 100px;
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
  ul {
    font-weight: 400;
  }
  ol {
    list-style: circle;
    li {
      font-weight: 300;
    }
  }
  li {
    margin-bottom: 10px;
    font-family: Spoqa Han Sans;
    font-size: 1rem;
    font-weight: 400;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #D12386;
    border-radius: 10px;
    background-clip: padding-box;
  }
  &::-webkit-scrollbar-track {
    background-color: #aaa;
    border-radius: 10px;
  }
`

const WorkSummaryBg = styled.div.attrs(props => ({
}))`
  grid-column: 5 / span 6;
  grid-row: 3 / span 4;
  z-index: 10;
  align-self: flex-end;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-image: linear-gradient(to top, rgba(17,17,17,1), rgba(17,17,17,0));
`

const SubTitle3 = styled.h2.attrs(props => ({
}))`
  display: ${props => props.section !== 3 ? 'none' : 'block'};
  grid-column: 2 / span 10;
  grid-row: 2 / span 1;
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  line-height: 3rem;
  letter-spacing: 0.2rem;
  align-self: center;
  opacity:  ${props => props.section === 3 ? 0 : 1};
  em {
    font-style: normal;
    color: #D12386;
  }
  animation: ${props => props.section === 3 ? '500ms ease-in forwards 0.8s subtitle3' : 'none'};
  @keyframes subtitle3 {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }
  @keyframes subtitle3end {
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
const Miscellaneous = styled.div.attrs(props => ({
}))`
  grid-column: 2 / span 5;
  grid-row: 3 / span 2;
  /* display: ${props => props.section !== 1 ? 'none' : 'block'}; */
  transition: all 1s;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  font-weight: 400;
  color: #f8f8f8;
  opacity:  ${props => props.section === 3 ? 0 : 1};
  animation: ${props => props.section === 3 ? '500ms ease-in forwards 1s miscellaneous' : '500ms ease-in forwards 1s miscellaneousend'};
  @keyframes miscellaneous {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }
  @keyframes miscellaneousend {
    from {
      opacity: 1;
      transform: translateY(0px);
    }
    to {
      opacity: 0;
      transform: translateY(20px)
    }
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 10px;
    }
  }
`

const Section3 = styled.div.attrs(props => ({
}))`
  grid-column: 2 / span 5;
  grid-row: 6 / span 2;
  /* display: ${props => props.section !== 1 ? 'none' : 'block'}; */
  transition: all 1s;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  font-weight: 400;
  color: #f8f8f8;
  opacity:  ${props => props.section === 3 ? 0 : 1};
  animation: ${props => props.section === 3 ? '500ms ease-in forwards 1s section3' : '500ms ease-in forwards 1s section3end'};
  @keyframes section3 {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }
  @keyframes section3end {
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

const ContactNav = styled.nav`
  grid-column: 2 / span 3;
  grid-row: 1 / span 1;
  width: 200px;
  color: #fff;
  height: 100%;
  display:flex;
  position: relative;
  z-index: 1000;
  ul {
    justify-self: center;
    align-self: center;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 30px;
    width: 100%;
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
      height: 30px;
      border-radius: 15px;
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

        <ContactNav>
          <ul>
            <li onClick={() => router.push('https://github.com/seungha-0709')}><GitHubIcon /></li>
            <li><AlternateEmailIcon /></li>
            <li><LinkedInIcon /></li>
          </ul>
        </ContactNav>


        <Side section={section}>
          <div>creative, enthusiastic</div>
          <div>frontend developer</div>
        </Side>
        <Hello section={section}><em>H</em>ello<em>.</em></Hello>
        <HelloIntro section={section}>
          I am Kim Seungha.
        </HelloIntro>
        <Objective section={section}>
          Erpper Korea 소속 2년 차 웹 프런트엔드 개발자입니다.<br />
          대학 시절 경영학을 부전공으로 이수하며 또 7급 공무원 당시 공부했던 회계학 지식을 활용해<br />
          ERP 프로그램 개발 회사에서 웹 화면 전반과 함께 회계 관련 로직을 개발하고 있습니다.
        </Objective>

        <Colorbox0 section={section} />

        {section === 1 && (
          <Qualification section={section}>
            <ul>
              <li>UX/UI의 관점에서 <strong>사용자에게 편리한</strong> 화면을 구상하고 개발하기 위해 늘 고민하고자 합니다.</li>
              <li>또한 구체적인 <strong>금액</strong>을 다루는 ERP, 회계, 재무 관련 영역에서 개발을 처음 시작했기에, <br />
                사용자의 신뢰를 확보하고 서비스 경험의 질을 높이기 위해서는 개발에서의 정확성과 꼼꼼함이 절대적으로 중요하다는 신념을 갖고 있습니다.</li>
              <li>저 스스로의 개발 수준을 끌어올리기 위해 백엔드 단의 업무에도 관심이 많은 편이나, <br />
                이 부분은 아직 경험이나 배움이 부족합니다. 틈틈이 공부해서 클라이언트/백엔드 모두를 포괄하는 웹 전반에 대한 지식을 많이 쌓아갈 예정입니다.</li>
            </ul>
          </Qualification>
        )}
        {section === 1 && <SubTitle1 section={section}><em>Technical</em> Skill</SubTitle1>}
        {section === 1 && <TechSkill section={section}>
          HTML5, CSS3, JavaScript, SCSS, React, Vue.js, Next.js, Recoil, MobX, GraphQL(Apollo-client), RethinkDB(NoSQL), Figma, Storybook
        </TechSkill>}
        {section === 1 && <SubTitle1 style={{ gridRow: '5 / span 1' }} section={section}>Professional <em>Experience</em></SubTitle1>}
        {section === 1 && <TechSkill style={{ gridRow: '6 / span 3' }} section={section}>
          <img src="/logo-white.svg" alt="erpper" width="80" /><br />
          <p>소프트웨어 엔지니어(웹 프런트엔드 개발자), 개발본부 (2020. 12. ~ 현재)</p>
        </TechSkill>}
        {section === 1 && <Colorbox1 section={section} />}

        {section === 2 && <Colorbox2 section={section} />}
        {section === 2 && <SubTitle2 section={section}><em>Work</em> Summary</SubTitle2>}
        {section === 2 && <WorkSummary section={section}>
          <h3>Erpper ERP 프런트엔드 개발</h3>
          <ul>
            <li><p>계정과목 관리 페이지 개발 <span>2021. 1.</span></p>
              <ol>
                <li>
                  react-beautiful-dnd 라이브러리 커스터마이징
                </li>
                <li>
                  각 계정과목과 계정 그룹의 순서를 마우스 드래그 앤 드롭으로 자유롭게 배열할 수 있도록 구현
                </li>
                <li><Link href="https://develop-dash-ui-by-vendor.dev.erpper.io/management/account">데모 버전 확인 	&#128279;</Link></li>
              </ol>
            </li>
            <li><p>전자세금계산서, 전자계산서 자동전표처리 서비스 화면 개발 <span>2021. 2.</span></p></li>
            <li><p>react-virtualization / ag-grid 데모 버전 라이브러리 커스터마이징을 통한 스프레드시트 화면 구현 - 작업 중 프로젝트 중단</p></li>
            <li><p>프런트엔드와 관련한 버그, 이슈 해결 <span>2021. 5. ~ 2021. 8.</span></p>
              <ol>
                <li>팝업, 모달 중심으로 이루어진 서비스에서 Mobx를 활용해 데이터가 업데이트 되었을 때 다른 모달에서 업데이트가 반영되지 않는 문제 해결</li>
                <li>팝업, 모달의 드래그 가능 영역을 브라우저 내부 안으로 제한(react-draggable 라이브러리 커스터마이징)하여 사용자의 드래그 실수로 팝업, 모달이 화면에서 사라지는 문제 방지</li>
                <li>매입, 매출 대장 입력 시 VAT 자동 계산 기능 추가 및 수정</li>
                <li>그 외 특정 조건에 따른 인풋 활성/비활성화, CSS, 디자인 수정 등 실 서비스 오픈(8월) 전까지 화면과 관련된 버그 전부 해결</li>
                <li>렌더링과 관련 없는 불필요한 상탯값 관리 혹은 props를 하위 컴포넌트에서 상탯값으로 관리하는 등의 안티 패턴 제거 및 레거시 코드 수정, 기존 HOC 기반의 React 코드를 Hook 기반으로 변경</li>
              </ol>
            </li>
            <li><p>세금계산서 자료 비교, 세금계산서 승인번호 입력 서비스 화면 개발 <span>2021. 9.</span></p></li>
          </ul>

          <h3>Erpper ERP 소숫점 연산 개선 프로젝트 <span>2021. 9. ~ 2021. 11.</span></h3>
          <ul>
            <li>기존에 Number 타입 기반으로 되어 있던 수식 계산 부분을 오차 등의 이유로 BigNumber.js 라이브러리를 사용하여 문자열 기반의 계산이 되도록 수정</li>
            <li>프로그램을 이루는 파일 전체를 수정하는 대규모 작업으로 본인 포함 세 명의 팀이 협업하여 작업</li>
            <li>프런트엔드 관련 부분 전체, 백엔드 파트 중 graphQL schema 관련 부분의 계산 로직 수정</li>
          </ul>

          <h3>Aicy Report 부문 프런트엔드 개발 <span>2022. 2. ~ 2022. 5.</span></h3>
          <ul>
            <li>SWC, Next.js, recoil 기반 클라이언트 개발 환경 구성</li>
            <li>파싱된 계정별 원장 데이터를 통해 재무상태표, 손익계산서 등 재무제표 전반과 비용 분석, 직원 생산성, 재무 비율 등 15종의 경영 분석 지표를 보여주는 로직 개발<br />(백엔드 파트, 사용 라이브러리: Decimal.js)</li>
            <li>Aicy 서비스 관련 프런트엔드 전체 개발</li>
            <li>Mui 스타일 오버라이딩, react-number-format 등의 라이브러리를 활용하여 웹 사이트 전반에 사용될 UI 컴포넌트 설계</li>
            <li>CSS Grid, Flex, Animation 등을 활용한 Aicy 회사 소개 홈페이지 퍼블리싱</li>
          </ul>
        </WorkSummary>}
        {section === 2 && <WorkSummaryBg section={section}></WorkSummaryBg>}


        {section === 3 && <Colorbox3 section={section} />}
        {section === 3 && <SubTitle3 section={section}>Miscellaneous <em>Work Experiences</em></SubTitle3>}
        {section === 3 && <Miscellaneous section={section}>
          <ul>
            <li>TEvalueWise 운영팀 (담당 업무: PR, 마케팅, 영업, CS) <span>2019. 7. ~ 2020. 2.</span></li>
            <li>감사원 국가직 7급 감사주사보 (국방감사단 제1과, 재정경제감사국 제2과) <span>2017. 2. ~ 2019. 3.</span></li>
          </ul>
        </Miscellaneous>}
        {section === 3 && <SubTitle3 style={{ gridRow: '5 / span 1' }} section={section}>Education</SubTitle3>}
        {section === 3 && <Section3 style={{ gridRow: '6 / span 1' }} section={section}>
          <p>이화여자대학교 (교육학 학사, 경영학 부전공) 2009. 3. ~ 2014. 2.<br />GPA: 4.13 / 4.5</p>
          <p>상산고등학교 (인문계열) 2006. 3. ~ 2009. 2.</p>
        </Section3>}

      </Container>
    </div>
  )
}

export default Main