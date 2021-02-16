/* eslint-disable no-undef */
const mapApiUrls = {
	development: 'http://localhost:8882',
	integration: 'http://spec-atelier.herokuapp.com',
	production: 'https://spec-atelier.herokuapp.com',
};

export const mapFrontUrls = {
	development: 'http://localhost:8080',
	integration: 'http://localhost:8080',
	production: 'https://spec-atelier-front.herokuapp.com',
};

export const firebaseConfig = {
	apiKey: 'AIzaSyAWyET2wg56d8sprVIH-CD2P9ghaqIKHVw',
	authDomain: 'spec-atelier.firebaseapp.com',
	databaseURL: 'https://spec-atelier.firebaseio.com',
	projectId: 'spec-atelier',
	storageBucket: 'spec-atelier.appspot.com',
	messagingSenderId: '291675161560',
	appId: '1:291675161560:web:84a47340c200841044e8ad',
	measurementId: 'G-7XM3CQ6R0H',
};

export const handleGetEnvironment = () => ENVIRONMENT;
const handleGetApiUrl = () => mapApiUrls[handleGetEnvironment()];

const handleGetEntryPointApi = (path) => {
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
