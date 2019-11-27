/* eslint-disable import/no-unresolved */
import { mapFrontUrls, handleGetEnvironment } from '@Configurations/config';

const redirectToHomeWhenIsLogin = () => {
	window.location.href = mapFrontUrls[handleGetEnvironment()];
};

const redirectToProyectWhenIsLogin = () => {
	window.location.href = `${mapFrontUrls[handleGetEnvironment()]}/projects`;
};

export default { redirectToHomeWhenIsLogin, redirectToProyectWhenIsLogin };
