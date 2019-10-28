/* eslint-disable import/no-unresolved */
import {
	LOG_IN,
	LOG_IN_ERROR,
	GOOGLE_LOG_IN,
	GOOGLE_LOG_IN_ERROR,
} from '@Configurations/constants';

export const initialState = {
	isLogin: false,
	userData: {},
	error: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				isLogin: action.payload.isLogin,
				userData: action.payload.userData,
			};
		case GOOGLE_LOG_IN:
			return {
				...state,
				isLogin: action.payload.isLogin,
				userData: action.payload.userData,
			};
		case LOG_IN_ERROR:
			return {
				...state,
				isLogin: action.payload.isLogin,
				error: action.payload.error,
			};
		case GOOGLE_LOG_IN_ERROR:
			return {
				...state,
				isLogin: action.payload.isLogin,
				error: action.payload.error,
			};
		default:
			return state;
	}
};
