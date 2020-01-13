/* eslint-disable no-undef */
const mapApiUrls = {
	development: 'http://localhost:8882',
	integration: 'http://localhost:3000',
	production: 'https://spec-atelier.herokuapp.com',
};

export const mapFrontUrls = {
	development: 'http://localhost:8080',
	integration: 'http://localhost:8080',
	production: 'https://specatelier-front.herokuapp.com',
};

export const handleGetEnvironment = () => ENVIRONMENT;
const handleGetApiUrl = () => mapApiUrls[handleGetEnvironment()];

const handleGetEntryPointApi = path => {
	switch (path) {
		case 'api':
			return '/api/';
		case 'googleOauth':
			return '/auth/';
		default:
			return '/api/';
	}
};

const getEndPoint = ({ path = 'api', service = '' }) =>
	`${handleGetApiUrl()}${handleGetEntryPointApi(path)}${service}`;

export default getEndPoint;
