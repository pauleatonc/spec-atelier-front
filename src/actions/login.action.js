/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import getEndPoint from 'Configuration/config';
import { LOG_IN, LOG_IN_ERROR } from 'Configuration/constants';

export const loginAction = dispatch => data => {
	axios({
		url: `${getEndPoint('sessions')}`,
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		data,
	})
		.then(response => {
			return dispatch({
				type: LOG_IN,
				payload: {
					isLogin: response.data.logged_in,
					userData: response.userData,
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
