import { getLocalStorage } from '@Helpers/localstorage.helper';
import getEndPoint from '@Configurations/config';

const token = getLocalStorage('token');
const userID = getLocalStorage('userID');

const endpoint = getEndPoint({ service: 'users' });
const apiHost = `${endpoint}/${userID}`;

const toQueryString = obj =>
	`?${Object.keys(obj)
		.map(key => `${key}=${obj[key]}`)
		.join('&')}`;

const request = async ({ url = '', params = '', method = 'GET' }) => {
	const options = {
		method,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};

	if (params)
		method === 'GET'
			? (url += toQueryString(params))
			: (options.body = JSON.stringify(params));

	const response = await fetch(apiHost + url, options);
	const result = await response.json();

	return result;
};

export default request;
