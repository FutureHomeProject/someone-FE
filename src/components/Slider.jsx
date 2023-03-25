import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import hou01 from '../img/benner/hou01.webp'
import hou02 from '../img/benner/hou02.webp'
import hou03 from '../img/benner/hou03.webp'
import hou04 from '../img/benner/hou04.webp'
import hou05 from '../img/benner/hou05.webp'

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 

  const settings = {
    dots: false,  // 하단에 표시되는 도트
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    prevArrow: <PreSliberBtn type="button" className="slick-prev"></PreSliberBtn>,
    nextArrow: <NextSliberBtn type="button" className="slick-next"></NextSliberBtn>,
    afterChange: (index) => setCurrentSlide(index) // 현재 슬라이더를 보여주기 위한 slider의 라이브러리 
  };

  return (
    <Layout style={{ width: "100%", margin: "0 auto" }}>
      <div>
      <Slider {...settings}>
        <div>
          <Img
            src={hou01}
            alt="Slide 1"
          />
        </div>
        <div>
          <Img
            src={hou02}
            alt="Slide 2"
          />
        </div>
        <div>
          <Img
            src={hou03}
            alt="Slide 3"  
          />
        </div>
        <div>
          <Img
            src={hou04}
            alt="Slide 4"
          />
        </div>
        <div>
          <Img
            src={hou05}
            alt="Slide 5"
          />
        </div>
      </Slider>
      <div className="SliderNum">
        {currentSlide + 1}/5
      </div>
      </div>
    </Layout>
  );
};

export default ImageSlider;

const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  position: relative;

  .SliderNum {
  position: absolute;
  // 부모태그의 위치에 제어되기 위애서는 부모태그에 포지션 설정이 relative 로 되어 있으면 쉽게 제어가 가능하다. 
  top: 10px;
  right: 20px;
  width: 80px;
  height: 30px;
  line-height: 30px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 800;
  color: white;
  background-color: #21212181;
  text-align: center;
  }
`


const Img = styled.img`
  width: 100%;
`

const PreSliberBtn = styled.button`
  padding: 0;
  position: absolute;
  top: 80%;
  left: 20px;
  z-index: 1;
  font-size: 0;
  line-height: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: none;
  outline: none;
  transition: opacity 0.2s ease-in-out;
  background-color: #80808081;

  &:hover {
    background-color: #0c0c0c81;
  }

  &:before {
    content: "❮";
    font-size: 24px;
    line-height: 1;
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const NextSliberBtn = styled.button`
  padding: 0;
  position: absolute;
  top: 80%;
  right: 20px;
  z-index: 1;
  font-size: 0;
  line-height: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: none;
  outline: none;
  transition: opacity 0.2s ease-in-out;
  background-color: #80808081;

  &:hover {
    background-color: #0c0c0c81;
  }

  &:before {
    content: "❯";
    font-size: 24px;
    line-height: 1;
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
