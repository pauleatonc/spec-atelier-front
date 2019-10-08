export default {
	handleGetUrl() {
		const url = {
			development: 'http://localhost:3000',
			integration: 'heroku_url',
			production: 'production_url',
		};
		return url[this.handleGetEnvironment()];
	},
	handleGetEnvironment() {
		return ENVIRONMENT;
	},
	handleGetEntryPointApi(path) {
		return `/node/api/${path}`;
	},
};
