import Cookies from "universal-cookie";

export const cookeis = new Cookies(); 
export const getcookies = (name, value, option) => {
  return cookeis(name, value, {...option})
}