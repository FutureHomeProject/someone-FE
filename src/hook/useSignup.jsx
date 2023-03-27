import axios from "axios"
import { useMutation } from "react-query"

export const useSignup = (setModal, setSuccessmsg, setErrModal, setErrormsg) => {
  const { mutate: signup } = useMutation({
    mutationFn : async (user) => {
      const data = await axios.post(`${process.env.REACT_APP_SERVER_KEY}/users/signup`, user) 
      return data.status
    },
    onSuccess: (data) => {
      switch (data) {
        case 200 :
            setSuccessmsg("회원가입이 승인되었습니다.")
            setModal(pre=>!pre);
          return 
        default :
          return  
      }
      // 성공적으로 데이터를 업데이트한 후 실행될 로직을 작성합니다.
    },
    onError: (error) => {
      setErrModal(pre=>!pre)
      setErrormsg(error.response.data.message);
      // 에러 발생 시 실행될 로직을 작성합니다.
  }})
  return [signup]
}