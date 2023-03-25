import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../css/commenCss.jsx'
import { BlueButton } from '../components/CommenButton'
import { CommenInput } from '../components/CommenInput'
import { useValidate } from '../hook/useValidate'
import SomeoneHou from '../img/SomeoneHou.png'
import { __postsignup } from '../redux/modules/authorization'
import { StyleDiv, StyleDiv2, StyleP,Form } from '../css/commenCss.jsx'
import { useMutation } from 'react-query'
import axios from 'axios'
import styled from 'styled-components'
import success from '../img/signup/success.png'

function Singup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, onChangeEmail, emailValidate] = useValidate({type:"email"});
  const [password, onChangePassword, passwordValidate] = useValidate({type:"password"});
  const [conformpw, onChangePw, checkpwvalidate] = useValidate({type:"checkpw", check:password});
  const [nickname, onChangenickname, otherValidate] = useValidate({type:"nickname"});
  const [modal, setModal] = useState(false)
  const [errmodal, setErrModal] = useState(false)
  const [errormsg, setErrormsge] = useState('')

  const { mutate: register } = useMutation({
    mutationFn : async (user) => {
      const data = await axios.post(`${process.env.REACT_APP_SERVER_KEY}/users/signup`, user) 
      return data.status
    },
    onSuccess: (data) => {
      switch (data) {
        case 200 :
            setModal(pre=>!pre);
          return 
        default :
          return  
      }
      // 성공적으로 데이터를 업데이트한 후 실행될 로직을 작성합니다.
    },
    onError: (error) => {
      setErrModal(pre=>!pre)
      setErrormsge(error.response.data.message);
      // 에러 발생 시 실행될 로직을 작성합니다.
  }})

  const onSubmitSingup = async (e) => {
     e.preventDefault();
    //  if(emailValidate && passwordValidate && checkpwvalidate && otherValidate) {
    if(emailValidate && otherValidate) {
      // await dispatch(__postsignup({email, password, nickname}))
      register({email, password, nickname})
     } else {
      alert("입력되지 않은 내용이 있습니다.")
     }
  };

  return (
    <Layout>
      <StyleDiv onClick={() => navigate("/")}>
        <img src={SomeoneHou} width="50px" alt='logo'></img>
        <StyleP>누군가의집</StyleP>
      </StyleDiv>
      <Form onSubmit={onSubmitSingup}>
        <p>회원가입</p>
        <CommenInput
          type="이메일"
          title="이메일"
          name="email"
          value={email}
          conform={emailValidate}
          onChange={onChangeEmail}
          validate={
            email === "" && !emailValidate
              ? "이메일 형식으로 기입해주세요"
              : email !== "" && !emailValidate
              ? "이메일 형식으로 기입해주세요"
              : "올바른 이메일 형식입니다."
          }
        />
        <BlueButton
          type="button"
          innerText="중복확인"
          width="100%"
          height="40px"
          color="white"
          onClick={() => alert("중복확인")}
        />
        <CommenInput
          type="패스워드"
          title="비밀번호"
          name="password"
          value={password}
          conform={passwordValidate}
          onChange={onChangePassword}
          validate={
            password === "" && !passwordValidate
              ? "영문, 특수문자, 숫자를 포함한 8자 이상을 입력해주세요."
              : password !== "" && !passwordValidate
              ? "영문, 특수문자, 숫자를 포함한 8자 이상을 입력해주세요."
              : "올바른 비밀번호 형식입니다."
          }
        />
        <CommenInput
          type="패스워드"
          title="비밀번호 확인"
          name="conformPassword"
          value={conformpw}
          conform={checkpwvalidate}
          onChange={onChangePw}
          validate={
            conformpw === "" && !checkpwvalidate
              ? "동일한 비밀번호를 입력해주세요"
              : conformpw !== "" && !checkpwvalidate
              ? "동일한 비밀번호를 입력해주세요"
              : "위의 비밀번호와 일치합니다."
          }
        />
        <CommenInput
          type="텍스트"
          title="닉네임"
          name="nickname"
          value={nickname}
          conform={otherValidate}
          onChange={onChangenickname}
          validate="다른 유저와 겹치지 않도록 입력해주세요(2-15자)"
        />
        <BlueButton
          type="button"
          innerText="중복확인"
          width="100%"
          height="40px"
          color="white"
          onClick={() => alert("중복확인")}
        />
        <BlueButton
          innerText="회원가입"
          width="100%"
          height="40px"
          color="white"
        />
      </Form>
      <StyleDiv2>
        <div>이미 아이디가 있으신가요?</div>
        <div onClick={() => navigate("/signin")}>로그인</div>
      </StyleDiv2>
      <ModalBackground state={modal}/>
      <Modal state={modal}>
        <p>회원가입이 완료되었습니다.</p>
        <img src={success} alt="signupimg"/>
        <button onClick={()=>{setModal(pre=>!pre); navigate("/signin")}}>완료</button>
      </Modal>
      <ModalBackground state={errmodal}/>
      <Modal state={errmodal}>
        <h2>: ERROR :</h2>
        <p>{errormsg}</p>
        {/* <img src={success} alt="signupimg"/> */}
        <button onClick={()=>{setErrModal(pre=>!pre); setErrormsge("")}}>완료</button>
      </Modal>

    </Layout>
  );
}

export default Singup;

const ModalBackground = styled.div`
  display: ${props => props.state ? "block" : "none"};
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,0.8);
  z-index: 10;
`
const Modal = styled.div`
  display: ${props => props.state ? "block" : "none"};
  width: 600px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFC04C;
  border-radius: 15px;
  z-index: 10;

  h2 {
    font-family: 'EF_jejudoldam';
    text-align: center;
    font-size: 3rem;
    color:red;
  }

  p {
    font-family: 'EF_jejudoldam';
    text-align: center;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 0;
  }
  img {
    display: block;
    height: 160px;
    margin: 0 auto;
  }

  button {
    font-family: 'EF_jejudoldam';
    display: block;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    margin: 10px auto;
    background-color: white;
    border: none;
    font-size: 1.3rem;
    font-weight: 900;
  }
`
