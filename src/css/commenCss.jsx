import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  // 로고글꼴
  @font-face {
    font-family: 'Jal_Onuel';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Onuel.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
      font-family: 'KoddiUDOnGothic-Regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/KoddiUDOnGothic-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
    font-family: 'EF_jejudoldam';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  body {
    font-family: 'KoddiUDOnGothic-Regular';
  }
`;

export const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`
// Header 컴포넌트 
export const HeaderDiv = styled.header`

  position: sticky;
  top:-1px;
  background-color: white;
  /* margin: 10px 0; */
  padding: 10px 0;
  border-bottom: 1px solid gray;
  z-index: 999;
`

export const NavTop = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 120px 1fr 400px;
  font-size: 1rem;
  margin-bottom: 10px;


  .logo {
    font-family: 'Jal_Onuel';
    font-size: 1.5rem;
    letter-spacing:-2.5px;
  }

  div {
    display: flex;
    align-items: flex-end;
    gap: 30px;

  }
  div:nth-child(2) {
    font-weight: 600;
  }

  div:nth-child(3) {
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
  }
  .authorization {
    font-size: .7rem;
  }
  .line {
  }
`
export const NavBottom = styled.nav`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin: 0;
`

// Authorization 관련 
export const StyleDiv = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  
  img {
    border-radius: 10px;
  }
`

export const StyleDiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  font-size: .8rem;
`
export const StyleP = styled.div`
  font-family: "Jal_Onuel";
  font-size: 1.8em;
  letter-spacing: -2.5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  margin-top: 30px;
  

  input {
    display: block;
    margin: 0;
    height: 40px;
    padding: 0 10px;
  }
  input:nth-child(1) {
    border-radius: 5px 5px 0 0;
    border: 1px solid gray;
    border-bottom: 0;
  }
  input:nth-child(2) {
    border-radius: 0 0 5px 5px;
    border: 1px solid gray;
  }
`

