import React from 'react';
import Slider from 'react-slick';

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

const handlePrintImages = (obj) =>
	obj.map((data) => (
		<div key={data.id} className="container__images_content">
			<img
				className="container__images_content__image"
				src={data.logo}
				alt={data.altImage}
			/>
		</div>
	));

const SliderImages = ({ images }) => {
	const slidesToShow = images.length >= 5 ? 5 : images.length;
	const settings = {
		...(images.length > 5 && { className: 'container' }),
		dots: false,
		infinite: false,
		slidesToShow,
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
					slidesToShow: 1,
				},
			},
		],
	};
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
