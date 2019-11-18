import getEndPoint from '@Configurations/config';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import { GET_ALL_PROJECTS } from '@Configurations/constants';

export const getAllProjectsAction = dispatch => () => {
	const endpoint = getEndPoint({ service: 'users' });
	const userID = getLocalStorage('userID');
	const token = getLocalStorage('token');

	fetch(`${endpoint}/${userID}/projects`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(res => res.json())
		.then(response => {
			return dispatch({
				type: GET_ALL_PROJECTS,
				payload: {
					projects: response.projects,
				},
			});
		})
		.catch(error => {
			console.log(error);
		});
};
