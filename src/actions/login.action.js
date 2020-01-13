/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import getEndPoint from '@Configurations/config';
import { LOG_IN, LOG_IN_ERROR, LOG_OUT } from '@Configurations/constants';
import {
	getLocalStorage,
	setLocalStorage,
	deleteLocalStorage,
} from '@Helpers/localstorage.helper';

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
				value: response.user.jwt,
			});

			setLocalStorage({
				key: 'userID',
				value: response.user.id,
			});
			return dispatch({
				type: LOG_IN,
				payload: {
					isLogin: true,
					userData: response.user,
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

export const logoutAction = dispatch => () => {
	const endpoint = getEndPoint({ service: 'logout' });
	const token = getLocalStorage('token');

	fetch(`${endpoint}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(res => res.json())
		.then(() => {
			deleteLocalStorage('token');
			deleteLocalStorage('userID');
			return dispatch({
				type: LOG_OUT,
				payload: {
					isLogin: false,
					userData: [],
				},
			});
		});
};
