//House.jsx
import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { StyledButton } from '../components/CommenButton'
import { BsTextParagraph, BsPencilSquare } from 'react-icons/bs'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import { HeaderDiv, NavTop } from '../css/commenCss.jsx'
import { useMutation, useQueryClient, QueryClient } from 'react-query'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const House = () => {
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
  const [house, setHouse] = useState({
    average: '',
    contents: '',
    dwellingtype: '',
    nickname: '',
    region: '',
    title: '',
    image: '',
  })

  const changeInputHandler = (event) => {
    const { value, name } = event.target
    setHouse((pre) => ({ ...pre, [name]: value }))
  }

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async (payload) => {
      console.log('payload-->', payload)
      axios.post('http://43.201.116.11:8080/houses/write', payload)
    },
    onSuccess: () => {
      window.alert('추가 성공!')
    },
  })

  const queryClient = new QueryClient()

  const uploadImage = async (file) => {
    const formData = new FormData()
    formData.append('file', file)

    const response = await axios.post('http://43.201.116.11:8080/houses/write', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response.data.url
  }

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0]

      const imageUrl = await uploadImage(file)

      queryClient.setQueryData('image', imageUrl)
    },
    [queryClient]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const { imgMutate } = useMutation(uploadImage)

  return (
    <>
      <HeaderDiv>
        <NavTop>
          <div
            className="logo"
            onClick={() => {
              navigate('/')
            }}
          >
            누군가의집
          </div>
          <div></div>
          <div>
            <StyledButton
              width="150px"
              height="40px"
              color="white"
              innerText={isLoading ? '등록중....' : '발행'}
              diabled={isLoading}
              onClick={() => {
                mutate(house)
              }}
            />
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
                <Select name="dwellingtype" id="dwellingtype" value={house.dwellingtype} onChange={changeInputHandler}>
                  <option value="">선택해주세요.</option>
                  <option value="본인 방">본인 방</option>
                  <option value="원룸">원룸</option>
                  <option value="오피스텔">오피스텔</option>
                  <option value="빌라&연립">빌라&연립</option>
                  <option value="아파트">아파트</option>
                  <option value="단독주택">단독주택</option>
                  <option value="협소주택">협소주택</option>
                  <option value="상업공간">상업공간</option>
                  <option value="사무공간">사무공간</option>
                  <option value="기타">기타</option>
                </Select>
                {house.dwellingtype}
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
                          <input type="text" name="average" id="average" value={house.average} onChange={changeInputHandler} />평
                        </Span>
                        {house.average}
                      </ul>
                    </div>
                  </li>
                </SecUl>
              </ListDiv>
              <ListDiv>
                <div> 지역 </div>
                <Select id="region" value={house.region} name="region" onChange={changeInputHandler}>
                  <option value="">선택 안 함</option>
                  <option value="서울특별시">서울특별시</option>
                  <option value="부산광역시">부산광역시</option>
                  <option value="대구광역시">대구광역시</option>
                  <option value="인천광역시">인천광역시</option>
                  <option value="광주광역시">광주광역시</option>
                  <option value="대전광역시">대전광역시</option>
                  <option value="울산광역시">울산광역시</option>
                  <option value="강원도">강원도</option>
                  <option value="경기도">경기도</option>
                  <option value="경상남도">경상남도</option>
                  <option value="경상북도">경상북도</option>
                  <option value="전라남도">전라남도</option>
                  <option value="전라북도">전라북도</option>
                  <option value="충청남도">충청남도</option>
                  <option value="충청북도">충청북도</option>
                  <option value="세종특별자치시">세종특별자치시</option>
                  <option value="제주특별자치시">제주특별자치도</option>
                </Select>
                <input value={house.region} name="region" onChange={changeInputHandler} />
                {house.region}
              </ListDiv>
            </form>
          </Hiddendiv>
        </Writeguide>
        <ImgBox>
          <BoxDiv>
            <button>
              <div {...getRootProps()}>
                <div>
                  <p>드래그 앤 드롭이나 추가하기 버튼으로</p>
                  <p> 커버 사진을 업로드 해주세요.</p>
                </div>
                <div>
                  <input {...getInputProps()} value={house.image} name="image" onChange={changeInputHandler} />
                  <p>
                    {' '}
                    <p>
                      *권장 사이즈
                      <br />
                      모바일: 1920 x 1080,최소 1400 x 1400(1:1 비율)
                      <br />
                      PC:1920 x 1080,최소 1400 x 787(16:9 비율)
                    </p>
                  </p>
                  {queryClient.getQueryData('image') && <img src={queryClient.getQueryData('image')} alt="preview" />}
                </div>
                <div>커버 사진 추가하기</div>
              </div>
            </button>
          </BoxDiv>
        </ImgBox>
        <TitleBox>
          <TitleInput
            type="text"
            placeholder="제목을 입력해주세요."
            maxLength="30"
            value={house.title}
            name="title"
            onChange={changeInputHandler}
          />
          {house.title}
        </TitleBox>
        <Hr />
        <ContentInput
          type="text"
          placeholder="내용을 입력해주세요"
          name="contents"
          value={house.contents}
          onChange={changeInputHandler}
        />
        {house.contents}
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

const Hr = styled.hr`
  width: 80%;
  background-color: #c5c5c5;
`
//글 쓰기 부분
const TitleBox = styled.div`
  display: block;
  align-items: center;
  margin: 0 auto;
`
const TitleInput = styled.input`
  border: none;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 80%;
  height: 5rem;
  font-size: 36px;
  ::placeholder {
    color: #c5c5c5;
  }
  :focus {
    outline: none;
  }
`
const ContentInput = styled.input`
  display: flex;
  font-size: 16px;
  margin: 0px auto;
  border: none;
  width: 80%;
  ::placeholder {
    color: #c5c5c5;
  }
  :focus {
    outline: none;
  }
`
