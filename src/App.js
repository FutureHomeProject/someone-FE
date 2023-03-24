import React from 'react'
import Router from './shared/Router';
import styled, { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Layout>
        <Router/>
      </Layout>
    </div>
  )
}

export default App;

const GlobalStyle = createGlobalStyle`
  // 로고글꼴
  @font-face {
    font-family: 'Jal_Onuel';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Onuel.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  // body 글꼴
  @font-face {
      font-family: 'KoddiUDOnGothic-Regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/KoddiUDOnGothic-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  

  body {
    font-family: 'KoddiUDOnGothic-Regular';
  }
`;

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  background-color: yellow;
`