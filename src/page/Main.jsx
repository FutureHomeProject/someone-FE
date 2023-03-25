import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageSlider from '../components/Slider';
import Products from '../components/Products';

function Main() {
  return (
    <>
    <Header/>
    <div>
      <ImageSlider/>
      <Products/>
    </div>
    <Footer />
  </>  
  )
}

export default Main