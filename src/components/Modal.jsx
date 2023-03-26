import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import success from '../img/signup/success.png'

export const SuccessModal = ({modal, successmsg, setModal}) => {
  const navigate = useNavigate();
  switch (successmsg) {
    case "회원가입이 승인되었습니다." :
      return (
        <>
          <ModalBackground />
          <ModalWindow state={modal}>
          <p>{successmsg}</p>
            <img src={success} alt="signupimg" />
            <button
              onClick={() => {
                setModal((pre) => !pre);
                navigate("/signin");
              }}
            >
              완료
            </button>
          </ModalWindow>
        </>
      );
    default :
      return (
        <>
          <ModalBackground />
          <ModalWindow state={modal}>
          <h2> : 사용가능 : </h2>  
          <p>{successmsg}</p>
            <button
              onClick={() => {
                setModal((pre) => !pre);
              }}
            >
              완료
            </button>
          </ModalWindow>
        </>
      );   
              
  }
}

export const ErrModal = ({modal, setModal, errormsg, setErrormsg}) => {  
  return (
    <>
      <ModalBackground state={modal}/>
      <ModalWindow state={modal}>
        <h2>: ERROR :</h2>
        <p>{errormsg}</p>
        {/* <img src={success} alt="signupimg"/> */}
        <button
          onClick={() => {
            setModal((pre) => !pre);
            setErrormsg('')
          }}
        >
          완료
        </button>
      </ModalWindow>
    </>
  );
}







const ModalBackground = styled.div`
  display: ${props => props.state ? "block" : "none"};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,0.8);
  z-index: 10;
`
const ModalWindow = styled.div`
  display: ${props => props.state ? "block" : "none"};
  width: 600px;
  height: 300px;
  position: fixed;
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
