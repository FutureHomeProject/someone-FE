import axios from "axios";

export const postSignup = async () => {
  const data = await axios.post(`${process.env.REART_APP_SERVER_KEY}/signup`)
  return data.date;
}


