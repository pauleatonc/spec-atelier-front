import React, {useEffect} from 'react';
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
import { rejectNotifications } from '../containers/auth/auth.actions';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import AlertContainer from '../containers/alert/Alert.container';
/**
 * The Home's view.
 */
const Home = () => {
	const dispatch = useDispatch();
	const { action , id, project_id } = useParams();
	useEffect(() => {
		if(action === "refuse_invitation"){
			const data = {
					projectId: id,
					notifiId: project_id
				};
			dispatch(rejectNotifications(data));
		}
	}, []);

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
			<AlertContainer/>
		</HttpsRedirect>
	);
};

export default Home;
