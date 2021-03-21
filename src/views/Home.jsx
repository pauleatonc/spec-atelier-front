import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import AppLayout from '../components/layouts/AppLayout';
import NavBar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import HeaderHome from '../components/home/header';
import WhoWeUs from '../components/home/who-we-us';
import WhyBeSupplier from '../components/home/why-be-supplier/WhyBeSupplier';
import ClientsImageSlider from '../containers/clients-images-slider/ClientsImageSlider.container';

/**
 * The Home's view.
 */
const Home = () => {
	return (
		<HttpsRedirect>
			<AppLayout footer={<Footer />} header={<NavBar fixed />}>
				<HeaderHome />
				<WhoWeUs />
				<ClientsImageSlider />
				<WhyBeSupplier />
			</AppLayout>
		</HttpsRedirect>
	);
};

export default Home;
