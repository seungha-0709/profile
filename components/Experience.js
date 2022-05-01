import styled from "styled-components"
import Link from "next/link"


const Title = styled.h2`
  margin-top: 40px;
  padding-bottom: 10px;
  /* border-bottom: 1px solid #222; */
  text-transform: uppercase;
`

const Company = styled.h3`
  font-size: 18px;
  font-weight: 700;
`

const SubTitle = styled.h4`
  font-size: 16px;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  span {
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
    text-align: right;
  }
  @media screen and (max-width: 1200px) {
    display: block;
    span {
      display: block;
      width: 100%;
      text-align: right;
      margin: 0;
    }
  }
`

const NormalP = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  strong {
    font-weight: 700;
  }
`

const Miscellaneous = styled.p`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  span {
    font-size: 14px;
    font-weight: 600;
  }
  @media screen and (max-width: 1200px) {
    display: block;
    span {
      display: block;
      width: 100%;
      text-align: right;
      margin: 0;
    }
  }
`

const WorkListOl = styled.ol`
  list-style: disc;
  margin-bottom: 60px;
  padding-left: 20px;
  li {
    margin: 10px 0;
    font-size: 14px;
    font-weight: 600;
    a {
      text-decoration: none;
      color: #222;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      display: flex;
      justify-content: space-between;
      span {
        margin-left: 10px;
        text-align: right;
      }
    }
    & > ul {
      width: 80%;
      padding-left: 20px;
      li {
        font-weight: 400;
      }
    } 
  }
  @media screen and (max-width: 1200px) {
    padding-left: 8px;
    li {
      padding: 0;
      p {
        display: block;
        span {
          display: block;
          width: 100%;
          text-align: right;
          margin: 0;
        }
      }
      & > ul {
        width: 100%;
        padding-left: 4px;
      }
    }
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  padding: 60px;
  box-sizing: border-box;
  color: #222;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  @media screen and (max-width: 1200px) {
    display: block;
    padding: 0px;
  }
`

const Main = styled.main`
  grid-column: 1 / span 2;
  grid-row: 2;
`

const TechSpan = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background: #eee;
  border-radius: 4px;
  color: #222;
  font-size: 12px;
  margin: 4px;
  font-family: "Monaco";
`

const ExperienceDiv = styled.div`
  border-left: 1px solid #222;
  position: relative;
  padding-left: 40px;
  margin: 20px;
  &::before {
    content: '';
    position: absolute;
    top: -14px;
    left: -14px;
    width: 8px;
    height: 8px;
    border: 10px solid #fff;
    background: #222;
    box-sizing: content-box;
    border-radius: 50%;
  }
  @media screen and (max-width: 1200px) {
    border: 0;
    padding: 0;
    &::before {
      display: none;
    }
  }
`

const Aside = styled.aside`
  grid-column: 3 / span 1;
  grid-row: 2;
  border-left: 1px solid #222;
  padding-left: 40px;
  @media screen and (max-width: 1200px) {
    border: 0;
    padding: 0;
  }
`

const Summary = styled.div`
  grid-column: 1 / span 3;
  grid-row: 1;
`

const AsideDiv = styled.div`
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 1px solid #222;
`

const Experience = props => {

  return (
    <ContentWrapper>
      <Summary>
        <Title>summary</Title>
        <NormalP>
          Erpper Korea 소속 2년 차 웹 프런트엔드 개발자입니다. 대학 시절 경영학을 부전공으로 이수하며 또 7급 공무원 당시 공부했던 회계학 지식을 활용해
          ERP 프로그램 개발 회사에서 웹 화면 전반과 함께 회계 관련 로직을 개발하고 있습니다.
          UX/UI의 관점에서 <strong>사용자에게 편리한</strong> 화면을 구상하고 개발하기 위해 늘 고민하고자 합니다.
          또한 구체적인 <strong>금액</strong>을 다루는 ERP, 회계, 재무 관련 영역에서 개발을 처음 시작했기에, 사용자의 신뢰를 확보하고 서비스 경험의 질을 높이기 위해서는 개발에서의 정확성과 꼼꼼함이 절대적으로 중요하다는 신념을 갖고 있습니다.
          저 스스로의 개발 수준을 끌어올리기 위해 백엔드 단의 업무에도 관심이 많은 편이나, 이 부분은 아직 경험이나 배움이 부족합니다. 틈틈이 공부해서 클라이언트/백엔드 모두를 포괄하는 웹 전반에 대한 지식을 많이 쌓아갈 예정입니다.
        </NormalP>
      </Summary>

      <Main>
        <Title>Work Experience</Title>
        <ExperienceDiv>
          <SubTitle>Erpper ERP 프런트엔드 개발</SubTitle>
          <WorkListOl>
            <li><p>계정과목 관리 페이지 개발 <span>2021. 1.</span></p>
              <ul>
                <li>
                  react-beautiful-dnd 라이브러리 커스터마이징
                </li>
                <li>
                  각 계정과목과 계정 그룹의 순서를 마우스 드래그 앤 드롭으로 자유롭게 배열할 수 있도록 구현
                </li>
                <li><Link href="https://develop-dash-ui-by-vendor.dev.erpper.io/management/account">데모 버전 확인 	&#128279;</Link></li>
              </ul>
            </li>
            <li><p>전자세금계산서, 전자계산서 자동전표처리 서비스 화면 개발 <span>2021. 2.</span></p></li>
            <li><p>react-virtualization / ag-grid 데모 버전 라이브러리 커스터마이징을 통한 스프레드시트 화면 구현 - 작업 중 프로젝트 중단</p></li>
            <li><p>프런트엔드와 관련한 버그, 이슈 해결 <span>2021. 5. ~ 2021. 8.</span></p>
              <ul>
                <li>팝업, 모달 중심으로 이루어진 서비스에서 Mobx를 활용해 데이터가 업데이트 되었을 때 다른 모달에서 업데이트가 반영되지 않는 문제 해결</li>
                <li>팝업, 모달의 드래그 가능 영역을 브라우저 내부 안으로 제한(react-draggable 라이브러리 커스터마이징)하여 사용자의 드래그 실수로 팝업, 모달이 화면에서 사라지는 문제 방지</li>
                <li>매입, 매출 대장 입력 시 VAT 자동 계산 기능 추가 및 수정</li>
                <li>그 외 특정 조건에 따른 인풋 활성/비활성화, CSS, 디자인 수정 등 실 서비스 오픈(8월) 전까지 화면과 관련된 버그 전부 해결</li>
                <li>렌더링과 관련 없는 불필요한 상탯값 관리 혹은 props를 하위 컴포넌트에서 상탯값으로 관리하는 등의 안티 패턴 제거 및 레거시 코드 수정, 기존 HOC 기반의 React 코드를 Hook 기반으로 변경</li>
              </ul>
            </li>
            <li><p>세금계산서 자료 비교, 세금계산서 승인번호 입력 서비스 화면 개발 <span>2021. 9.</span></p></li>
          </WorkListOl>
        </ExperienceDiv>

        <ExperienceDiv>
          <SubTitle>Erpper ERP 소숫점 연산 개선 프로젝트 <span>2021. 9. ~ 2021. 11.</span></SubTitle>
          <WorkListOl>
            <li>기존에 Number 타입 기반으로 되어 있던 수식 계산 부분을 오차 등의 이유로 BigNumber.js 라이브러리를 사용하여 문자열 기반의 계산이 되도록 수정</li>
            <li>프로그램을 이루는 파일 전체를 수정하는 대규모 작업으로 본인 포함 세 명의 팀이 협업하여 작업</li>
            <li>프런트엔드 관련 부분 전체, 백엔드 파트 중 graphQL schema 관련 부분의 계산 로직 수정</li>
          </WorkListOl>
        </ExperienceDiv>

        <ExperienceDiv>
          <SubTitle>Aicy Report 부문 프런트엔드 개발 <span>2022. 2. ~ 2022. 5.</span></SubTitle>
          <WorkListOl>
            <li>SWC, Next.js, recoil 기반 클라이언트 개발 환경 구성</li>
            <li>파싱된 계정별 원장 데이터를 통해 재무상태표, 손익계산서 등 재무제표 전반과 비용 분석, 직원 생산성, 재무 비율 등 15종의 경영 분석 지표를 보여주는 로직 개발<br />(백엔드 파트, 사용 라이브러리: Decimal.js)</li>
            <li>Aicy 서비스 관련 프런트엔드 전체 개발</li>
            <li>Mui 스타일 오버라이딩, react-number-format 등의 라이브러리를 활용하여 웹 사이트 전반에 사용될 UI 컴포넌트 설계</li>
            <li>CSS Grid, Flex, Animation 등을 활용한 Aicy 회사 소개 홈페이지 퍼블리싱</li>
          </WorkListOl>
        </ExperienceDiv>

        <Company>Miscellaneous</Company>
        <Miscellaneous>TEvalueWise 운영팀 (담당 업무: PR, 마케팅, 영업, CS) <span>2019. 7. ~ 2020. 2.</span></Miscellaneous>
        <Miscellaneous>감사원 국가직 7급 감사주사보 (국방감사단 제1과, 재정경제감사국 제2과) <span>2017. 2. ~ 2019. 3.</span></Miscellaneous>
      </Main>

      <Aside>
        <AsideDiv>
          <Title>Tech Skill</Title>
          <div>
            <TechSpan>HTML5</TechSpan>
            <TechSpan>CSS3</TechSpan>
            <TechSpan>Javascript</TechSpan>
            <TechSpan>SCSS</TechSpan>
            <TechSpan>React</TechSpan>
            <TechSpan>Vue.js</TechSpan>
            <TechSpan>Next.js</TechSpan>
            <TechSpan>Gatsby.js</TechSpan>
            <TechSpan>Recoil</TechSpan>
            <TechSpan>Mobx</TechSpan>
            <TechSpan>GraphQL(Apollo-client)</TechSpan>
            <TechSpan>RethinkDB(NoSQL)</TechSpan>
            <TechSpan>Figma</TechSpan>
            <TechSpan>Storybook</TechSpan>
            <Miscellaneous>(그 외 다수의 리액트 라이브러리 커스터마이징 경험 보유)</Miscellaneous>
          </div>
        </AsideDiv>
        <AsideDiv>
          <Title>Education</Title>
          <Miscellaneous>한국방송통신대학교<br />(컴퓨터과학 전공, 3학년 편입, 현재 재학 중) <br />2021. 3. ~ </Miscellaneous>
          <Miscellaneous>이화여자대학교<br />(교육학 학사, 경영학 부전공)<br />GPA: 4.13 / 4.5 <br />2009. 3. ~ 2014. 2.</Miscellaneous>
          <Miscellaneous>상산고등학교 (인문계열) <br />2006. 3. ~ 2009. 2.</Miscellaneous>
        </AsideDiv>
        {/* <AsideDiv>
          <Title>Etc.</Title>
          <Miscellaneous>애플 팟캐스트 '어느 프론트엔드 개발자 성장기' 운영 중</Miscellaneous>
        </AsideDiv> */}
      </Aside>


    </ContentWrapper>
  )
}

export default Experience