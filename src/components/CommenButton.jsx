import styled from 'styled-components';
import {AiOutlineDown} from 'react-icons/ai';

export const BlueButton = ({innerText, width, height, color}) => {
    switch(innerText) {
      case "글쓰기" :
        return <Button width={width} height={height} color={color}>{<>{innerText} <AiOutlineDown/></>}</Button>

      case "로그인" : 
        return <Button2 width={width} height={height} color={color}>{innerText}</Button2>
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