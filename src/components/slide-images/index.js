import React from 'react';
import Slider from 'react-slick';
import ANDREU from '@Assets/images/home/slide/andreu.png';
import ANSELMI from '@Assets/images/home/slide/anselmi.png';
import HOPPE from '@Assets/images/home/slide/hoppe.png';
import SIMONSWERK from '@Assets/images/home/slide/simonswerk.png';
import SOLECO from '@Assets/images/home/slide/soleco.png';
import Image from '../image/Image';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="container__row next" onClick={onClick}>
      <i className="fas fa-angle-right" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="container__row prev" onClick={onClick}>
      <i className="fas fa-angle-left" />
    </div>
  );
};

const settings = {
  className: 'container',
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: true,
  lazyLoad: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const handlePrintImages = obj =>
	obj.map(data => (
		<div key={data.id} className="container__images_content">
			<img
				className="container__images_content__image"
				src={data.logo}
				alt={data.altImage}
      />
    </div>
  ));

const SliderImages = ({ images }) => {
  return (
    <div className="slide">
      <div className="slide__inner">
        <h1 className="slide__inner__title">Principales colaboradores</h1>
        <Slider {...settings}>{handlePrintImages(images)}</Slider>
      </div>
    </div>
  );
};

export default SliderImages;
