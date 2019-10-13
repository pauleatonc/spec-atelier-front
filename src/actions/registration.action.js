/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import getEndPoint from 'Configuration/config';
import { REGISTRATION, REGISTRATION_ERROR } from 'Configuration/constants';

export const registrationAction = dispatch => data => {
	axios({
		url: `${getEndPoint('registration')}`,
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		data,
	})
		.then(response => {
			return dispatch({
				type: REGISTRATION,
				payload: {
					isLogin: response.data.logged_in,
					userData: response.userData,
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
