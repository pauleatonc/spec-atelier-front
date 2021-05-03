import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import CLIENT_HEADER from '../assets/images/collaborators/collaborators_header.jpg';
import { ImgHeader } from './Collaborators.styles';

import Plans from '../components/Plans';
import { DATA_PLANS } from '../containers/BusinessPlan/constants';

const BusinessPlan = () => {
	return (
		<AppLayout footer={<Footer />} header={<Navbar />}>
			<ImgHeader background={CLIENT_HEADER} />
			<Plans dataPlans={DATA_PLANS} />
		</AppLayout>
	);
};

export default BusinessPlan;
