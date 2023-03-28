import React, { useState } from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { BsCart } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import Cookies from 'universal-cookie'
import { StyledButton } from './CommenButton'
import { useNavigate } from 'react-router-dom'
import { HeaderDiv, NavTop, NavBottom } from '../css/commenCss.jsx'

export const cookies = new Cookies()

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [signout, setSignout] = useState(false) // 토큰이 없어졌을 때 리렌더링을 위해, signout 을 사용하지 않으면 경고가 뜨는데, 13번줄의 각주로 이를 넘어갈 수 있다. 
  // ESLint는 JavaScript 코드에서 일관성 있는 스타일과 에러를 검출하고, 코드 품질을 향상시키기 위해 사용되는 정적 코드 분석 도구
  // eslint-disable-next-line은 ESLint의 경고 메시지를 무시하도록 지시하는 특별한 주석
  // no-unused-vars는 ESLint에서 제공하는 규칙 중 하나로, 사용되지 않는 변수가 있는 경우 경고를 표시
  const token = cookies.get('token')
  const navigate = useNavigate();
  const onsignout = () => {
    cookies.remove('token')
    setSignout(pre => !pre)
  }

  const onWrite = () => {
    navigate('/House')
  }


  return (
    <>
      {!token ? (
        <>
          <HeaderDiv>
            {/* 토큰이 없을 때 */}
            <NavTop>
              <div className="logo" onClick={()=>navigate("/")}>누군가의집</div>
              <div>
                <div>커뮤니티</div>
                <div>쇼핑</div>
              </div>

              <div>
                <div>
                  <div>
                    <RxMagnifyingGlass/>
                  </div>
                  <div>
                    <BsCart />
                  </div>
                </div>
                <div
                  onClick={() => navigate("/signin")}
                >
                  로그인
                </div>
                <div
                  className="authorization"
                  onClick={() => navigate("/signup")}
                >
                  회원가입
                </div>
              </div>
            </NavTop>
          </HeaderDiv>
          <NavBottom>
            <div>쇼핑홈</div>
            <div>카테고리</div>
          </NavBottom>
        </>
      ) : (
        <>
          {/* 토큰이 있을 때 */}
          <HeaderDiv>
            <NavTop>
              <div className="logo">누군가의집</div>
              <div>
                <div>커뮤니티</div>
                <div>쇼핑</div>
              </div>
              <div>
                <div>
                  <RxMagnifyingGlass />
                </div>
                <div className='icons'>
                  <BsCart />
                </div>
                <div><CgProfile/></div>
                <div onClick={onsignout}>로그아웃</div>
                <div onClick={onWrite}>
                  <StyledButton
                    width="70px"
                    height="40px"
                    color="white"
                    innerText="글쓰기"
                  />
                </div>
              </div>
            </NavTop>
          </HeaderDiv>

          <NavBottom>
            <div>쇼핑홈</div>
            <div>카테고리</div>
          </NavBottom>
        </>
      )}
    </>
  );
}

export default Header