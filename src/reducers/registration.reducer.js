import { REGISTRATION, REGISTRATION_ERROR } from '../config/constants';

const initialState = {
	isLogin: false,
	userData: {},
	error: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case REGISTRATION:
			return {
				...state,
				isLogin: action.payload.isLogin,
				userData: action.payload.userData,
			};
		case REGISTRATION_ERROR:
			return {
				...state,
				isLogin: action.payload.isLogin,
				error: action.payload.error,
			};
		default:
			return state;
	}
};
