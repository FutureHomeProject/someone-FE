import styled from 'styled-components';
import {AiOutlineDown} from 'react-icons/ai';

export const BlueButton = ({innerText, width, height, color}) => {
    switch(innerText) {
      case "글쓰기" :
        return <Button width={width} height={height} color={color}>{<>{innerText} <AiOutlineDown/></>}</Button>
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
  background: #1E90FF;
  &:hover {
    background:#115291;
  }
`