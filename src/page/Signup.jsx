import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from '../App'
import { BlueButton } from '../components/CommenButton'
import { EmailInput, PasswordInput, TextInput } from '../components/CommenInput'
import SomeoneHou from '../img/SomeoneHou.png'

function Singup() {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    email:'',
    nickname:''
  })
  const [password, setPassWord] = useState('')
  const [conformPassword, setConformPassword] = useState('')
  const onChangeHandler = (e) => {
    const {name, value} = e.target;
    setSignup({...signup, [name]:value})
  }


  let conformpassword = ''
  if(password != conformPassword) {
    conformpassword = "동일한 비밀번호를 입력해주세요." 
  }
  

  return (
    <Layout>
      <StyleDiv onClick={()=>navigate("/")}>
        <img src={SomeoneHou} width="50px"></img>
        <StyleP>누군가의집</StyleP>
      </StyleDiv>
      <Form onSubmit={(e)=>e.preventDefault()}>
        <p>회원가입</p>
        <EmailInput title="이메일" name="email" value={signup.email} onChange={onChangeHandler} validate="이메일 형식으로 기입해주세요."/>
        <BlueButton type="button" innerText="중복확인" width="100%" height="40px" color="white" onClick={()=>alert("중복확인")}/>
        <PasswordInput title="비밀번호" name="password" value={password} onChange={(e)=>setPassWord(e.target.value)} validate="영문, 특수문자, 숫자를 포함한 8자 이상을 입력해주세요."/>
        <PasswordInput title="비밀번호 확인" name="conformPassword" value={conformPassword} onChange={(e)=>setConformPassword(e.target.value)} conform={conformpassword}/>
        <TextInput title="닉네임" name="nickname" value={signup.nickname} onChange={onChangeHandler} validate="다른 유저와 겹치지 않도록 입력해주세요(2-15자)"/>
        <BlueButton type="button" innerText="중복확인" width="100%" height="40px" color="white" onClick={()=>alert("중복확인")}/>
        <BlueButton innerText="회원가입" width="100%" height="40px" color="white"/>
      </Form>
      <StyleDiv2>
        <div>이미 아이디가 있으신가요?</div>
        <div onClick={()=>navigate("/signin")}>로그인</div>
      </StyleDiv2>
    </Layout>
  )
}

export default Singup

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
