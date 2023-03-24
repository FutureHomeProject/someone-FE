import React from 'react'
import styled from 'styled-components';


// Login - input parts //////////////////////////////////////////////////////
const inputHeigt = "40px"
export const EmailInput = ({value,onChange}) => {
  return (
    <Input 
        required
        heigth={inputHeigt}
        type="email"
        value={value}
        onChange={onChange}
        placeholder="이메일을 입력해주세요(exemple@gmail.com)"
        />
  )
}

export const PasswordInput = ({value,onChange, text}) => {
  return (
    <Input 
        required
        heigth={inputHeigt}
        type="password"
        value={value}
        onChange={onChange}
        placeholder={text}
        />
  )
}

export const TextInput = ({value,onChange, text}) => {
  return (
    <Input 
        required
        heigth={inputHeigt}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={text}
        />
  )
}

export default CommenInputl;

// Styled-components /////////////////////////////////////////////////////////
const Input = styled.input`
  display: block;
  height: ${props => props.inputHeigt};
  padding: 0 10px;
  background: #FCF5F6;
  font-size: .8rem;
`
