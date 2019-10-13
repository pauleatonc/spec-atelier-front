import { LOG_IN } from '../config/constants';

const initialState = {
	isLogin: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				isLogin: action.payload.isLogin,
			};
		default:
			return state;
	}
};
