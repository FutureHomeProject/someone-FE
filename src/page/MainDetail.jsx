import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer'
import Header from '../components/Header'
import ReviewModal from '../components/ReviewModal';
import products1 from '../img/produts/products1.webp'

function MainDetail() {
  const {id} = useParams()
  console.log(+id);
  // DB에서 불러온 데이터에서 파람스의 값과 일치되는 녀석을 가져오기
  const price = 2499000
  const today = Date.now(); // 현재시간을 구하고
  const threeDayLater = 3 * 24 * 60 * 60 * 1000
  const diliveryDay = new Date(today+threeDayLater)
  const months = diliveryDay.getMonth()+1 // 월
  const date = diliveryDay.getDate() // 일
  const day = ["일","월","화","수","목","금","토"]
  const dayNum = diliveryDay.getDay() // 요일계산
  const [modal, setModal] = useState(false)
  
  return (
    <>
      <Header />
      <ProductsDiv>
        {/* 이미지 */}
        <div>
          <img src={products1} width="100%" />
        </div>
        <div>
          <Title>LG전자</Title>
          <ProductName>[오늘의딜] 트롬 워시타워 W20WAN 세탁23kg 건조20kg</ProductName>
          <Review>리뷰 752개</Review>
          <Sale>
            43% <span>{price}원</span>
          </Sale>
          <Subtitle>
            <p>혜택</p>
            <p><span>{price / 1000}</span>P 적립</p>
          </Subtitle>
          <Subtitle>
            <p>배송</p>
            <p>
              <span>무료배송</span> <br /> 업체직접배송
            </p>
            <div>
              <span style={{color:"skyblue", fontWeight:"900"}}>{months}/{date}({day[dayNum]})</span> 이내 도착 예정
            </div>
          </Subtitle>
        </div>
      </ProductsDiv>
      <div>
          <p>리뷰 752</p>
          <p><button onClick={()=>{setModal(pre=>!pre)}}>리뷰쓰기</button></p>
          <div>
            <p>★★★★★ 4.9</p>
            <p>별점 그래프?</p>
          </div>
      </div>

      <div>
        <p>유저이름</p>
        <p>내구성 별정</p>
        <p>가격 별정</p>
        <p>디자인 별정</p>
        <p>배송 별정</p>
        <p>제품명</p>
        <p>이미지</p>
        <p>리뷰 내용</p>

      </div>

      <div style={{ position: "sticky", bottom: "0px", padding:"20px 0", background:"white"}}>
        <button style={{width:"100%", height:"50px", border:"none", background:"skyblue", fontSize:"1.5rem", color:"white", fontWeight:"700", borderRadius:"10px"}}>구매하기</button>
      </div>
      <ReviewModal modal={modal} setModal={setModal}/>
      <Footer />
    </>
  );
}

export default MainDetail

const ProductsDiv = styled.div`
  width: 1080px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 50px auto;

  div:nth-child(1) {
    img {
      display: block;
      border-radius: 10px;
    }
  }

  div:nth-child(2) {
    padding: 0 15px;
  }
`

const Title = styled.p`
  color: gray;
  font-weight: 900;
  margin: 0;

`

const ProductName = styled.p`
  font-size: 2rem;
  margin: 15px 0;
`

const Review = styled.p`
  color: skyblue;
  font-weight: 900;
`

const Sale = styled.p`
  font-size: 1.4rem;

  span {
    color:gray;
    text-decoration-line: line-through;
  }
`

const Subtitle = styled.p`
  p:nth-child(1) {
    color:gray;
  }
  p:nth-child(2) {
    span {
      font-weight: 900;
    }
  }
`