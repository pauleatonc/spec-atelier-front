/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import getEndPoint from '@Configurations/config';
import { REGISTRATION, REGISTRATION_ERROR } from '@Configurations/constants';
import { setLocalStorage } from '@Helpers/localstorage.helper';

export const registrationAction = dispatch => data => {
	const endpoint = getEndPoint({ service: 'registrations' });

	fetch(`${endpoint}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then(res => res.json())
		.then(response => {
			setLocalStorage({
				key: 'token',
				value: response.data.user.jwt,
			});

			return dispatch({
				type: REGISTRATION,
				payload: {
					isLogin: response.data.logged_in,
					userData: response.user,
				},
			});
		})
		.catch(error => {
			return dispatch({
				type: REGISTRATION_ERROR,
				payload: {
					isLogin: false,
					error,
				},
			});
		});
};
