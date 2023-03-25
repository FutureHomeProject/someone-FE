import React, { useState } from 'react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { BsCart } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import { BlueButton } from './CommenButton'
import { useNavigate } from 'react-router-dom'

export const cookies = new Cookies()

function Header() {
  const [signout, setSignout] = useState(false)
  const token = cookies.get('token')
  const navigate = useNavigate();
  const onsignout = () => {
    cookies.remove('token')
    setSignout(pre => !pre)
  }


  return (
    <>
      {!token ? (
        <>
          <HeaderDiv>
            {/* 토큰이 없을 때 */}
            <NavTop>
              <div className="logo">누군가의집</div>
              <div>
                <div>커뮤니티</div>
                <div>쇼핑</div>
              </div>

              <div>
                <div><RxMagnifyingGlass /></div>
                <div><BsCart /></div>
                <div className="authorization line" onClick={()=>navigate("/signin")}>로그인</div>
                <div className="authorization" onClick={()=>navigate("/signup")}>회원가입</div>
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
                <div>
                  <BsCart />
                </div>
                <div>{CgProfile}</div>
                <div onClick={onsignout}>로그아웃</div>
                <div>
                  <BlueButton
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
const HeaderDiv = styled.header`
  position: sticky;
  top:-1px;
  background-color: white;
  /* margin: 10px 0; */
  padding: 10px 0;
  border-bottom: 1px solid gray;
`

const NavTop = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 120px 1fr 400px;
  font-size: 1rem;
  margin-bottom: 10px;


  .logo {
    font-family: 'Jal_Onuel';
    font-size: 1.5rem;
    letter-spacing:-2.5px;
  }

  div {
    display: flex;
    align-items: flex-end;
    gap: 30px;

  }
  div:nth-child(2) {
    font-weight: 600;
  }

  div:nth-child(3) {
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
  }
  .authorization {
    font-size: .7rem;
  }
  .line {
  }
`
const NavBottom = styled.nav`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin: 0;
`

 {/* <HeaderDiv>
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
              <div>
                <BsCart />
              </div>
              <div>{CgProfile}</div>
              <div>
                <BlueButton width="60px" height="40px" color="white" innerText="글쓰기" />
              </div>
            </div>
          </NavTop>
          </HeaderDiv>

          <NavBottom>
        <div>쇼핑홈</div>
        <div>카테고리</div>
      </NavBottom> */}