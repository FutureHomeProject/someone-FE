import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from '../App'
import { BlueButton } from '../components/CommenButton'
import SomeoneHou from '../img/SomeoneHou.png'

function Singin() {
  const navigate = useNavigate();
  return (
    <Layout>
      <StyleDiv onClick={()=>navigate("/")}>
        <img src={SomeoneHou} width="50px"></img>
        <StyleP>누군가의집</StyleP>
      </StyleDiv>
      <Form>
        <input type="text" placeholder='이메일'/>
        <input type="password" placeholder='비밀번호'/>
        <BlueButton innerText="로그인" width="100%" height="40px" color="white"/>
      </Form>
      <StyleDiv2>
        <div>비밀번호 재설정</div>
        <div onClick={()=>navigate("/signup")}>회원가입</div>
      </StyleDiv2>
    </Layout>
  )
}

export default Singin

const StyleDiv = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  
  img {
    border-radius: 10px;
  }
`
const StyleDiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  font-size: .8rem;
`

const StyleP = styled.div`
  font-family: "Jal_Onuel";
  font-size: 1.8em;
  letter-spacing: -2.5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
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
