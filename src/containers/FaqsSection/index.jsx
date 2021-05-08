import React from 'react';

import { Container, ContainerTitle, Title } from './styles';
import FaqItem from './components/FaqItem';

const FaqsSection = ({ faqList }) => {
	return (
		<Container>
			<ContainerTitle>
				<Title>Preguntas frecuentes</Title>
			</ContainerTitle>
			{faqList.map(({ id, title, subtitle, body }) => (
				<FaqItem key={id} title={title} subtitle={subtitle} body={body} />
			))}
		</Container>
	);
};

export default FaqsSection;
