import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSlider from '../components/Slider';
import Products from '../components/Products';
import { useQuery, useQueryClient } from 'react-query';
import { getproducts } from '../redux/modules/productsAPI';

function Main() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery('products', getproducts);
  console.log(data);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <>
      <Header />
      <div>
        <ImageSlider />
        <Products data={data} />
      </div>
      <Footer />
    </>
  );
}

export default Main;


// import React from 'react'
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import ImageSlider from '../components/Slider';
// import Products from '../components/Products';
// import { useQuery, useQueryClient } from 'react-query';
// import { getproducts } from '../redux/modules/productsAPI';

// function Main() {
//   const {data, isLoading, isError} = useQuery("products", getproducts)
//   const qureyClient = useQueryClient();
//   console.log(data);

//   if(isLoading || isError) {
//     return <div>로딩 중....</div>
//   }
  
  
//   return (
//     <>
//     <Header/>
//     <div>
//       <ImageSlider/>
//       <Products/>
//     </div>
//     <Footer />
//   </>  
//   )
// }

// export default Main