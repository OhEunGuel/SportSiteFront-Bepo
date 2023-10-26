import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  background-color: #202027;
  display: flex;
  flex-direction: column;
  align-items: center; /* 또는 다른 정렬 방법을 선택하세요 */
`;

const Content = styled.div`
  width: 100%;
  height: 100%; /* 60% 대신 100%로 변경 */
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  display: block;
  margin-top: 70px; /*고정메뉴 높이*/
`;
const HeaderContainer = styled.header`
  position: fixed;
  background-color: #333333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MainLayout = ({ children }) => {
  return (
    <Container>
        <HeaderContainer>
            <Header />
        </HeaderContainer>
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default MainLayout;
