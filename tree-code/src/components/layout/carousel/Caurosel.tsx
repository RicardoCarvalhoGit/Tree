import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import CDI1 from '../../../assets/CDI1.png';
import CDI2 from '../../../assets/CDI2.png';
import CDI3 from '../../../assets/CDI3.png';

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5L15 12L8 19" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 5L9 12L16 19" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function Carousel() {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='carousel-container'>
      <Slider {...settings}>
        <div className='slider'>
          <img className='carousel-imagem' src={CDI1} alt="Imagem 1" />
        </div>
        <div className='slider'>
          <img className='carousel-imagem' src={CDI2} alt="Imagem 2"/>
        </div>
        <div className='slider'>
          <img className='carousel-imagem' src={CDI3} alt="Imagem 3"/>
        </div>
      </Slider>
      <div className="carousel-overlay">
        <p>BEM-VINDO A TREE</p>
        <button onClick={() => window.location.href="Certification"} className="carousel-button">Saiba Mais </button>
    </div>
    </div>
  );
}

export default Carousel;