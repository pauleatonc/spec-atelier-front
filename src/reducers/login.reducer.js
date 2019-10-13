import { LOG_IN } from '../config/constants';

const initialState = {
	isLogin: false,
	userData: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				isLogin: action.payload.isLogin,
				userData: action.payload.userData,
			};
		default:
			return state;
	}
};
