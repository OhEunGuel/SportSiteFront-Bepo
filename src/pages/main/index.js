import MainLayout from "../layout/MainLayout";
import MatchList from "../../components/MatchList";
import KBOLogoPath from "../../components/KBOLogoPath";
import {Link} from "react-router-dom";
import NewsLatest from "../../news/NewsLatest";
import styled from "styled-components";
import CurrentKbo from "../../components/CurrentGame/CurrentKbo";
import KLeagueLogoPath from "../../components/KLeagueLogoPath";
import Intro from '../layout/Intro'; 

function Main() {
  return (
      <MainLayout>
          <Intro/>
        <MainContainer>
            <FirstBox>
                <KBOLogoPath /> {/*팀 로고*/}
                <KLeagueLogoPath />
            </FirstBox>

            <SecondBox>
                <Link to="/chat" state={{ channelId : 1 }}>
                    KBO 토론방
                </Link>
                <p/>
                <Link to="/chat" state={{ channelId : 2 }}>
                    K-League 토론방
                </Link>
            </SecondBox>

            <ThirdBox>
              <p>article</p>
              <p>최신 뉴스</p>
              <Link to="/articles">
                <button>뉴스 더보기</button>
                <NewsLatest/>
              </Link>
            </ThirdBox>
      </MainContainer>
    </MainLayout>


  );
}

export default Main;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  border: white 1px dashed;
  flex-wrap: wrap; // flex 아이템을 여러 줄에 걸쳐 정렬하기 위해 flex-wrap 속성 추가
  gap: 10px;
`;

export const FirstBox = styled.div`
  width: 10%;
  background: #202027;
  padding: 40px;
  font-size: 20px;
  border: 1px solid #ffffff;
  text-align: center;
  border-radius: 40px;
  margin: auto;
`;

export const SecondBox = styled.div`
  width: 55%;
  height: 70vh;
  background: #ffffff;
  padding: 40px;
  font-size: 20px;
  border: 1px solid #ffffff;
  text-align: center;
  border-radius: 40px;
  margin: auto;
`;

export const ThirdBox = styled.div`
  width: 30%;
  height: 70vh;
  background: #ffffff;
  padding: 40px;
  font-size: 20px;
  border: 1px solid #ffffff;
  text-align: center;
  border-radius: 40px;
  margin: auto;
`;


// child 박스가 이해하기 어려울 수 있는데 위와 마찬가지로 1 / 2 / 3 / 4 box를 그대로 나타냅니다
// 추후 components들 각자 넣고 꾸미면 child로 다시 변경 예정
