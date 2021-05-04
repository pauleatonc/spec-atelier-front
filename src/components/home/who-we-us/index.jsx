import React from 'react';
import Slider from 'react-slick';

import { DATA } from './constants';
import {
	Container,
	Section,
	Icon,
	InfoContainer,
	Title,
	TextDescription,
	BannerSliderContainer,
	BannerSlider,
} from './styles';

const WhoWeUs = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		swipeToSlide: true,
		lazyLoad: true,
	};
	return (
		<Container>
			<BannerSliderContainer>
				<Slider {...settings}>
					<BannerSlider>
						<h3>1</h3>
					</BannerSlider>
					<BannerSlider>
						<h3>2</h3>
					</BannerSlider>
					<BannerSlider>
						<h3>3</h3>
					</BannerSlider>
				</Slider>
			</BannerSliderContainer>
			{DATA.map((section) => (
				<Section>
					<Icon src={section.icon} alt={section.title} />
					<InfoContainer>
						<Title>{section.title}</Title>
						<TextDescription subtitle>{section.descent}</TextDescription>
						<TextDescription>{section.description}</TextDescription>
					</InfoContainer>
				</Section>
			))}
		</Container>
	);
};

export default WhoWeUs;
