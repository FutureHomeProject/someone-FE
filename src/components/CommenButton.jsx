import styled from 'styled-components';
import {AiOutlineDown} from 'react-icons/ai';

export const BlueButton = ({innerText, type, onClick, width, height, color}) => {
    switch(innerText) {
      case "글쓰기" :
        return <Button type={type} width={width} height={height} color={color}>{<>{innerText} <AiOutlineDown/></>}</Button>
      case "로그인" :
        return <Button2 width={width} height={height} color={color}>{innerText}</Button2>
      case "회원가입": 
        return <Button3 width={width} height={height} color={color}>{innerText}</Button3>
      case "중복확인": 
        return <Button2 onClick={onClick} width={width} height={height} color={color}>{innerText}</Button2>  
      default :
        return  <Button width={width} height={height} color={color}>{innerText}</Button>
    }
}

const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
  border-radius: 5px;
  border: none;
  padding: 5px;
  background: #4FC0E8;
  &:hover {
    background:#2A7C9B;
  }
`
const Button2 = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
  margin: 10px 0;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  padding: 5px;
  background: #FFC04C;
  &:hover {
    background:#B68936;
  }
`

const Button3 = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
  margin: 10px 0;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  padding: 5px;
  background: #B68936;
  &:hover {
    background:#4E3A17;
  }
`