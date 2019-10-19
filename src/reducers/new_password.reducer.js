import { NEW_PASSWORD, NEW_PASSWORD_ERROR } from '../config/constants';

const initialState = {
	status: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case NEW_PASSWORD:
			return {
				...state,
				status: action.payload.status,
			};
		case NEW_PASSWORD_ERROR:
			return {
				...state,
				status: action.payload.status,
			};
		default:
			return state;
	}
};
