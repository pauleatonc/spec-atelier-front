import React from 'react';

import { Container, ContainerTitle, Title } from './styles';
import FaqItem from './components/FaqItem';

const FaqsSection = ({ faqList }) => {
	return (
		<Container>
			<ContainerTitle>
				<Title>Preguntas frecuentes</Title>
			</ContainerTitle>
			{faqList.map(({ title, subtitle }) => (
				<FaqItem title={title} subtitle={subtitle} />
			))}
		</Container>
	);
};

export default FaqsSection;
