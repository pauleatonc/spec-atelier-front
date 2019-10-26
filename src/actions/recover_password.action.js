/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import getEndPoint from '@Configurations/config';
import {
	RECOVER_PASSWORD,
	RECOVER_PASSWORD_ERROR,
} from '@Configurations/constants';

export const recoverPasswordAction = dispatch => email => {
	const endpoint = getEndPoint({ service: 'password_forgot' });

	fetch(`${endpoint}?email=${email}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(res => res.json())
		.then(response => {
			return dispatch({
				type: RECOVER_PASSWORD,
				payload: {
					sended: response.data.status,
				},
			});
		})
		.catch(error => {
			return dispatch({
				type: RECOVER_PASSWORD_ERROR,
				payload: {
					sended: false,
				},
			});
		});
};
