import React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import NavBar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import HeaderHome from '../components/home/header';
import WhoWeUs from '../components/home/who-we-us';
import WhyBeSupplier from '../components/home/why-be-supplier/WhyBeSupplier';
import BrandSliderContainer from '../containers/brand-slider/BrandSlider';

/**
 * The Home's view.
 */
const Home = () => {
	return (
		<AppLayout footer={<Footer />} header={<NavBar fixed />}>
			<HeaderHome />
			<WhoWeUs />
			<BrandSliderContainer />
			<WhyBeSupplier />
		</AppLayout>
	);
};

export default Home;
