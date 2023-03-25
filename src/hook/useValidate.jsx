import { useState } from "react"

export const useValidate = ({type, check}) => {
  const [inputValidate, setInputValidate] = useState('')
  const onChangeHandler = (e) => {
    setInputValidate(e.target.value)
  }
  switch (type) {
    case "email" :
      const emailcheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      const emailvalidate = emailcheck.test(inputValidate)
      return [inputValidate, onChangeHandler, emailvalidate]
    case "password":
      const passwordcheck = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:;<>?,./\\])(?!.*\s).{8,}$/
      const passwordvalidate = passwordcheck.test(inputValidate)
      return [inputValidate, onChangeHandler, passwordvalidate]  
    case "checkpw":
      const checkpwvalidate = inputValidate === check
      return [inputValidate, onChangeHandler, checkpwvalidate]
    default:
      const otherValidate = inputValidate.length >= 2 && true
      return [inputValidate, onChangeHandler, otherValidate]
    }
}