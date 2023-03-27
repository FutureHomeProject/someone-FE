import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export const useSignin = (setErrModal, setErrormsg) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { mutate: signin } = useMutation({
    mutationFn : async (user) => {
    const data = await axios.post(`${process.env.REACT_APP_SERVER_KEY}/users/login`, user) 
    cookies.set('token', data.headers.authorization.split(" ")[1])
    return data.status
  },
  onSuccess: (data) => {
    switch (data) {
      case 200 :
          const token = cookies.get('token')
          if(token) {
            navigate("/")
          }
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
  return [signin]
}