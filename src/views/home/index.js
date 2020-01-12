/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import HeaderHome from '@Components/home/header';
import WhoWeUs from '@Components/home/who-we-us';
import WhyBeSupplier from '@Components/home/why-be-supplier';
import removeClassAndAddCurrentToThisView from '@Helpers/remove-class-navbar.helper';
import SliderImages from '../../components/slide-images';

const Home = () => {
	removeClassAndAddCurrentToThisView();
	return (
		<>
			<HeaderHome />
			<WhoWeUs />
			<SliderImages />
			<WhyBeSupplier />
		</>
	);
};

export default connect(state => state)(Home);
