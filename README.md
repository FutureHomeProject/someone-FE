## somehou 시작하며
### 01) 우리 프로젝트를 시작하며 필요한 라이브러리 

- package
  #### 리액트 기본설정을 위한 라이브러리
  - yarn add react-router-dom : 페이지끼리 연결시킬 때!        v
  - yarn add redux react-redux : 리덕스를 리액트        v
  - yarn add @reduxjs/toolkit: 리덕스를 편하게 쓰기 위한 패키지      v

  #### 리액트 스타일을 위한 라이브러리
  - yarn add styled-components : 같은 영역마다 스타일 값을 줄 수 있는 패키지!     v
  - yarn add react-icons :       v

  #### 리액트 비동기 통신을 위한 라이브러리 
  - yarn add axios: http를 이용해서 서버와 통신(데이터 주고받기)하기 위해 사용하는 패키지      v
  - yarn add json-server: 간단한 DB와 API 서버를 생성해주는 패키지.      v
  - **yarn json-server --watch db.json --port (X00X)  
  - yarn add universal-cookie : 

  #### 추가로 필요한 라이브러리
  - yarn dev :Redux DevTools를 이용하여 좀 더 쉽게 여러 상태를 비롯한 모니터링 가능
  - PORT=3002 yarn start : 일회성으로 포트 변경해서 yarn start하기

 ### 02)Router - Page 폴더(인용컴포넌트)
  - path: “/”	           Main.jsx(MapDiv.jsx)                 : 메인페이지로 상품설명(무한스크롤)
  - path: “/detail/:id”  MainDetail.jsx(Products.jsx)         : 메인페이지 상품의 상세페이지
  - path: “/house”	     House.jsx(MapDiv.jsx)                : 집들이 게시물 페이지로 집설명 및 무한스크롤
  - path: “/house/write” HouseWrite.jsx(CommenInput.jsx)      : 집들이 게시물 작성 페이지
  - path: “/houst/:id” 	 HouseDetail.jsx(HouseDetailDiv.jsx)  : 집들이 게시물 상세페이지 
  - path: “/signin”	     Singin.jsx(CommenInput.jsx)          : 로그인 페이지 
  - path: “/signup”	     Signup.jsx(CommenInput.jsx)          : 회원가입 페이지
  - path: "/scrap"       Scrap.jsx                             : 스크랩 페이지 
  - path: "/error"       Error.jsx                            : 에러페이지에 대해서 알아보기 
    (1) https://velog.io/@dev_kdh/42gg-에러-페이지-구현하기

### 03) 리덕스 중앙상태관리소
  - redux
    - config : configStore.jsx 
    - modules
      - productsSlice.jsx
      - houseSlice.jsx
      - houseCommentSlice.jsx
      - scrapSlice.jsx

  #### 04) 작업일지 
  - (월요일) 컴포넌트 완료
  - (화요일) 서버통신/에러처리 
  - (수요일) 무한스크롤
  - (목요일) CSS 마무리

  #### 05) 03월 24일 - 금요일 작업일지
  - Header, Footer 컴포넌트 공동제작
   .trouble -> git issue -> push가 안대 머지와 리베이스등을 했지만 해결이 안 됐고
               레포지토리 다시 파서 해결했습니다. 
   .trouble -> header 에 있는 커뮤니티와 쇼핑 클릭 했을 때의 액션상황 효율적인 관리 
  - 로그인, 회원가입 - useInput() 훅사용 
 
 #### 06) 3월 25일 - 토요일 작업일지
 - 로그인, 회원가입 페이지 완성하기
 - 뷰는 완성, 기능구현을 위해서 db.json 서버 활용



  #### 10) react-icons
  - BsBookmark : 북마크
  - Bell : 알림 아이콘 <VscBell />

  ### 11) 토큰 
  - 라이브러리 설치 후 
  - 생성자 함수 선언 후 
  -  토큰 유무에 따라 상황을 설정한다.

  