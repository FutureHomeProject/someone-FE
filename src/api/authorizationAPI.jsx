import axios from 'axios'

export const postSignup = async () => {
  const data = await axios.post(`${process.env.REACT_APP_SERVER_KEY}/signup`)
  return data.date
}
