/* eslint-disable import/no-unresolved */
import { APP_PRESENTER, LOGIN_PRESENTER } from '@Configurations/constants';

export const initialState = {
	presenterView: 'app',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case APP_PRESENTER:
			return {
				...state,
				presenterView: action.payload.view,
			};
		case LOGIN_PRESENTER:
			return {
				...state,
				presenterView: action.payload.view,
			};
		default:
			return state;
	}
};
