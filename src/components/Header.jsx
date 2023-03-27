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
  const [signout, setSignout] = useState(false)
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