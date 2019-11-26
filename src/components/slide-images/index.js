/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect, useRef } from 'react';
import ANDREU from '@Assets/images/home/slide/andreu.png';
import ANSELMI from '@Assets/images/home/slide/anselmi.jpg';
import HOPPE from '@Assets/images/home/slide/hoppe.jpg';
import SIMONSWERK from '@Assets/images/home/slide/simonswerk.jpg';
import SOLECO from '@Assets/images/home/slide/soleco.png';
import TESLA from '@Assets/images/home/slide/tesla.png';

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

const itemSlide = (item, i) => {
	return (
		<li key={i} className="slide__inner__container__item">
			<div
				data-slide={i + 1}
				className="slide__inner__container__item__content"
			>
				<img
					className="slide__inner__container__item__content__image"
					src={item.pathUrl}
					alt={item.name}
				/>
			</div>
		</li>
	);
};

const Slider = () => {
	const [productListWidth, setProductListWidth] = useState(0);
	const [productListSteps, setProductListSteps] = useState(0);
	const [productAmount, setProductAmount] = useState(0);
	const productList = useRef();
	const productAmountVisible = 4;
	const imagesLength = data.length;

	useEffect(() => {
		setProductAmount(productAmount + imagesLength);
		setProductListWidth(productListWidth + imagesLength * 350);
	}, []);

	if (productList.current) {
		productList.current.style.width = `${productListWidth}px`;
	}

	const handleMoveSlide = () => {
		productList.current.style.transform = `translateX(-${305 *
			productListSteps}px)`;
	};

	const previousPressed = () => {
		if (productListSteps > 0) {
			setProductListSteps(productListSteps - 1);
		}
		handleMoveSlide();
	};

	const nextPressed = () => {
		if (productListSteps < productAmount - productAmountVisible) {
			setProductListSteps(productListSteps + 1);
		}
		handleMoveSlide();
	};

	return (
		<div className="slide">
			<div className="slide__control">
				<span
					type="button"
					className="slide__control__buttons prev_buttton"
					data-type="previous"
					onClick={previousPressed}
				>
					<i className="fas fa-chevron-left" />
				</span>
				<span
					type="button"
					className="slide__control__buttons next_buttton"
					data-type="next"
					onClick={nextPressed}
				>
					<i className="fas fa-chevron-right" />
				</span>
			</div>
			<div className="slide__inner">
				<ul className="slide__inner__container" ref={productList}>
					{data.map((item, i) => itemSlide(item, i))}
				</ul>
			</div>
		</div>
	);
};

export default Slider;
