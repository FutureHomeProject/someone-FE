import React, { useState } from 'react'
import styled from 'styled-components';
import { BlueButton } from '../components/CommenButton'
import { HeaderDiv, NavTop } from '../components/Header'
import {BsTextParagraph, BsPencilSquare} from 'react-icons/bs'
import {SlArrowDown,SlArrowUp } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom';

function House() {
  const navigate = useNavigate()
  const [hidden1, setHidden1] = useState(false)
  const hiddenToggle1 = () => {
    setHidden1(pre=> !pre)
    
  }
  const [hidden2, setHidden2] = useState(false)
  const hiddenToggle2 = () => {
    setHidden2(pre=> !pre)
    
  }
  return (
    <>
      <HeaderDiv onClick={()=>navigate('/')}>
        <NavTop>
          <div className="logo">누군가의집</div>
          <div></div>
          <div>
            <BlueButton
              width="150px"
              height="40px"
              color="white"
              innerText="발행"navigate
            />
          </div>
        </NavTop>
      </HeaderDiv>
      <Article>
        <Writeguide iconcolor="#90ee90">
          <div className="viewdiv" onClick={hiddenToggle1}>
              <div><BsTextParagraph /></div>
              <div>집들이 작성 가이드</div>
              <div>원활한 집들이 발행을 위해 꼭 읽어주세요.</div>
              <div className="arrow">{hidden1 ? <SlArrowUp /> : <SlArrowDown />}</div>
          </div>

          <Hiddendiv displaystate={hidden1}>
            <Ul>
              <li>에디터의 섭외 없이 작성해주시는 경우엔 확인 후 게시글 오픈이 반려될 수도 있습니다. 오픈 및 반려 여부는 댓글로 안내 드립니다.</li>
              <li>간단한 자기 소개 후 집에 관한 이야기를 들려주세요. (집 공간 사진 최소 1장 이상)</li>
              <li>도면이 있으면 좋아요. (손그림도 OK)</li>
              <li>사진 첨부 시 용량은 장당 최대 20MB까지 업로드할 수 있고, jpg, png 포맷을 지원합니다.</li>
              <li>정보를 많이 입력할수록 검색 결과에 많이 노출되어 조회수가 올라갑니다.</li>
              <li>커버사진과 제목은 에디터에 의해 변경될 수 있습니다.</li>
              <li>글 작성과 이미지 업로드 시, 타인의 지식재산권을 침해하지 않도록 유의해주세요.</li>
            </Ul>
          </Hiddendiv>
        </Writeguide>
        <Writeguide iconcolor="#FFC04C">
          <div className="viewdiv" onClick={hiddenToggle2}>
              <div><BsPencilSquare /></div>
              <div>필수 정보 입력</div>
              <div>공간을 이해하는데 필요한 정보이니 최대한 꼼꼼하게 입력해주세요.</div>
              <div className="arrow">{hidden1 ? <SlArrowUp /> : <SlArrowDown />}</div>
          </div>

          <Hiddendiv displaystate={hidden2}>
            <form>
              만들자  
            </form>
          </Hiddendiv>
        </Writeguide>
      </Article>
    </>
  );
}

export default House

const Article = styled.article`
  width: 100%;
  margin-top: 50px;
`

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
    grid-template-columns: 50px 200px 1fr 20px;
    gap: 5px;
    background-color: transparent;
    &:hover {
      background-color:#F3F3F3
    }

    div:nth-child(1),
    div:nth-child(2) {
      font-weight: 900;
      font-size: 1.5rem;
    }

    div:nth-child(1) {
      text-align: center;
      margin-left: 10px;
      border-radius: 13px;
      border: none;
      background-color: ${props => props.iconcolor} ;
      width: 2rem;
      height: 2rem;
      line-height: 2.5rem;
      color: white;
    }
    div:nth-child(3) {
    color: gray;
    text-align: left;
    }
    .arrow {
      position: relative;
      top: 4px;
      right: 10px;
    }
}

`;

const Hiddendiv = styled.div`
  display: ${props => props.displaystate ? "block" : "none"};
`

const Ul = styled.ul`
 margin: 0 30px;
  li {
    margin: 20px 0;
    font-size: 1.1rem;
  }
`