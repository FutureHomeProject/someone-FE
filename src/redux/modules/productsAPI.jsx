import axios from "axios";

export const getproducts = async ()  => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/products`);
  console.log(response)
  return response
}  

// export const getproducts = async ()  => {
//     const token = cookies.get('token')
//     const response = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/products`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log(response.data)
//     return response.data
//   }

  
