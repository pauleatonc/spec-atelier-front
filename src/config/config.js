export default {
	handleGetUrl() {
		const url = {
			development: 'http://localhost:3000',
			production: 'https://spec-atelier.herokuapp.com',
		};
		return url[this.handleGetEnvironment()];
	},
	handleGetEnvironment() {
		return ENVIRONMENT;
	},
	handleGetEntryPointApi(path) {
		return `/api/${path}`;
	},
};
