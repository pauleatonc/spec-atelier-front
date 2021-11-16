import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import AppLayout from '../components/layouts/AppLayout';
import NavBar from '../containers/navbar/Navbar.container';
import Footer from '../components/footer';
import Header from '../components/home/header';
import WhoWeUs from '../components/home/who-we-us';
import Plans from '../components/Plans';
import { DATA_PLANS } from '../components/home/constants';
import ClientsImageSlider from '../containers/clients-images-slider/ClientsImageSlider.container';
import ModalPlanFormStepOne from '../containers/modal-plan-form';
import ModalPlanFormStepTwo from '../containers/modal-plan-form/StepTwo.index';
import ModalSuccess from '../containers/modal-plan-form/SuccessModal.index';
import { onShowAlertSuccess } from '../containers/alert/Alert.actions';
import { rejectNotifications } from '../containers/auth/auth.actions';
import { useParams, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
/**
 * The Home's view.
 */
const Home = () => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	//const params = useParams();
	const data = pathname.search("/home/"); 
	const array_url = pathname.split('/');
	console.log(pathname);
	// if(action === "refuse_invitation"){
	// 	const data = {
	// 			projectId: id,
	// 			notifiId: id
	// 		};
	// 		//dispatch(rejectNotifications(data));
	// 	dispatch(
	// 	  onShowAlertSuccess({ message: 'Proyecto rechazado.' }),
	// 	);
	// 	console.log("rechazado");
	// }
	return (
		<HttpsRedirect>
			<AppLayout footer={<Footer />} header={<NavBar fixed />}>
				<Header />
				<WhoWeUs />
				<ClientsImageSlider />
				<Plans
					dataPlans={DATA_PLANS}
					title="Planes que se adaptan a tus necesidades:"
				/>
			</AppLayout>
			<ModalPlanFormStepOne />
			<ModalPlanFormStepTwo />
			<ModalSuccess />
		</HttpsRedirect>
	);
};

export default Home;
