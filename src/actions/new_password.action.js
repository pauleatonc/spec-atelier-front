/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import getEndPoint from 'Configuration/config';
import { NEW_PASSWORD, NEW_PASSWORD_ERROR } from 'Configuration/constants';

export const newPasswordAction = dispatch => ({ token, password }) => {
	axios({
		url: `${getEndPoint('password_reset')}?token=${token}&password=${password}`,
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(response => {
			return dispatch({
				type: NEW_PASSWORD,
				payload: {
					status: response.data.status,
				},
			});
		})
		.catch(error => {
			return dispatch({
				type: NEW_PASSWORD_ERROR,
				payload: {
					status: false,
				},
			});
		});
};
