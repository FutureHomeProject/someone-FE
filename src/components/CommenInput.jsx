import React from 'react'
import styled from 'styled-components';


// Login - input parts //////////////////////////////////////////////////////
const inputHeigt = "40px"
export const EmailInput = ({title, name,validate,value,onChange}) => {
  return (
        <>
        <Title>{title}</Title>
        <Validate>{validate}</Validate>
        <Input 
            heigth={inputHeigt}
            name={name}
            type="email"
            value={value}
            onChange={onChange}
            placeholder="이메일을 입력해주세요"
        />
        </>
  )
}

export const PasswordInput = ({title, name, validate, conform, value,onChange}) => {
  return (
        <>
        <Title conform={conform}>{title}</Title>
        <Validate conform={conform}>{validate || conform}</Validate>
        <Input 
            heigth={inputHeigt}
            name={name}
            type="password"
            value={value}
            onChange={onChange}
            minLength="8"
            conform={conform}
            placeholder= {title  === "비밀번호" ? "비밀번호" : "비밀번호 확인"}
            
        />
        </>
  )
}

export const TextInput = ({title, name, validate,value,onChange}) => {
  return (
        <>
        <Title>{title}</Title>
        <Validate>{validate}</Validate>
        <Input 
            heigth={inputHeigt}
            name={name}
            type="email"
            value={value}
            onChange={onChange}
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
  height: ${props => props.inputHeigt};
  padding: 0 10px;
  background: #FCF5F6;
  font-size: .8rem;
  border : ${props=> props.conform === "동일한 비밀번호를 입력해주세요." ? "1px solid red" : "none"};
  border-radius : ${props=> props.conform === "동일한 비밀번호를 입력해주세요." ? "5px" : "none"};
`


const Title = styled.p`
  margin: 0;
  margin-top: 20px;
  color: ${props=> props.conform === "동일한 비밀번호를 입력해주세요." ? "red" : "black"};
`

const Validate = styled.p`
  color: gray;
  font-size: .7rem;
  color: ${props=> props.conform === "동일한 비밀번호를 입력해주세요." ? "red" : "gray"};
`

const Div = styled.div`
`
