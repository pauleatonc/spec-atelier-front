import React from 'react';

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
	return (
		<Container>
			<BannerSliderContainer>
				<BannerSlider />
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
