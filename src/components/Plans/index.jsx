import React from 'react';

import Plan from '../Plan';
import { Container, Title } from './styles';

const Plans = ({ dataPlans, title }) => {
	return (
		<Container>
			{title && <Title>{title}</Title>}
			{dataPlans.map((plan) => (
				<Plan
					type={plan.type}
					title={plan.title}
					subtitle={plan.subtitle}
					itemsInfo={plan.info}
					footerInfo={plan.footer}
				/>
			))}
		</Container>
	);
};

export default Plans;
