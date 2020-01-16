/* eslint-disable import/no-unresolved */
import { mapFrontUrls, handleGetEnvironment } from '@Configurations/config';

export const redirectToProjectsWhenIsLogin = () => {
	window.location.href = `${mapFrontUrls[handleGetEnvironment()]}/projects`;
};

export const redirectToHomesWhenIsLogout = () => {
	window.location.href = `${mapFrontUrls[handleGetEnvironment()]}/`;
};
