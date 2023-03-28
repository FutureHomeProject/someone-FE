import axios from "axios";
import { useMutation } from "react-query";

export const useConfirm = (setModal, setErrModal,setErrormsg) => {
  
  const { mutate: confirm } = useMutation({
    mutationFn : async ([type, confirm]) => {
      let data;
      if (type === "email") {
        data = await axios.post(`${process.env.REACT_APP_SERVER_KEY}/users/confirm-email`, confirm) 
      }
      if (type === "nickname") {
        data = await axios.post(`${process.env.REACT_APP_SERVER_KEY}/users/confirm-nickname`, confirm) 
      }
      return data.status
    },
    onSuccess: (data) => {
      switch (data) {
        case 200 :
            setModal(pre=>!pre);
          return 
        default :
          return  
      }
      // 성공적으로 데이터를 업데이트한 후 실행될 로직을 작성합니다.
    },
    onError: (error) => {
      setErrormsg(error.response.data.message)
      setErrModal(pre=>!pre)
  }})
  return [confirm]
}