import { handleGetEnvironment, mapFrontUrls } from 'config/config';

export const redirectToProjectsWhenIsLogin = () => {
  window.location.href = `${window.location.origin}/projects`;
};

export const redirectToHomesWhenIsLogout = () => {
  window.location.href = `${mapFrontUrls[handleGetEnvironment()]}/`;
};

export const redirectToLoginWhenIsLogout = () => {
  window.location.href = `${mapFrontUrls[handleGetEnvironment()]}/login`;
};
