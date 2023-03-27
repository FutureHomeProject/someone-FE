import React, { useState } from 'react'

// 라우터 이용을 위한 임포트 
import { useNavigate } from 'react-router-dom'

// 디자인을 위한 임포트
import { Layout } from '../css/commenCss.jsx'
import { StyledButton } from '../components/CommenButton'
import { CommenInput } from '../components/CommenInput'
import { useValidate } from '../hook/useValidate'
import { StyleDiv, StyleDiv2, StyleP,Form } from '../css/commenCss.jsx'

// 로고
import SomeoneHou from '../img/SomeoneHou.png'

// 비동기 통신 및 그에 따른 후속조치를 위한 모달관련
import { useConfirm } from '../hook/useConfirm.jsx'
import { useSignup } from '../hook/useSignup.jsx'
import { SuccessModal, ErrModal } from '../components/Modal.jsx'

function Singup() {
  const navigate = useNavigate();
  // 유효성 검사
  const [email, onChangeEmail, emailValidate] = useValidate({type:"email"});
  const [password, onChangePassword, passwordValidate] = useValidate({type:"password"});
  const [conformpw, onChangePw, checkpwvalidate] = useValidate({type:"checkpw", check:password});
  const [nickname, onChangenickname, otherValidate] = useValidate({type:"nickname"});

  // 모달제어
  const [modal, setModal] = useState(false)
  const [errmodal, setErrModal] = useState(false)
  const [successmsg, setSuccessmsg] = useState('')
  const [errormsg, setErrormsg] = useState('')

  // 비동기서버통신을 위한 커스텀 훅
  const [confirmemail] = useConfirm(setModal,setErrModal, setErrormsg);
  const [signup] = useSignup(setModal, setSuccessmsg, setErrModal, setErrormsg)


  // form 태그 실행함수 
  const onSubmitSingup = async (e) => {
     e.preventDefault();
     if(emailValidate && passwordValidate && checkpwvalidate && otherValidate) {
      signup({email, password, nickname})
     } else {
      alert("입력되지 않은 내용이 있습니다.")
     }
  };

  return (
    <Layout>
      <StyleDiv onClick={() => navigate("/")}>
        <img src={SomeoneHou} width="50px" alt="logo"></img>
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
        <StyledButton
          type="button"
          innerText="중복확인"
          width="100%"
          height="40px"
          color="white"
          onClick={() => {
            confirmemail(["email", { email }]);
            setSuccessmsg("이메일 사용이 가능합니다.");
          }}
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
        <StyledButton
          type="button"
          innerText="중복확인"
          width="100%"
          height="40px"
          color="white"
          onClick={() => {
            confirmemail(["nickname", { nickname }]);
            setSuccessmsg("닉네임 사용이 가능합니다.");
          }}
        />
        <StyledButton
          type="submit"
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

      <SuccessModal
        modal={modal} 
        successmsg={successmsg} 
        setModal={setModal} />

      <ErrModal
        modal={errmodal}
        setModal={setErrModal}
        errormsg={errormsg}
        setErrormsg={setErrormsg}
      />
    </Layout>
  );
}

export default Singup;