/* eslint-disable import/no-unresolved */
import axios from 'axios';
import getEnpoint from 'Configuration/config';
import { LOG_IN, LOG_IN_ERROR } from 'Configuration/constants';

const loginAction = dispatch => data => {
	axios({
		url: `${getEnpoint('registrations')}`,
		method: 'post',
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

export default loginAction;
