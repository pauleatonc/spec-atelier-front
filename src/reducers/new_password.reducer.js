/* eslint-disable import/no-unresolved */
import { NEW_PASSWORD, NEW_PASSWORD_ERROR } from '@Configurations/constants';

const initialState = {
	status: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case NEW_PASSWORD:
			return action.payload.status
				? {
						...state,
						status: action.payload.status,
				  }
				: state;
		case NEW_PASSWORD_ERROR:
			return {
				...state,
				status: action.payload.status,
			};
		default:
			return state;
	}
};
