import React from 'react'
import styled from 'styled-components';


// Login - input parts //////////////////////////////////////////////////////
const inputHeigt = "40px"
export const EmailInput = ({title, name, validate, conform, value, onChange}) => {
  return (
        <>
        <Title value={value} conform={conform}>{title}</Title>
        <Validate value={value} conform={conform}>{validate}</Validate>
        <Input 
            heigth={inputHeigt}
            name={name}
            type="email"
            value={value}
            conform={conform}
            onChange={onChange}
            placeholder="이메일을 입력해주세요"
        />
        </>
  )
}

export const PasswordInput = ({title, name, validate, conform, value, onChange}) => {
  return (
        <>
        <Title value={value} conform={conform}>{title}</Title>
        <Validate value={value} conform={conform}>{validate}</Validate>
        <Input 
            heigth={inputHeigt}
            name={name}
            type="password"
            value={value}
            conform={conform}
            onChange={onChange}
            minLength="8"
            placeholder= {title  === "비밀번호" ? "비밀번호" : "비밀번호 확인"}
            
        />
        </>
  )
}

export const TextInput = ({title, name, validate,value, conform, onChange}) => {
  return (
        <>
        <Title value={value} conform={conform}>{title}</Title>
        <Validate value={value} conform={conform}>{validate}</Validate>
        <Input 
            heigth={inputHeigt}
            name={name}
            type="email"
            value={value}
            onChange={onChange}
            conform={conform}
            placeholder="별명(2-15자)"
            minLength="2"
            maxLength="15"
        />
        </>
  )
}

// Styled-components /////////////////////////////////////////////////////////
const Input = styled.input`
  display: block;
  height: ${(props) => props.inputHeigt};
  padding: 0 10px;
  background: #fcf5f6;
  font-size: 0.8rem;
  border: ${(props) =>
    props.value === "" && !props.conform
      ? "none"
      : props.value != "" && !props.conform
      ? "2px solid red"
      : "none"};
  border-radius: ${(props) =>
    props.value === "" && !props.conform
      ? "none"
      : props.value != "" && !props.conform
      ? "5px"
      : "none"};
  &:focus {
    outline: none;
  }
`;


const Title = styled.p`
  margin: 0;
  margin-top: 20px;
  color: ${(props) =>
    props.value === "" && !props.conform
      ? "black"
      : props.value != "" && !props.conform
      ? "red"
      : "black"};
`

const Validate = styled.p`
  color: gray;
  font-size: 0.7rem;
  color: ${(props) =>
    props.value === "" && !props.conform
      ? "black"
      : props.value != "" && !props.conform
      ? "red"
      : "black"};
`;

const Div = styled.div`
`
