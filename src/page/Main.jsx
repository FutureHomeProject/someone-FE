import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSlider from '../components/Slider';
import Products from '../components/Products';
import { useQuery } from 'react-query';
import { getproducts } from '../redux/modules/productsAPI';
import styled from 'styled-components';

function Main() {
  // const { data, isLoading, isError } = useQuery('products', getproducts);
  // console.log(data?.data.data)
  // if (isLoading) {
  //   return (<div>로딩 중....</div>)
  // }

  // if (isError) {
  //   return (<div>에러가 발생했습니다.</div>)
  // }

  return (
    <>
      <Header />
      <div>
        <ImageSlider />
        {/* <Products data={data} /> */}
        <Article>
          <Products
            id="1"
            title="LG전자"
            name="[오늘의딜] 트롬 워시타워 W20WAN 세탁23kg 건조20kg"
            sale="46%"
            price="2,359,000"
            review="리뷰 747"
          />
           <Products
            id="2"
            title="LG전자"
            name="[오늘의딜] 트롬 워시타워 W20WAN 세탁23kg 건조20kg"
            sale="46%"
            price="2,359,000"
            review="리뷰 747"
          />
           <Products
            id="3"
            title="LG전자"
            name="[오늘의딜] 트롬 워시타워 W20WAN 세탁23kg 건조20kg"
            sale="46%"
            price="2,359,000"
            review="리뷰 747"
          />
          <Products
            id="4"
            title="LG전자"
            name="[오늘의딜] 트롬 워시타워 W20WAN 세탁23kg 건조20kg"
            sale="46%"
            price="2,359,000"
            review="리뷰 747"
          />
          <Products
             id="5"
            title="LG전자"
            name="[오늘의딜] 트롬 워시타워 W20WAN 세탁23kg 건조20kg"
            sale="46%"
            price="2,359,000"
            review="리뷰 747"
          />
          
        </Article>
      </div>
      <Footer />
    </>
  );
}

export default Main;

const Article = styled.article`
  padding: 20px 60px;
  width: 1080px;
  min-width: 800px;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
`


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