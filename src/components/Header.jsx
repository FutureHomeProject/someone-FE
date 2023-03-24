import React from 'react'
import {RxMagnifyingGlass} from 'react-icons/rx'
import {BsCart} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import styled from 'styled-components'
import Cookies from "universal-cookie";
import { BlueButton } from './CommenButton';
import {AiOutlineDown} from 'react-icons/ai';


export const cookies = new Cookies();

function Header() {
  const token = cookies.get('token')
  return (
    <header>
      {token ? (
        <>
          {/* 토큰이 없을 때 */}
          <NavTop>
            <div className='logo'>로고</div>
            <div>
              <MarginZoreP>커뮤니티</MarginZoreP>
              <MarginZoreP>쇼핑</MarginZoreP>
            </div>

            <div>
              <MarginZoreP>
                <RxMagnifyingGlass />
              </MarginZoreP>
              <MarginZoreP>
                <BsCart />
              </MarginZoreP>
              <MarginZoreP>로그인</MarginZoreP>
              <MarginZoreP>회원가입</MarginZoreP>
            </div>
          </NavTop>
          
          <NavBottom>
            <div>쇼핑홈</div>
            <div>카테고리</div>
          </NavBottom>
        </>
      ) : (
        <>
          {/* 토큰이 존재할 때 */}
          <div>
            <div className='logo'>로고</div>
            <div>na</div>
            <div>
              <MarginZoreP>
                <RxMagnifyingGlass />
              </MarginZoreP>
              <MarginZoreP>
                <BsCart />
              </MarginZoreP>
              <MarginZoreP>{CgProfile}</MarginZoreP>
              <MarginZoreP><BlueButton width="60px" height="40px" color="white" innerText="글쓰기"/></MarginZoreP>
              
            </div>
          </div>
          
    
          <NavBottom>
            <div>쇼핑홈</div>
            <div>카테고리</div>
          </NavBottom>
        </>
      )}
    </header>
  );
}

export default Header

const MarginZoreP = styled.p`
  margin: 0;
`

const NavTop = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 100px 1fr 400px;
  gap: 10px;
  font-size: 1.5rem;

  .logo {
    font-family: 'Jal_Onuel';
    font-size: 3rem;
  }

  div:nth-child(2) {
    display: flex;
    gap:30px;
  }

  div:nth-child(3) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    gap:30px;

  }
  
  
`
const NavBottom = styled.nav`
  display: flex;
  gap: 10px;
  
`