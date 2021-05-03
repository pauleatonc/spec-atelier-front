import React from 'react';

import {
	Container,
	ImageSection,
	TitleSection,
	SubtitleSection,
} from './styles';

const BusinessSectionInformation = ({ header, image, title, subtitle }) => {
	return (
		<Container>
			<ImageSection src={image} header={header} />
			<TitleSection header={header}>
				{title}
				{subtitle && <SubtitleSection>{subtitle}</SubtitleSection>}
			</TitleSection>
		</Container>
	);
};

export default BusinessSectionInformation;
