/* eslint-disable import/no-unresolved */
import { mapFrontUrls, handleGetEnvironment } from '@Configurations/config';

export const redirectToProjectsWhenIsLogin = () => {
  window.location.href = `${window.location.origin}/projects`;
};

export const redirectToHomesWhenIsLogout = () => {
  window.location.href = `${mapFrontUrls[handleGetEnvironment()]}/`;
};

export const redirectToLoginWhenIsLogout = () => {
  window.location.href = `${mapFrontUrls[handleGetEnvironment()]}/login`;
};
