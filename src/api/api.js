import axios from "axios";
import { cookeis } from "./Cookeis";

const apis = axios.create({
  baseURL: process.env.REACT_APP_SERVER_KEY,
  headers: {
    "Accept-Control-Allow-Origin" : "*"
  },
})

export const apisToken = axios.create({
  baseURL: process.env.REACT_APP_SERVER_KEY,
  headers: {
    "Accept-Control-Allow-Origin" : "*"
  },
})

apisToken.interceptors.request.use(
  // 요청을 보내기 전에 수행되는 로직
  function (config) {
    const token = cookeis.get("token")
    config.headers["Authorization"] = `Bearer ${token}`
    return config
  }
)