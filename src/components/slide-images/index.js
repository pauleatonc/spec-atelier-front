import React from 'react';
import Slider from 'react-slick';
import ANDREU from '@Assets/images/home/slide/andreu.png';
import ANSELMI from '@Assets/images/home/slide/anselmi.jpg';
import HOPPE from '@Assets/images/home/slide/hoppe.jpg';
import SIMONSWERK from '@Assets/images/home/slide/simonswerk.jpg';
import SOLECO from '@Assets/images/home/slide/soleco.png';
import TESLA from '@Assets/images/home/slide/tesla.png';

const data = [
	{
		id: 1,
		altImage: 'Andreu',
		pathImage: ANDREU,
	},
	{
		id: 2,
		altImage: 'Anselmi',
		pathImage: ANDREU,
	},
	{
		id: 3,
		altImage: 'Hpppe',
		pathImage: ANDREU,
	},
	{
		id: 4,
		altImage: 'Simonswerk',
		pathImage: ANDREU,
	},
	{
		id: 5,
		altImage: 'Soleco',
		pathImage: ANDREU,
	},
	{
		id: 6,
		altImage: 'Tesls',
		pathImage: ANDREU,
	},
];

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
};

const handlePrintImages = obj =>
	obj.map(data => (
		<div key={data.id} className="container__images_content">
			<img
				className="container__images_content__image"
				src={data.pathImage}
				alt={data.altImage}
			/>
		</div>
	));

const SliderImages = () => {
	return (
		<div className="slide">
			<div className="slide__inner">
				<h1 className="slide__inner__title">Principales colaboradores</h1>
				<Slider {...settings}>{handlePrintImages(data)}</Slider>
			</div>
		</div>
	);
};

export default SliderImages;
