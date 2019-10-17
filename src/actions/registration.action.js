/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import getEndPoint from 'Configuration/config';
import { REGISTRATION, REGISTRATION_ERROR } from 'Configuration/constants';
import setLocalStorage from 'Helpers/localstorage.helper';

export const registrationAction = dispatch => data => {
	axios({
		url: `${getEndPoint('registrations')}`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		data,
	})
		.then(response => {
			setLocalStorage({
				key: 'token',
				value: response.data.jwt
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
