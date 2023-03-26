import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 디자인을 위한 임포트 
import { Layout } from '../css/commenCss.jsx'
import { BlueButton } from '../components/CommenButton'
import { StyleDiv, StyleDiv2, StyleP,Form } from '../css/commenCss.jsx'

// 로고
import SomeoneHou from '../img/SomeoneHou.png'

// 쿠키 사용을 위한 임포트
import { cookies } from '../components/Header'

// 유효성 검사를 위한 임포트
import { useValidate } from '../hook/useValidate'

// 비동기 통신 및 그에 따른 후속조치를 위한 모달관련
import { useSignin } from '../hook/useSignin.jsx'
import { ErrModal } from '../components/Modal.jsx'

function Singin() {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useValidate({type:"other"})
  const [password, onChangepassword] = useValidate({type:"other"})
  const [errmodal, setErrModal] = useState(false)
  const [errormsg, setErrormsg] = useState('')
  const [signin] = useSignin(setErrModal, setErrormsg)

  const onSubmitSignin = async (e) => {
    e.preventDefault();
    await signin({email, password})
  }

  useEffect(()=> {
    const token = cookies.get('token')
    if(token) {
      navigate('/')
    }
  })

    return (
      <Layout>
        <StyleDiv onClick={() => navigate("/")}>
          <img src={SomeoneHou} width="50px" alt="logo" />
          <StyleP>누군가의집</StyleP>
        </StyleDiv>
        <Form onSubmit={onSubmitSignin}>
          <input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={onChangeEmail}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangepassword}
          />
          <BlueButton
            innerText="로그인"
            width="100%"
            height="40px"
            color="white"
          />
        </Form>
        <StyleDiv2>
          <div>비밀번호 재설정</div>
          <div onClick={() => navigate("/signup")}>회원가입</div>
        </StyleDiv2>
        <ErrModal
          modal={errmodal}
          setModal={setErrModal}
          errormsg={errormsg}
          setErrormsg={setErrormsg}
        />
      </Layout>
    );
}

export default Singin

