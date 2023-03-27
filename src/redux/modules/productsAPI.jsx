import axios from "axios";

export const getproducts = async ()  => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/products`);
  
  return response
}  

