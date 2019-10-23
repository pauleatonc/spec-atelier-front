/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import getEndPoint from '@Configurations/config';
import { LOG_IN, LOG_IN_ERROR } from '@Configurations/constants';
import { setLocalStorage } from '@Helpers/localstorage.helper';

export const loginAction = dispatch => data => {
	axios({
		url: `${getEndPoint('sessions')}`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		data,
	})
		.then(response => {
			setLocalStorage({
				key: 'token',
				value: response.data.jwt,
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
