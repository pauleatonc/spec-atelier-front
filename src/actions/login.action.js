/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import getEndPoint from '@Configurations/config';
import { LOG_IN, LOG_IN_ERROR } from '@Configurations/constants';
import { setLocalStorage } from '@Helpers/localstorage.helper';

export const loginAction = dispatch => data => {
	const endpoint = getEndPoint({ service: 'sessions' });

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
				type: LOG_IN,
				payload: {
					isLogin: response.data.logged_in,
					userData: response.data.user,
				},
			});
		})
		.catch(error => {
			return dispatch({
				type: LOG_IN_ERROR,
				payload: {
					isLogin: false,
					error,
				},
			});
		});
};
