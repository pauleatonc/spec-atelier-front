/* eslint-disable import/no-unresolved */
import { LOG_IN, LOG_IN_ERROR } from '@Configurations/constants';

const initialState = {
	isLogin: false,
	userData: {},
	error: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return action.payload.userData
				? {
						...state,
						isLogin: action.payload.isLogin,
						userData: action.payload.userData,
				  }
				: state;
		case LOG_IN_ERROR:
			return {
				...state,
				isLogin: action.payload.isLogin,
				error: action.payload.error,
			};
		default:
			return state;
	}
};
