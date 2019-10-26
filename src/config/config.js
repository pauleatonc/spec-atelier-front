/* eslint-disable no-undef */
const mapUrls = {
	development: 'http://localhost:8882',
	integration: 'http://localhost:3000',
	production: 'https://spec-atelier.herokuapp.com',
};

const handleGetEnvironment = () => ENVIRONMENT;
const handleGetUrl = () => mapUrls[handleGetEnvironment()];

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
	`${handleGetUrl()}${handleGetEntryPointApi(path)}${service}`;

export default getEndPoint;
