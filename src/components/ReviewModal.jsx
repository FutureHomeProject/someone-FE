import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import {SlArrowDown,SlArrowUp } from 'react-icons/sl'
import photopoint from '../img/review/photopoint.png'
import {BsFillStarFill} from 'react-icons/bs'
import jwt_decode from 'jwt-decode';
import { useValidate } from '../hook/useValidate';
import Cookies from 'universal-cookie';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

export const cookies = new Cookies();

// 이쪽 수정해주시면 될것같은..
const calcStarColor = (currentGrade, grade) => currentGrade >= grade

const ReviewModal = ({productId, modal, setModal, marketer, img, productsName }) => {
  const [currentGrade, setCurrentGrade] = useState(0)
  const [currentHover, setCurrentHover] = useState(0)

  const [cancleModal, setCancleModal] = useState(false)
  const [hidden1, setHidden1] = useState(false)
  const [textarea, onTextareaHandler,setTextarea] = useValidate({tyep:"other"});
  const hiddenToggle1 = () => {
    setHidden1((pre) => !pre)
  }
  const selectFile = useRef("");
  const [imgFile, setImgFile] = useState("");
  
  const saveImgFile = () => {
    const file = selectFile.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgFile(reader.result)
    }
  }


const resetImgFile = () => {
  setImgFile("")
  selectFile.current.value = ""
}
  
  const queryClient = useQueryClient();
  const { mutate : postproducts } = useMutation({
    mutationFn : async ({productId,token,nickname,comment,reviewpoint, imgFile}) => {
      const formData = new FormData();
      formData.append('nickname', nickname);
      formData.append('comment', comment);
      formData.append('reviewpoint', reviewpoint);
      formData.append('image', imgFile);
  
      const data = await axios.post(
        `${process.env.REACT_APP_SERVER_KEY}/products/${productId}/reviews/write`,
        formData,
        {
          headers : {
            'Content-Type': 'multipart/form-data',
            Authorization : `Bearer ${token}`
          }
        }
      )
      return data.status
    },
    onSuccess: (data) => {
      switch (data) {
        case 200 :
          alert("승인")
          queryClient.invalidateQueries('productsreview')
          return 
        default :
          return  
      }
    },
    onError: (error) => {
      console.log(error);
    }
  })
  




  const token = cookies.get('token')
  const {nickname} = jwt_decode(token);
  const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log(e);
      // const reviewpoint = document.querySelector('input[name="selectstar"]:checked');
      // // console.log(reviewpoint);
      // if(token && reviewpoint) {
      //   postproducts({productId,token,nickname,comment:textarea,reviewpoint: reviewpoint.value,imgFile})
      //   // console.log({
      //   //   productId,
      //   //   nickname,
      //   //   comment:textarea,
      //   //   reviewpoint: reviewpoint.value,
      //   //   imgFile,
      //   // });
      //   // console.log(imgFile)
      //   setModal((pre) => !pre);
      //   setTextarea('');
      //   setImgFile('');
      //   setImgFile('')
      // } else {
      //   alert("만족도 평가를 체크해 주세요.")
      // }
  }

  

  return (
    <>
      <ModalBackground state={modal} />
      <ModalWindow state={modal}>
        <div className="canclebtn">
          <button onClick={() => setCancleModal((pre) => !pre)}>X</button>
        </div>
        <div className="reviewTitle">리뷰쓰기</div>
        <div className="layout">
          <div className="reviewPoint">
            🅟 포토리뷰 <span>250P</span>, 일반리뷰 <span>0P</span>
          </div>
          <div className="products">
            <div>
              <img
                src={img}
                alt="포토리뷰포인트"
                width="100%"
                style={{ display: "block", borderRadius: "10px" }}
              />
            </div>
            <div>
              <p className="marketer">{marketer}</p>
              <div>{productsName}</div>
            </div>
          </div>
          {/* <form onSubmit={(e)=>{e.preventDefault(); console.log(imgFile);}}> */}
          {/*  */}
          <form
            onSubmit={onSubmitHandler}
          >
            <h3>별점평가</h3>
            <p>만족도</p>
            <div>
              <ul className="starUl">
                <StarWrap onMouseEnter={()=>setCurrentGrade(1)} className="radioInputStar" isOn={calcStarColor(currentGrade, 1)} isHover={calcStarColor(currentHover, 1)} >
                  <label htmlFor="radio-input1" onClick={()=>setCurrentGrade(1)}>
                    <input
                      type="radio"
                      value="1"
                      name="selectstar"
                      id="radio-input1"
                    />
                    <span className="star-icon">
                      <BsFillStarFill />
                    </span>
                  </label>
                </StarWrap>
                <StarWrap onMouseEnter={()=>setCurrentHover(2)} className="radioInputStar" isOn={calcStarColor(currentGrade, 2)} isHover={calcStarColor(currentHover, 2)}>
                  <label htmlFor="radio-input2"  onClick={()=>setCurrentGrade(2)}>
                    <input
                      type="radio"
                      value="2"
                      name="selectstar"
                      id="radio-input2"
                    />
                    <BsFillStarFill />
                  </label>
                </StarWrap>
                <StarWrap onMouseEnter={()=>setCurrentHover(3)} className="radioInputStar" isOn={calcStarColor(currentGrade, 3)} isHover={calcStarColor(currentHover, 3)}>
                  <label htmlFor="radio-input3"  onClick={()=>setCurrentGrade(3)}>
                    <input
                      type="radio"
                      value="3"
                      name="selectstar"
                      id="radio-input3"
                    />
                    <BsFillStarFill />
                  </label>
                </StarWrap>
                <StarWrap onMouseEnter={()=>setCurrentHover(4)} className="radioInputStar" isOn={calcStarColor(currentGrade, 4)} isHover={calcStarColor(currentHover, 4)}>
                  <label htmlFor="radio-input4" onClick={()=>setCurrentGrade(4)}>
                    <input
                      type="radio"
                      value="4"
                      name="selectstar"
                      id="radio-input4"
                    />
                    <BsFillStarFill />
                  </label>
                </StarWrap>
                <StarWrap onMouseEnter={()=>setCurrentHover(5)} className="radioInputStar" isOn={calcStarColor(currentGrade,5 )} isHover={calcStarColor(currentHover, 5)}>
                  <label htmlFor="radio-input5" onClick={()=>setCurrentGrade(5)}>
                    <input
                      type="radio"
                      value="5"
                      name="selectstar"
                      id="radio-input5"
                    />
                    <BsFillStarFill />
                  </label>
                </StarWrap>
              </ul>
            </div>
            <div className="photoupload">
              <p>사진첨부(선택)</p>
              <img src={photopoint} height="30" alt='포인트이미지'/>
            </div>
            {imgFile && (
              <div style={{ position: "relative", margin: "20px 0" }}>
                <img
                  src={imgFile && imgFile}
                  alt="업로드된 이미지"
                  width="100%"
                />
                <div style={{ position: "absolute", top: "0", right: "0" }}>
                  <button
                    className="photoDelete"
                    onClick={resetImgFile}
                  >
                    삭제
                  </button>
                </div>
              </div>
            )}
            <input
              type="file"
              style={{ display: "none" }}
              onChange={saveImgFile}
              ref={selectFile} //input에 접근 하기위해 useRef사용
            />
            <button
              className="photoSelector"
              onClick={() => selectFile.current.click()}
            >
              사진 첨부하기
            </button>

            <h3>리뷰작성</h3>
            <div style={{ position: "relative" }}>
              <textarea
                // required
                minLength="20"
                value={textarea}
                onChange={onTextareaHandler}
                placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다.(최소 20자)"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "8px",
                  fontSize: ".8rem",
                }}
              >
                {textarea.length}
              </div>
            </div>
            <button className="onSubmitbtn">완료</button>
          </form>


          
          <Writeguide>
            <div className="viewdiv" onClick={hiddenToggle1}>
              <h4>누군가의집의 리뷰 정책</h4>
              <div className="arrow">
                {hidden1 ? <SlArrowUp /> : <SlArrowDown />}
              </div>
            </div>

            <Hiddendiv displaystate={hidden1}>
              <p>
                다음 금지행위에 해당되는 리뷰는 오늘의집 서비스 이용 약관
                제24조에 따라 고객에게 통보 없이 삭제 또는 블라인드 될 수
                있습니다. 보다 자세한 내용은 고객센터 Q&A에서 확인하실 수
                있습니다.
              </p>
              <h3>리뷰 작성 시 금지행위</h3>
              <ol>
                <li>
                  특정 내용의 리뷰 작성 조건으로 대가를 제공받고 이를 표시하지
                  않거나, 기타 특정업체의 영리적 목적을 위하여 리뷰를 게시한
                  경우
                </li>
                <li>동일 상품에 대해 반복적 리뷰 게시</li>
                <li>
                  허위/과장된 내용 또는 직접 작성하지 않았거나 구매한 상품과
                  관련 없는 내용 게시
                </li>
                <li>
                  정당한 권한 없이 타인의 권리 등(개인정보, 지식재산권, 소유권,
                  명예, 신용 등)을 침해하는 내용 게시
                </li>
                <li>
                  욕설, 폭언, 비방 등 타인에 불쾌하거나 위협이 되는 내용 게시
                </li>
                <li>
                  음란물 또는 청소년 유해 매체물, 범죄행위나 불법적인 행동을
                  전시 또는 조장하는 내용 게시
                </li>
                <li>
                  정보통신기기의 오작동을 일으킬 수 있는 악성코드나 데이터를
                  포함하는 리뷰 게시
                </li>
                <li>사기성 상품, 서비스, 사업 계획 등을 판촉하는 리뷰 게시</li>
                <li>
                  기타 관련법령 및 이용약관, 운영정책에 위배되는 리뷰 게시
                </li>
              </ol>
            </Hiddendiv>
          </Writeguide>
        </div>
        <div style={{backgroundColor: "rgba(205, 205, 205, 0.3)", padding:"10px"}}>
            <ul>
              <li>상품을 직접 사용한 경우에만 리뷰 작성을 하실 수 있습니다.</li>
              <li>
                비구매 상품 리뷰 포인트는 심사 후 지급됩니다. (영업일 기준 2~3일
                소요)
              </li>
              <li>포인트는 최초 작성한 리뷰를 기준으로 지급됩니다.</li>
              <li>
                사진 첨부시 <span style={{color:"red"}}>캡쳐, 도용, 유사상품 촬영, 동일상품 여부 식별이
                불가한 경우</span>에는 등록이 거절되며 사유는 별도 안내되지 않습니다.
              </li>
              <li>
                상품과 무관한 내용이나 사진, 동일 문자 반복 등의 부적합한 리뷰는
                사전 경고 없이 삭제 및 포인트 회수될 수 있습니다.
              </li>
            </ul>
          </div>
      </ModalWindow>

      <ModalBackground state={cancleModal} />
      <ModalWindow2 state={cancleModal}>
        <p style={{textAlign:"center"}}>리뷰를 작성하지 않고 나가겠습니까?</p>
        <p style={{textAlign:"center"}}>작성한 내용은 저장되지 않습니다.</p>
        <div style={{display:"flex", justifyContent:"center", gap:"10px", marginTop:"50px"}}>
        <button style={{width:"70px", height:"40px", border:"1px solid #6BD1F0", background:"white", borderRadius:"10px", fontSize:"1.1rem", fontWeight:"700"}} onClick={() => setCancleModal((pre) => !pre)}>취소</button>
        <button style={{width:"70px", height:"40px", border:"none", background:"#6BD1F0", borderRadius:"10px", fontSize:"1.1rem", fontWeight:"700", color:"white"}}
          onClick={() => {
            setCancleModal((pre) => !pre);
            setModal((pre) => !pre);
            setTextarea('');
            setImgFile('');
            setImgFile('');
          }}
        >
          나가기
        </button>
        </div>
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
  .layout {
    width: 90%;
    margin: 30px auto;
  }
  .canclebtn {
    text-align: end;
    margin-right: 15px;
    margin-top: 15px;
    button {
      border: none;
      background-color: transparent;
      font-size: 2rem;
    }
  }
  .reviewTitle {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 900;
  }
  .reviewPoint {
    background-color: #525B61;
    color: white;
    font-weight: 900;
    padding: 5px 20px;
    height: 2rem;
    line-height: 2rem;

    span:nth-child(1) {
      color: #6BD1F0;
    }
    span:nth-child(2) {
      color: lightgray;
    }
  }

  .products {
    margin: 10px 0;
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 10px;

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;

      p {
        margin: 0;
      }
    }
  }
  .marketer {
    color: #858585;
  }

  .starUl {
    display: flex;
    li {
      list-style: none;
      color: lightgrey;
      font-size: 2rem;
        input[type="radio"] {
          width: 0;
          height: 0;
          opacity: 0;
        }
    }
  }
  .radioInputStar {
    &:hover{
      color: #6BD1F0;
    }
  }
  .radioInputStar input[type="checked"] {
    color: #6BD1F0;
  }




  .photoupload {
    img {
      display: block;
    }
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .photoSelector{
    width: 100%;
    height: 40px;
    font-size: 1.3rem;
    font-weight: 700;
    background-color: transparent;
    color: #6BD1F0;
    border: 1px solid  #6BD1F0;
    border-radius: 10px;
  }
  .photoDelete {
    margin: 10px;
    width: 80px;
    height: 30px;
    border: none;
    background-color: #6BD1F0;
    border-radius: 10px;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: #235e70;
    }
  }
  textarea {
    resize: none;
    width: 97%;
    margin: 0 auto;
    height: 100px;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 10px;
  }
  .onSubmitbtn {
    width: 100%;
    margin: 20px 0;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #6BD1F0;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    &:hover {
      background-color: #235e70;
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
  width: 97%;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 10px;
  border: 1px solid rgb(218, 220, 224);
  box-shadow: 0 2px 4px 0px rgba(234, 235, 239, 0.8);

  height: auto;
  h4 {
    margin: 0;
  }
  .viewdiv {
    min-height: 40px;
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



// isOn을 Props로 받아서
const StarWrap = styled.li`
  svg {
    color: ${({isOn})=> isOn ? '#6BD1F0' : 'lightgrey'};
    color: ${({isHover})=> isHover ? '#82E0FA' : 'lightgrey'};
  }
  &:hover {
    svg {
    color: #6BD1F0
  }
  }
`

