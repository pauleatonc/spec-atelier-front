/* eslint-disable import/no-unresolved */
import {
	SHOW_LOGIN_DROPDOWN_CONTENT,
	HIDE_LOGIN_DROPDOWN_CONTENT,
} from '@Configurations/constants';

export const initialState = {
	show: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOGIN_DROPDOWN_CONTENT:
			return {
				...state,
				show: action.payload.show,
			};
		case HIDE_LOGIN_DROPDOWN_CONTENT:
			return {
				...state,
				show: action.payload.show,
			};
		default:
			return state;
	}
};
