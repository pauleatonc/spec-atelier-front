/* eslint-disable import/no-unresolved */
import { mapFrontUrls, handleGetEnvironment } from '@Configurations/config';

const redirectToProjectsWhenIsLogin = () => {
	window.location.href = `${mapFrontUrls[handleGetEnvironment()]}/projects`;
};

export default redirectToProjectsWhenIsLogin;
