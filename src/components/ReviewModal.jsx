import React, { useState } from 'react'
import styled from 'styled-components';

const ReviewModal = ({modal, setModal }) => {
  const [cancleModal, setCancleModal] = useState(false)
  return (
    <>
      <ModalBackground state={modal} />
      <ModalWindow state={modal}>
       <p className='canclebtn'><button onClick={()=>setCancleModal(pre=>!pre)}>X</button></p>
      </ModalWindow>

      <ModalBackground state={cancleModal}/>
      <ModalWindow2 state={cancleModal}>
        <p>리뷰를 작성하지 않고 나가겠습니까?</p>
        <p>작성한 내용은 저장되지 않습니다.</p>
        <button onClick={()=>setCancleModal(pre=>!pre)}>취소</button>
        <button onClick={()=>{setCancleModal(pre=>!pre); setModal(pre=>!pre)}}>나가기</button>
      </ModalWindow2>
    </>
  );
};

export default ReviewModal;






const ModalBackground = styled.div`
  display: ${props => props.state ? "block" : "none"};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(75, 70, 70, 0.8);
  z-index: 11;
`
const ModalWindow = styled.div`
  display: ${(props) => (props.state ? "block" : "none")};
  width: 800px;
  height: 1000px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 15px;
  z-index: 11;

  .canclebtn {
    text-align: end;
    margin-right: 20px;
    button {
      border: none;
      background-color: transparent;
      font-size: 2rem;
    }
  }
`;

const ModalWindow2 = styled.div`
  display: ${(props) => (props.state ? "block" : "none")};
  width: 400px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 15px;
  z-index: 11;

  .canclebtn {
    text-align: end;
    margin-right: 20px;
    button {
      border: none;
      background-color: transparent;
      font-size: 2rem;
    }
  }
`;
