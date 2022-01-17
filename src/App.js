import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import { useState } from 'react';
const pages = {
  intro: {
    koreanName: "학교소개",
    subpages: [
      "학교장 인사말",
      "교육 목표",
      "교육 과정",
      "학교 상징",
      "교직원 명부",
      "학생 명부",
      "대책위원회"
    ] 
  },
  enroll: {
    koreanName: "입학안내",
    subpages: [
      "입학요강",
      "입학관련공지",
      "제출서류 양식",
      "기출문제",
      "FAQ",
      "입학설명회"
    ] 
  },
  notice: {
    koreanName: "학사안내",
    subpages: [
      "학사일정",
      "공지사항",
      "가정통신문",
      "수상소식",
      "학교급식",
      "학교운영정보",
      "교수학습자료"
    ] 
  },
  community: {
    koreanName: "커뮤니티",
    subpages: [
      "학생회 게시판",
      "학생 게시판",
      "교직원 게시판",
      "학부모 게시판",
      "방문자 게시판"
    ] 
  },
  gallery: {
    koreanName: "갤러리",
    subpages: [
      "갤러리"
    ] 
  },
  fund: {
    koreanName: "발전기금",
    subpages: [
      "인사말",
      "기금현황",
      "기금용도",
      "기금 참여하기",
      "기부자 예우",
      "장학후원회"
    ] 
  },
};

function App() {
  const [page1, setPage1] = useState("home");
  const [page2, setPage2] = useState(0);

  console.log(page1);
  return (
    <div className="App">

      <Header page1={page1} setPage1={setPage1} setPage2={setPage2} pages={pages} />
      <Main page1={page1} page2={page2} setPage2={setPage2} pages={pages} />
      <Footer />
    </div>
  );
}

export default App;
