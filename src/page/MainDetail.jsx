import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer'
import Header from '../components/Header'
import ReviewBox from '../components/mainpage/ReviewBox';
import ReviewMap from '../components/mainpage/ReviewMap';
import ReviewModal from '../components/ReviewModal';
import products1 from '../img/produts/products1.webp'

function MainDetail() {
  const {id} = useParams();
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

  const getproductsreview = async () => {
    // const  response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/todos`)
    const response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/products/reviews`);
    console.log(response.data)
    return response.data
  }
  // eslint-disable-next-line no-unused-vars
  const {isLoading, isError, data} = useQuery("productsreview", getproductsreview, {
    staleTime: 1000 * 60 * 3, // 5분
  })
  console.log(data);
  // if(isLoading || isError) {
  //   return (<div>로딩 중...</div>)
  // }
  
  return (
    <>
      <Header />
      <ProductsDiv>
        {/* 이미지 */}
        <div>
          <img src={products1} width="100%" alt='상품이미지'/>
        </div>
        <div >
          <Title>LG전자</Title>
          <ProductName>[오늘의딜] 트롬 워시타워 W20WAN 세탁23kg 건조20kg</ProductName>
          <Review>리뷰 752개</Review>
          <Sale>
            43% <span>{price}원</span>
          </Sale>
          <Subtitle>
            <p>혜택</p>
            <div><span>{price / 1000}</span>P 적립</div>
          </Subtitle>
          <Subtitle>
            <p>배송</p>
            <div>
              <span>무료배송</span> <br /> 업체직접배송
            </div>
            <div>
              <span style={{color:"skyblue", fontWeight:"900"}}>{months}/{date}({day[dayNum]})</span> 이내 도착 예정
            </div>
          </Subtitle>
        </div>
      </ProductsDiv>
      <ReviewBox onClick={()=>setModal(pre=>!pre)}/>
      <ReviewMap/>
      <ReviewMap/>
      <ReviewMap/>
      <ReviewMap/>
      <div style={{ position: "sticky", bottom: "0px", padding:"20px 0", background:"white"}}>
        <button style={{width:"100%", height:"50px", border:"none", background:"skyblue", fontSize:"1.5rem", color:"white", fontWeight:"700", borderRadius:"10px"}}>구매하기</button>
      </div>
      <ReviewModal productId={id} modal={modal} setModal={setModal} img={products1} marketer="LG전자" productsName="[오늘의딜] 트롬 워시타워 W20WAN 세탁23kg 건조20kg"/>
      
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

const Subtitle = styled.div`
  p:nth-child(1) {
    color:gray;
  }
  p:nth-child(2) {
    span {
      font-weight: 900;
    }
  }
`