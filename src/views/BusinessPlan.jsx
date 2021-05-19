import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import Navbar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import Plans from '../components/Plans';
import BusinessSectionInformation from '../components/businessSectionInformation';
import {
	BUSINESS_PLANS,
	BUSINESS_SECTIONS_INFORMATION,
	FAQ_LIST,
} from '../config/constants/businessPlans';
import FaqsSection from '../containers/FaqsSection';

const BusinessPlan = () => {
	return (
		<AppLayout footer={<Footer />} header={<Navbar />}>
			<BusinessSectionInformation
				header
				image={BUSINESS_SECTIONS_INFORMATION.INFORMATION_HEADER.image}
				title={BUSINESS_SECTIONS_INFORMATION.INFORMATION_HEADER.title}
			/>
			<Plans dataPlans={BUSINESS_PLANS} />
			<BusinessSectionInformation
				image={BUSINESS_SECTIONS_INFORMATION.INFORMATION_OUR_COMUNITY.image}
				title={BUSINESS_SECTIONS_INFORMATION.INFORMATION_OUR_COMUNITY.title}
				subtitle={
					BUSINESS_SECTIONS_INFORMATION.INFORMATION_OUR_COMUNITY.subtitle
				}
			/>
			<FaqsSection faqList={FAQ_LIST} />
		</AppLayout>
	);
};

export default BusinessPlan;
