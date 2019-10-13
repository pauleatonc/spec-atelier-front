/* eslint-disable no-undef */
const mapUrls = {
	development: 'http://localhost:8882',
	integration: 'http://localhost:3000',
	production: 'https://spec-atelier.herokuapp.com',
};

const handleGetEnvironment = () => ENVIRONMENT;
const handleGetUrl = () => mapUrls[handleGetEnvironment()];
const handleGetEntryPointApi = path => `/api/${path}`;

const getEndPoint = (path = '') =>
	`${handleGetUrl()}${handleGetEntryPointApi(path)}`;

export default getEndPoint;
