import React, { useState } from 'react'
import styled from 'styled-components'
import { BlueButton } from '../components/CommenButton'
import { HeaderDiv, NavTop } from '../components/Header'
import { BsTextParagraph, BsPencilSquare } from 'react-icons/bs'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

function House() {
  const navigate = useNavigate()
  const [hidden1, setHidden1] = useState(false)
  const hiddenToggle1 = () => {
    setHidden1((pre) => !pre)
  }
  const [hidden2, setHidden2] = useState(false)
  const hiddenToggle2 = () => {
    setHidden2((pre) => !pre)
  }
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)

  const handleCheck1 = () => {
    setIsChecked1(true)
    setIsChecked2(false)
    setIsChecked3(false)
  }

  const handleCheck2 = () => {
    setIsChecked1(false)
    setIsChecked2(true)
    setIsChecked3(false)
  }

  const handleCheck3 = () => {
    setIsChecked1(false)
    setIsChecked2(false)
    setIsChecked3(true)
  }

  return (
    <>
      <HeaderDiv onClick={() => navigate('/')}>
        <NavTop>
          <div className="logo">누군가의집</div>
          <div></div>
          <div>
            <BlueButton width="150px" height="40px" color="white" innerText="발행" navigate />
          </div>
        </NavTop>
      </HeaderDiv>
      <Article>
        <Writeguide iconcolor="#90ee90">
          <div className="viewdiv" onClick={hiddenToggle1}>
            <div>
              <BsTextParagraph />
            </div>
            <div>집들이 작성 가이드</div>
            <div>원활한 집들이 발행을 위해 꼭 읽어주세요.</div>
            <div className="arrow">{hidden1 ? <SlArrowUp /> : <SlArrowDown />}</div>
          </div>

          <Hiddendiv displaystate={hidden1}>
            <Ul>
              <li>
                에디터의 섭외 없이 작성해주시는 경우엔 확인 후 게시글 오픈이 반려될 수도 있습니다. 오픈 및 반려 여부는 댓글로 안내
                드립니다.
              </li>
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
            <div>
              <BsPencilSquare />
            </div>
            <div>필수 정보 입력</div>
            <div>공간을 이해하는데 필요한 정보이니 최대한 꼼꼼하게 입력해주세요.</div>
            <div className="arrow">{hidden2 ? <SlArrowUp /> : <SlArrowDown />}</div>
          </div>
          {/* //63줄에 hidden1 을 hidden2 로 고침 */}
          <Hiddendiv displaystate={hidden2}>
            <form>
              <ListDiv>
                <div className="dwellingtype">주거형태</div>
                <Select>
                  <option>선택해주세요.</option>
                  <option>본인 방</option>
                  <option>원룸</option>
                  <option>오피스텔</option>
                  <option>빌라&연립</option>
                  <option>아파트</option>
                  <option>단독주택</option>
                  <option>협소주택</option>
                  <option>상업공간</option>
                  <option>사무공간</option>
                  <option>기타</option>
                </Select>
              </ListDiv>
              <ListDiv>
                <div className="average">평수</div>
                <SecUl>
                  <li>
                    <div>
                      <Rinput
                        type="radio"
                        htmlFor="check-box"
                        onClick={handleCheck1}
                        id="contactChoice1"
                        name="average"
                        value="cottage"
                      />
                      단층
                    </div>
                    <div>
                      <ul className="FirstFloorAverage" style={{ display: isChecked1 ? 'block' : 'none' }}>
                        <Span border="1px solid #FF6C6C" focusborder="3px solid #FFB5B5">
                          <input type="text" />평
                        </Span>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Rinput
                        type="radio"
                        htmlFor="check-box"
                        onClick={handleCheck2}
                        id="contactChoice2"
                        name="average"
                        value="secondFloor"
                      />
                      2층 단독/협소주택
                    </div>
                    <div>
                      <ul className="SeocondFloorAverage" style={{ display: isChecked2 ? 'block' : 'none' }}>
                        <div>
                          <label className="SeocondFloorAverage">연면젹</label>
                          <Span border="1px solid #FF6C6C" focusborder="3px solid #FFB5B5">
                            <input className="SeocondFloorAverage" type="text" />평
                          </Span>
                        </div>
                      </ul>
                      <ul className="SeocondFloorAverage" style={{ display: isChecked2 ? 'block' : 'none' }}>
                        <div>
                          <label className="SeocondFloorAverage">1층</label>
                          <Span border="1px solid black" focusborder="3px solid #BBEDFC">
                            <input className="SeocondFloorAverage" type="text" />평
                          </Span>
                        </div>
                      </ul>
                      <ul className="SeocondFloorAverage" style={{ display: isChecked2 ? 'block' : 'none' }}>
                        <div>
                          <label className="SeocondFloorAverage">2층</label>
                          <Span border="1px solid black" focusborder="3px solid #BBEDFC">
                            <input className="SeocondFloorAverage" type="text" />평
                          </Span>
                        </div>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div>
                      <Rinput
                        type="radio"
                        htmlFor="check-box"
                        style={{ display: 'block' }}
                        onClick={handleCheck3}
                        id="contactChoice3"
                        name="average"
                        value="thirdFloor"
                      />
                      3층 이상 단독/협소주택
                    </div>
                    <div>
                      <ul className="thirdFloorAverage" style={{ display: isChecked3 ? 'block' : 'none' }}>
                        <div>
                          <label className="thirdFloorAverage">연면젹</label>
                          <Span border="1px solid #FF6C6C" focusborder="3px solid #FFB5B5">
                            <input className="thirdFloorAverage" type="text" />평
                          </Span>
                        </div>
                      </ul>
                      <ul className="thirdFloorAverage" style={{ display: isChecked3 ? 'block' : 'none' }}>
                        <div>
                          <label className="thirdFloorAverage">1층</label>
                          <Span border="1px solid black" focusborder="3px solid #BBEDFC">
                            <input className="thirdFloorAverage" type="text" />평
                          </Span>
                        </div>
                      </ul>
                      <ul className="thirdFloorAverage" style={{ display: isChecked3 ? 'block' : 'none' }}>
                        <div>
                          <label className="thirdFloorAverage">2층</label>
                          <Span border="1px solid black" focusborder="3px solid #BBEDFC">
                            <input className="thirdFloorAverage" type="text" />평
                          </Span>
                        </div>
                      </ul>
                      <ul className="thirdFloorAverage" style={{ display: isChecked3 ? 'block' : 'none' }}>
                        <div>
                          <label className="thirdFloorAverage">3층</label>
                          <Span border="1px solid black" focusborder="3px solid #BBEDFC">
                            <input className="thirdFloorAverage" type="text" />평
                          </Span>
                        </div>
                      </ul>
                    </div>
                  </li>
                </SecUl>
              </ListDiv>
            </form>
          </Hiddendiv>
        </Writeguide>
        <ImgBox>
          <BoxDiv>
            <button>
              <div>
                <p>드래그 앤 드롭이나 추가하기 버튼으로</p>
                <p> 커버 사진을 업로드 해주세요.</p>
              </div>
              <div>
                <p>
                  *권장 사이즈
                  <br />
                  모바일: 1920 x 1080,최소 1400 x 1400(1:1 비율)
                  <br />
                  PC:1920 x 1080,최소 1400 x 787(16:9 비율)
                </p>
              </div>
              <div>커버 사진 추가하기</div>
            </button>
          </BoxDiv>
        </ImgBox>
        <div>
          <input type="text" placeholder="제목을 입력해주세요." maxLength="30" />
          <div>필수 입력 항목입니다. </div>
          <div>"0""/""30"</div>
          <input />
        </div>
      </Article>
    </>
  )
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
      background-color: #f3f3f3;
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
      background-color: ${(props) => props.iconcolor};
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
`

const Hiddendiv = styled.div`
  display: ${(props) => (props.displaystate ? 'block' : 'none')};
`

const Ul = styled.ul`
  margin: 0 30px;
  li {
    margin: 20px 0;
    font-size: 1.1rem;
  }
`
//주거형태
const Select = styled.select`
  width: 15rem;
  padding: 10px;
  border-radius: 4px;
  border-color: #b7b7b7;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: #b7b7b7;
  font-size: 15px;
  :focus {
    border-color: #ff6c6c;
  }
`

const ListDiv = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 13px;
  gap: 40px;
`
const SecUl = styled.ul`
  display: flex;
  list-style-type: none;
  div:nth-child(1) {
    margin-top: 10px;
    width: auto;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  div:nth-child(2) {
    width: auto;
    padding: 22px 0px;
    display: flex;
    justify-content: space-evenly;
  }
`
const Span = styled.span`
  background-color: #fff;
  color: black;
  line-height: 20px;
  height: 20px;
  width: 5rem;
  padding: 10px;
  border: ${(props) => props.border};
  border-radius: 4px;
  font-size: 9pt;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border: 0px;
    width: 5rem;
    background-color: #fff;
    outline: none;
  }
  :hover {
    background-color: #f9f9f9;
    input {
      background-color: #f9f9f9;
    }
  }
  :focus-within {
    border: ${(props) => props.focusborder};
  }
`
const Rinput = styled.input`
  display: block;
  appearance: none;
  border: max(2px, 0.1em) solid gray;
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  transition: border 0.5s ease-in-out;
  :checked {
    border: 0.4em solid tomato;
  }
  :focus-visible {
    outline-offset: max(2px, 0.1em);
    outline: max(2px, 0.1em) dotted tomato;
  }
  :hover {
    background-color: #f3f3f3;
    cursor: pointer;
  }
`

//image파일 업로드 부분
const ImgBox = styled.div`
  width: 80%;
  height: 405px;
  margin: 0 auto;
`

const BoxDiv = styled.div`
  position: relative;
  width: 100%;
  height: 409px;
  :focus-within {
    border: 2px solid #ef7f7b;
  }
  button {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font: inherit;
    font-weight: 900;
    background-color: #f7f8fa;
    border: none;
    border-radius: 4px;
  }
  div:nth-child(1) {
    font-weight: 700;
    font-size: 16px;
    color: #303438;
    /* line-height: 20px; */
  }
  div:nth-child(2) {
    p {
      font-size: 13px;
      font-weight: 500;
      color: #848c93;
    }
  }
  div:nth-child(3) {
    margin: 24px 0px 0px;
    padding: 13px 16px;
    background-color: #4c5053;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    &:hover {
      background-color: #778189;
    }
  }
`
//글 쓰기 부분
