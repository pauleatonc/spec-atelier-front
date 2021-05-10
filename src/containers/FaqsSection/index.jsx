import React from 'react';

import { Container, ContainerTitle, Title, IconFaqs } from './styles';
import FaqItem from './components/FaqItem';
import ICON_FAQS from '../../assets/images/businessPlan/icon_faqs.png';

const FaqsSection = ({ faqList }) => {
	return (
		<Container>
			<ContainerTitle>
				<IconFaqs src={ICON_FAQS} />
				<Title>Preguntas frecuentes</Title>
			</ContainerTitle>
			{faqList.map(({ id, title, subtitle, body }) => (
				<FaqItem key={id} title={title} subtitle={subtitle} body={body} />
			))}
		</Container>
	);
};

export default FaqsSection;
