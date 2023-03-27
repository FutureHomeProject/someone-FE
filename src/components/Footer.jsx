import React from 'react'
import { AiFillYoutube, AiFillSlackCircle, AiFillBehanceCircle } from 'react-icons/ai'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import styled from 'styled-components'

//하단 Footer 만들떄 <footer> 태그 사용 태그 안에 <section>,<article>사용
function Footer() {
  return (
    <HouseFooter>
      <div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'space-between',
          }}
        >
          <FirstDiv>
            <div>
              <InnerDiv>
                <a href="https://ohou.se/customer_center" fontSize="22px">
                  고객센터 >
                </a>
              </InnerDiv>
              <InnerDiv
                style={{
                  marginTop: '20px',
                }}
              >
                <a href="tel:1670-0876" fontSize="10px">
                  1670-0876
                </a>
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <time dateTime="9:00">09:00</time>~<time dateTime="18:00">18:00</time>
                </div>
              </InnerDiv>
              <InnerDiv>
                <p>평일: 전체문의 상담 가능 주말,공휴일: 오늘의집 직접배송, 이사/시공/수리 문의 상담 가능</p>
              </InnerDiv>
              <InnerDiv>
                <button>카톡 상담 (평일 9:00~18:00)</button>
                <button>이메일 문의</button>
              </InnerDiv>
            </div>
          </FirstDiv>
          <VLineDiv></VLineDiv>
          <SecondDiv>
            <a href="https://www.bucketplace.com">회사소개</a>
            <a href="https://www.bucketplace.com/careers">채용정보</a>
            <a href="https://ohou.se/usepolicy">이용약관</a>
            <a href="https://ohou.se/customer_notices">공지사항</a>
            <a href="https://ohou.se/privacy" className="userInfo">
              개인정보 처리방침
            </a>
            <a href="https://sites.google.com/bucketplace.net/safety/%ED%99%88">안전거래센터</a>
            <a href="https://www.partnerbucketplace.com/ecd6b28c-88fb-4d8d-b69b-c2a100114ecb">입점신청</a>
            <a href="https://ohou.se/contacts/new?type=request">제휴/광고 문의</a>
            <a href="https://ohou.se/contacts/b2b">사업자 구매 회원</a>
            <a href="https://pro.ohou.se/?utm_source=ohouse&utm_medium=web&utm_campaign=prosignup&utm_content=footer">
              시공파트너 안내
            </a>
            <a href="https://ohouse-ad.oopy.io">상품광고 소개</a>
            <a href="https://ohou.se/contacts/new">고객의 소리</a>
          </SecondDiv>
        </div>

        <LineDiv></LineDiv>
        <ThirdDiv>
          <ThirdOfFist>
            <div>
              <div>
                <span>|</span>(주)버킷플레이스
              </div>
              <div>
                <span>|</span>대표이사 이승재
              </div>
              <div>
                <span>|</span>서울 서초구 서초대로 47길 4 삼성생명 서초타워 25층,27층
              </div>
              <div>
                <span>|</span>contact@bucketplace.net
              </div>
              <div>
                <span>|</span>사업자등록번호 119-86-91245<span>사업자정보확인</span>
              </div>
              <div>
                <span>|</span>통신판매업신고번호 제 2018-서울서초-0580호
              </div>
            </div>
          </ThirdOfFist>
          <ThirdOfSecon>
            <div>
              <img src="https://assets.ohou.se/design-system/8f5b2c2e98ea1196.png" width="32" height="32" />
              <div>
                오늘의 집 서비스 운영 <br />
                2021.09.08 ~ 2024.09.07
              </div>
            </div>
            <div>
              <img src="https://assets.ohou.se/design-system/d5fb816a58bb6a06.png" width="32" height="32" />
              <div>
                고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.
                <span>서비스가입사실확인</span>
              </div>
            </div>
          </ThirdOfSecon>
          <ThirdOfThir>
            (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로,판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지
            않습니다. 단 (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.
          </ThirdOfThir>
          <ThirdOfFour>
            <AiFillYoutube />
            <FaInstagramSquare />
            <BsFacebook />
            <AiFillSlackCircle />
            <AiFillBehanceCircle />
          </ThirdOfFour>
          <ThirdOfFif>
            <p>Copyright 2014, bucketplace,Co.,Ltd. All rights reserved</p>
          </ThirdOfFif>
        </ThirdDiv>
      </div>
    </HouseFooter>
  )
}

export default Footer

const HouseFooter = styled.footer`
  display: grid;
  /* grid-template-columns: 1fr 1px 1fr;
  grid-template-rows: auto auto auto; */
  gap: 20px;
  background-color: #f7f9fa;
  padding: 20px;

  max-width: 100%;
`

const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  a {
    font-size: ${(props) => props.fontSize};
    font-weight: 600;
    text-decoration: none;
    color: inherit;
  }
  time {
    font-size: 14px;
  }
  p {
    font-size: 10px;
    white-space: pre-wrap;
    margin-bottom: 12px;
    line-height: 20px;
  }
  button {
    border: 0.5px solid #dadcdf;
    border-radius: 5px;
    background-color: transparent;
    font-size: 14px;
    width: fit-content;
    padding: 0px 8px;
    font-weight: 400;
  }
`

const SecondDiv = styled.div`
  width: 45%;
  /* height: 200px; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, min-content);
  grid-auto-flow: column;
  gap: 20px 10px;
  a {
    color: black;
    font-size: 12px;
    line-height: 16px;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
  }
  .userInfo {
    font-weight: 700;
  }
`

const ThirdDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #b4b8bd;
  font-size: 10px;
`

const ThirdOfFist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
  span {
    margin-left: 8px;
  }
  div:nth-child(1) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    div {
      width: fit-content;
    }
  }
`

const ThirdOfSecon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 10px;
`

const ThirdOfThir = styled.div`
  font-size: 10px;
`

const ThirdOfFour = styled.div`
  display: flex;
  justify-content: flex-start;
`

const ThirdOfFif = styled.div`
  font-size: 10px;
  display: inline-block;
  margin-right: 14px;
`

const VLineDiv = styled.div`
  width: 1px;
  background-color: #eaecef;
`

const LineDiv = styled.div`
  width: 1px;
  background-color: #eaecef;
  flex: 1;
`

