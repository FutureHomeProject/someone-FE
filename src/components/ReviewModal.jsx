import React, { useState } from 'react'
import styled from 'styled-components';
import {SlArrowDown,SlArrowUp } from 'react-icons/sl'
import photopoint from '../img/review/photopoint.png'

const ReviewModal = ({modal, setModal, marketer, img, productsName }) => {
  const [cancleModal, setCancleModal] = useState(false)
  const [hidden1, setHidden1] = useState(false)
  const hiddenToggle1 = () => {
    setHidden1((pre) => !pre)
  }
  return (
    <>
      <ModalBackground state={modal} />
      <ModalWindow state={modal}>
       <p className='canclebtn'><button onClick={()=>setCancleModal(pre=>!pre)}>X</button></p>
       <h2>리뷰쓰기</h2>
       <div>🅟포토리뷰 250P, 일반리뷰 0P</div>
       <div>
        <img src={img} width="100" style={{display:"block", borderRadius:"10px"}}/>
        <p>{marketer}</p>
        <p>{productsName}</p>
       </div>
       <h3>별점평가</h3>
       <p>만족도</p>
       <div>
        <p>사진첨부(선택)</p>
        <img src={photopoint} height="40"/>
        <button>사진 첨부하기</button>
       </div>
       <h3>리뷰작성</h3>
       <textarea />
       <button onClick={()=> setModal(pre=>!pre)}>완료</button>

       <Writeguide iconcolor="#90ee90">
       <div className="viewdiv" onClick={hiddenToggle1}>
            <div>
             누군가의집의 리뷰 정책
            </div>
            <div className="arrow">{hidden1 ? <SlArrowUp /> : <SlArrowDown />}</div>
          </div>

          <Hiddendiv displaystate={hidden1}>
            <p>다음 금지행위에 해당되는 리뷰는 오늘의집 서비스 이용 약관 제24조에 따라 고객에게 통보 없이 삭제 또는 블라인드 될 수 있습니다. 보다 자세한 내용은 고객센터 Q&A에서 확인하실 수 있습니다.</p>
            <h3>리뷰 작성 시 금지행위</h3>
            <ol>
              <li>특정 내용의 리뷰 작성 조건으로 대가를 제공받고 이를 표시하지 않거나, 기타 특정업체의 영리적 목적을 위하여 리뷰를 게시한 경우</li>
              <li>동일 상품에 대해 반복적 리뷰 게시</li>
              <li>허위/과장된 내용 또는 직접 작성하지 않았거나 구매한 상품과 관련 없는 내용 게시</li>
              <li>정당한 권한 없이 타인의 권리 등(개인정보, 지식재산권, 소유권, 명예, 신용 등)을 침해하는 내용 게시</li>
              <li>욕설, 폭언, 비방 등 타인에 불쾌하거나 위협이 되는 내용 게시</li>
              <li>음란물 또는 청소년 유해 매체물, 범죄행위나 불법적인 행동을 전시 또는 조장하는 내용 게시</li>
              <li>정보통신기기의 오작동을 일으킬 수 있는 악성코드나 데이터를 포함하는 리뷰 게시</li>
              <li>사기성 상품, 서비스, 사업 계획 등을 판촉하는 리뷰 게시</li>
              <li>기타 관련법령 및 이용약관, 운영정책에 위배되는 리뷰 게시</li>
            </ol>
          </Hiddendiv>
        </Writeguide>

        <div>
          <li>상품을 직접 사용한 경우에만 리뷰 작성을 하실 수 있습니다.</li>
          <li>비구매 상품 리뷰 포인트는 심사 후 지급됩니다. (영업일 기준 2~3일 소요)</li>
          <li>포인트는 최초 작성한 리뷰를 기준으로 지급됩니다.</li>
          <li>사진 첨부시 캡쳐, 도용, 유사상품 촬영, 동일상품 여부 식별이 불가한 경우에는 등록이 거절되며 사유는 별도 안내되지 않습니다.</li>
          <li>상품과 무관한 내용이나 사진, 동일 문자 반복 등의 부적합한 리뷰는 사전 경고 없이 삭제 및 포인트 회수될 수 있습니다.</li>
        </div>
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
  min-height: 1000px;
  position: absolute;
  top:10%;
  left: 50%;
  transform: translate(-50%);
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

const Writeguide = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid rgb(218, 220, 224);
  box-shadow: 0 2px 4px 0px rgba(234, 235, 239, 0.8);

  height: auto;

  .viewdiv {
    min-height: 70px;
    width: 100%;
    display: grid;
    border: none;
    align-items: center;
    grid-template-columns: 1fr 20px;
    gap: 5px;
    background-color: transparent;
    &:hover {
      background-color: #f3f3f3;
    }

    .arrow {
      position: relative;
      top: 4px;
      right: 10px;
    }
  }
`

const Hiddendiv = styled.div`
  display: ${(props) => (props.displaystate ? 'block' : 'none')};
`
