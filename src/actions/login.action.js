/* eslint-disable import/no-unresolved */
import axios from 'axios';
import getEnpoint from 'Configuration/config';
import { LOG_IN } from 'Configuration/constants';

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
		.catch(err => {
			console.log(err);
		});
};

export default loginAction;
