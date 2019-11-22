/* eslint-disable import/no-unresolved */
import { mapFrontUrls, handleGetEnvironment } from '@Configurations/config';

const redirectToHomeWhenIsLogin = () => {
	window.location.href = mapFrontUrls[handleGetEnvironment()];
};

export default redirectToHomeWhenIsLogin;
