import React from 'react';

// import { useHistory } from 'react-router';

import { Container, Title } from './Plans.styles';

import Plan from './components/plan';
import { DATA_PLANS } from './constants';

const Plans = () => {
	// const history = useHistory();
	return (
		<Container>
			<Title>Planes que se adaptan a tus necesidades:</Title>
			{DATA_PLANS.map((plan) => (
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
