/* eslint-disable no-undef */
const mapUrls = {
	development: 'http://localhost:3000',
	production: 'https://spec-atelier.herokuapp.com',
};

const handleGetEnvironment = () => ENVIRONMENT;
const handleGetUrl = () => mapUrls[handleGetEnvironment()];
const handleGetEntryPointApi = path => `/api/${path}`;

const getEnpoint = (path = '') =>
	`${handleGetUrl()}${handleGetEntryPointApi(path)}`;

export default getEnpoint;
