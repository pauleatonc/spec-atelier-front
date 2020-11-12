import React from 'react';
import Slider from 'react-slick';



const NextArrow = props => {
	const { onClick } = props;
	return (
		<div className="container__row next" onClick={onClick}>
			<i className="fas fa-angle-right" />
		</div>
	);
};

const PrevArrow = props => {
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
	slidesToShow: 5,
	slidesToScroll: 1,
	swipeToSlide: true,
	arrows: true,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
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
				src={data.pathImage}
				alt={data.name}
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
