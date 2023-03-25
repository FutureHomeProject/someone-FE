import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from '../css/commenCss.jsx'
import { BlueButton } from '../components/CommenButton'
import { cookies } from '../components/Header'
import { useValidate } from '../hook/useValidate'
import SomeoneHou from '../img/SomeoneHou.png'
import { __postsignin } from '../redux/modules/authorization'
import { useMutation } from 'react-query'
import axios from 'axios'
import Cookies from 'universal-cookie'


function Singin() {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useValidate({type:"other"})
  const [password, onChangepassword] = useValidate({type:"other"})

  const { mutate: signin } = useMutation({
    mutationFn : async (user) => {
      const data = await axios.post(`${process.env.REACT_APP_SERVER_KEY}/users/login`, user) 
      const cookies = new Cookies();
      cookies.set('token', data.headers.authorization.split(" ")[1])
      return data.status
    },
    onSuccess: (data) => {
      switch (data) {
        case 200 :
            console.log("로그인 성공")
            const token = cookies.get('token')
            if(token) {
              navigate("/")
            }
          return 
        default :
          return  
      }
      // 성공적으로 데이터를 업데이트한 후 실행될 로직을 작성합니다.
    },
    onError: (error) => {
      console.log(error.response.message)
      // 에러 발생 시 실행될 로직을 작성합니다.
  }})

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
      <StyleDiv onClick={()=>navigate("/")}>
        <img src={SomeoneHou} width="50px" alt='logo'/>
        <StyleP>누군가의집</StyleP>
      </StyleDiv>
      <Form onSubmit={onSubmitSignin}>
        <input type="text" placeholder='이메일' value={email} onChange={onChangeEmail}/>
        <input type="password" placeholder='비밀번호' value={password} onChange={onChangepassword}/>
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
  width: 400px;
  margin: 0 auto;
  margin-top: 30px;
  

  input {
    display: block;
    margin: 0;
    height: 60px;
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
