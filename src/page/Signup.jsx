import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from '../App'
import { BlueButton } from '../components/CommenButton'
import { EmailInput, PasswordInput, TextInput } from '../components/CommenInput'
import { useValidate } from '../hook/useValidate'
import SomeoneHou from '../img/SomeoneHou.png'
import { __postsignup } from '../redux/modules/authorization'

function Singup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, onChangeEmail, emailValidate] = useValidate({type:"email"});
  const [password, onChangePassword, passwordValidate] = useValidate({type:"password"});
  const [conformpw, onChangePw, checkpwvalidate] = useValidate({type:"checkpw", check:password});
  const [nickname, onChangenickname, otherValidate] = useValidate({type:"nickname"});

  const onSubmitSingup = async (e) => {
     e.preventDefault();
     if(emailValidate && passwordValidate && checkpwvalidate && otherValidate) {
      await dispatch(__postsignup({email, password, nickname}))
      navigate("/signin")
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
        <EmailInput
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
        <PasswordInput
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
        <PasswordInput
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
        <TextInput
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
    </Layout>
  );
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

