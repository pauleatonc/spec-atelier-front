import React from 'react';
import Slider from 'react-slick';

import { DATA } from './constants';
import WALTER_SENTENCE from './images/walter_sentence.png';
import JOIN_UP from './images/join_up.png';
import BUILDING_AND_INNVOVATING from './images/building_and_innovating.png';
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
						<img
							className="container__images_content__image"
							src={WALTER_SENTENCE}
							alt="walter sentence"
						/>
					</BannerSlider>
					<BannerSlider>
						<img
							className="container__images_content__image"
							src={JOIN_UP}
							alt="join up"
						/>
					</BannerSlider>
					<BannerSlider>
						<img
							className="container__images_content__image"
							src={BUILDING_AND_INNVOVATING}
							alt="building and innovating"
						/>
					</BannerSlider>
				</Slider>
			</BannerSliderContainer>
			{DATA.map((section) => (
				<Section key={section.title}>
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
