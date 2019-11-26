/* eslint-disable import/no-unresolved */
import React from 'react';
import ANDREU from '@Assets/images/home/slide/andreu.png';
import ANSELMI from '@Assets/images/home/slide/anselmi.jpg';
import HOPPE from '@Assets/images/home/slide/hoppe.jpg';
import SIMONSWERK from '@Assets/images/home/slide/simonswerk.jpg';
import SOLECO from '@Assets/images/home/slide/soleco.png';
import TESLA from '@Assets/images/home/slide/tesla.png';

const itemSlide = (data, i) => {
	return (
		<li key={i} className="slide__inner__container__item">
			<div
				data-slide={i + 1}
				className="slide__inner__container__item__content"
			>
				<img
					className="slide__inner__container__item__content__image"
					src={data.pathUrl}
					alt={data.name}
				/>
			</div>
		</li>
	);
};

const Slider = () => {
	const data = [
		{
			name: 'Andreu',
			pathUrl: ANDREU,
		},
		{
			name: 'anselmi',
			pathUrl: ANSELMI,
		},
		{
			name: 'hoppe',
			pathUrl: HOPPE,
		},
		{
			name: 'simonswerk',
			pathUrl: SIMONSWERK,
		},
		{
			name: 'soleco',
			pathUrl: SOLECO,
		},
		{
			name: 'tesla',
			pathUrl: TESLA,
		},
	];

	return (
		<div className="slide">
			<div className="slide__inner">
				<span type="button" className="slide__inner__control prev_buttton">
					<i className="fas fa-chevron-left" />
				</span>
				<span type="button" className="slide__inner__control next_buttton">
					<i className="fas fa-chevron-right" />
				</span>

				<ul className="slide__inner__container">
					{data.map((item, i) => itemSlide(item, i))}
				</ul>
			</div>
		</div>
	);
};

export default Slider;
